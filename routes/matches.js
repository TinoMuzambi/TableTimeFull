import express from "express";
import Matches from "../models/MatchModel.js";

const router = express.Router();

router.get("/game/:name", async (req, res) => {
	const name = parseInt(req.params.name);
	Matches.findOne({ id: name }, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

router.get("/games/", async (req, res) => {
	Matches.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

router.post("/game/insert", async (req, res) => {
	const dbMatch = req.body;

	Matches.create(dbMatch, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

router.post("/game/delete", async (req, res) => {
	const dbMatch = req.body;

	Matches.deleteOne({ _id: dbMatch._id }, (err, data) => {
		if (err) {
			res.send(err);
		} else {
			res.status(204).send(data);
		}
	});
});

export default router;
