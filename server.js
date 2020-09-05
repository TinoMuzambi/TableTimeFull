import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// import path from "path";
import Matches from "./MatchModel.js";

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, "/build")));
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*"),
		res.setHeader("Access-Control-Allow-Headers", "*"),
		next();
});

const connection =
	"mongodb+srv://tino:7X1w57IyusX9X3pu@cluster0.uzhp6.mongodb.net/tabletime?retryWrites=true&w=majority";
mongoose.connect(connection, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

// const withDB = async (operations, res) => {
// 	try {
// 		const client = await MongoClient.connect("mongodb://localhost:27017", {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		});
// 		const db = client.db("table-games");

// 		await operations(db);

// 		client.close();
// 	} catch (error) {
// 		res
// 			.status(500)
// 			.json({ message: "Error connecting to the database", error: error });
// 		console.log(error);
// 	}
// };

app.get("/api/game/:name", async (req, res) => {
	// withDB(async (db) => {
	// 	const name = parseInt(req.params.name);

	// 	const gameData = await db.collection("games").findOne({ id: name });
	// 	res.status(200).json(gameData);
	// }, res);

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
	// withDB(async (db) => {
	// 	const gameData = await db
	// 		.collection("games")
	// 		.find({}, gameData)
	// 		.toArray()
	// 		.then((items) => {
	// 			return items;
	// 		});
	// 	res.status(200).send(gameData);
	// }, res);

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
	// withDB(async (db) => {
	// 	await db.collection("games").insertOne(req.body);
	// 	res.status(200).send("Success!");
	// });
	const dbMatch = req.body;

	Matches.create(dbMatch, (err, data) => {
		if (err) {
			res.statusMessage(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname + "/build/index.html"));
// });

app.listen(PORT, () => console.log("Listening..."));
