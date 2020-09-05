import mongoose from "mongoose";

const MatchSchema = mongoose.Schema({
	id: { type: String, required: true },
	date: { type: Date, required: true },
	bestOf: { type: String, required: true },
	gameType: { type: Number, required: true },
	player1: { type: String, required: true, default: "Player1" },
	player2: { type: String, required: true, default: "Player2" },
	player1Score: { type: Array, required: true },
	player2Score: { type: Array, required: true },
	winner: { type: String, required: true },
});

export default mongoose.model("tabletime", MatchSchema);
