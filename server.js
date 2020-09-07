import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Matches from "./MatchModel.js";

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
			res.statusMessage(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.post("api/game/delete", async (req, res) => {
	const dbMatch = req.body;

	Matches.deleteOne({ _id: dbMatch._id }, (err, result) => {
		if (err) {
			res.send(err);
		} else {
			res.status(204).send("Gone!");
		}
	});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
