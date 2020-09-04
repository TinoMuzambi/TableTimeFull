import mongoose from "mongoose";

const MatchSchema = mongoose.Schema({
	id: String,
	date: Date,
	bestOf: String,
	gameType: Number,
	player1: String,
	player2: String,
	player1Score: Array,
	player2Score: Array,
	winner: String,
});

export default mongoose.model("tabletime", MatchSchema);
