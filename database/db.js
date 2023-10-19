import mongoose from "mongoose";

const dbConnection = async () => {

	const DB_URI = "mongodb+srv://user123:user123@cluster0.u3yzdg9.mongodb.net/";

	try {
		await mongoose.connect(DB_URI, {useUnifiedTopology: true});
		console.log("Database connected successfully");
	} catch (error) {
		console.log("Error while connecting database ", error.message);
	}
}

export default dbConnection;