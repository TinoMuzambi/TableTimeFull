import express from "express";
const router = express.Router();
import User from "../models/UserModel";

router.post("/register", (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password,
	});
});

export default router;
