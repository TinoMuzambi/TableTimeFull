import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 3,
	},
	password: {
		type: String,
		required: true,
		min: 8,
		max: 1024,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model("User", userSchema);
