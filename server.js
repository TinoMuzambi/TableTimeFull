import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Matches from "./MatchModel.js";
import Pusher from "pusher";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*"),
		res.setHeader("Access-Control-Allow-Headers", "*"),
		next();
});

const connection = process.env.mongo_uri;
mongoose.connect(connection, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

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
	const collection = db.collection("tabletimes");
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

app.get("/api/game/:name", async (req, res) => {
	const name = parseInt(req.params.name);
	Matches.findOne({ id: name }, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.get("/api/games", async (req, res) => {
	Matches.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.get("/", async (req, res) => {
	res.status(200).send("Table Time Backend");
});

app.post("/api/game/insert", async (req, res) => {
	const dbMatch = req.body;

	Matches.create(dbMatch, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.post("/api/game/delete", async (req, res) => {
	const dbMatch = req.body;

	Matches.deleteOne({ _id: dbMatch._id }, (err, data) => {
		if (err) {
			res.send(err);
		} else {
			res.status(204).send(data);
		}
	});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
