const { connect } = require("../../db");

async function getUserByEmail(email) {
	const db = await connect();
	const collection = db.collection("users");

	try {
		const user = await collection.findOne({ email });
		return user;
	} catch (error) {
		console.error("Error retrieving user by email", error);
		throw error;
	}
}

module.exports = { getUserByEmail };
