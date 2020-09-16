import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import authRoute from "./routes/auth.js";
import matchRoute from "./routes/matches.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB.
const connection = process.env.mongo_uri;
mongoose.connect(connection, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

// Pusher config for real time.
const pusher = new Pusher({
	appId: process.env.pusher_appID,
	key: process.env.pusher_key,
	secret: process.env.pusher_secret,
	cluster: "ap2",
	encrypted: true,
});

const db = mongoose.connection;
db.once("open", () => {
	console.log("DB connected");
	const collection = db.collection("matches");
	const changeStream = collection.watch();

	changeStream.on("change", (change) => {
		if (change.operationType === "delete") {
			pusher.trigger("matches", "deleted", {
				_id: change.documentKey._id,
			});
		} else if (change.operationType === "insert") {
			pusher.trigger("matches", "inserted", {
				_id: change.fullDocument._id,
			});
		} else {
			console.log("Error triggering pusher.");
		}
	});
});

// API Routes
app.use("/api/user", authRoute);

app.use("/api", matchRoute);

app.get("/", async (req, res) => {
	res.status(200).send("Table Time Backend");
});

// Listen on specified PORT.
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
