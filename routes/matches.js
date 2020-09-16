import express from "express";
import Matches from "../models/MatchModel.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/match/:name", async (req, res) => {
	const name = parseInt(req.params.name);
	Matches.findOne({ id: name }, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

router.get("/matches", async (req, res) => {
	// Get and check token.
	const token = req.header("auth-token");
	if (!token)
		return Matches.find({ userID: "" }, (err, data) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.status(200).send(data);
			}
		});

	// Verify token.
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
	} catch (error) {
		return res.status(400).send("Invalid token.");
	}
	console.log("token found.");

	Matches.find({ $or: [{ userID: token }, { userID: "" }] }, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

router.post("/match/insert", async (req, res) => {
	const dbMatch = req.body;

	Matches.create(dbMatch, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

router.post("/match/delete", async (req, res) => {
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
