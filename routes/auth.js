import express from "express";
const router = express.Router();
import User from "../models/UserModel.js";

router.post("/register", async (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password,
	});

	try {
		const savedUser = await user.save();
		res.status(201).send(savedUser);
	} catch (err) {
		res.status(400).send(err, "Something went wrong.");
	}
});

export default router;
