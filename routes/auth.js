import express from "express";
const router = express.Router();
import User from "../models/UserModel.js";
import { registerValidation, loginValidation } from "../validation.js";
import bcrypt from "bcryptjs";

// Register route.
router.post("/register", async (req, res) => {
	// Validate the data first.
	const { error } = registerValidation(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	// Check if user exists.
	const userExists = await User.findOne({ username: req.body.username });
	if (userExists) return res.status(400).send("Username already taken.");

	// Hash passowrds
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	// Create the new user.
	const user = new User({
		username: req.body.username,
		password: hashedPassword,
	});

	// Save the user.
	try {
		const savedUser = await user.save();
		res.status(201).send(savedUser);
	} catch (err) {
		res.status(400).send(err, "Something went wrong.");
	}
});

export default router;
