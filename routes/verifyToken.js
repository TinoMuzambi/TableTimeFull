import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
	// Get and check token.
	const token = req.header("auth-token");
	if (!token) return res.status(401).send("Access denied.");

	// Verify token.
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
	} catch (error) {
		res.status(400).send("Invalid token.");
	}
};
