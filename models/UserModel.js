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
	userType: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	token: {
		type: String,
		default: "",
	},
});

export default mongoose.model("User", userSchema);
