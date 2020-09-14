import express from "express";
const router = express.Router();
import User from "../models/UserModel.js";
import { registerValidation, loginValidation } from "../validation.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
		userType: req.body.userType,
	});

	// Save the user.
	try {
		const savedUser = await user.save();
		res.status(201).send({ user: user._id });
	} catch (err) {
		res.status(400).send(err, "Something went wrong.");
	}
});

// Login route.
router.post("/login", async (req, res) => {
	// Validate the data first.
	const { error } = loginValidation(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	// Check if user exists.
	const user = await User.findOne({ username: req.body.username });
	if (!user) return res.status(400).send("Username or password is wrong.");

	// Check password correct.
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) {
		return res.status(400).send("Username/password is wrong.");
	}

	// Create and assign a token.
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header("auth-token", token).send(token);

	// res.status(200).send("Logged in.");
});
export default router;
