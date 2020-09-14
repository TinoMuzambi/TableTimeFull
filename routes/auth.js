import express from "express";
const router = express.Router();
import User from "../models/UserModel.js";
import { registerValidation, loginValidation } from "../validation.js";

// Register route.
router.post("/register", async (req, res) => {
	const { error } = registerValidation(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

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
