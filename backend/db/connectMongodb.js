import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(`mongodb connected:${conn.connection.port}`);
    }
    catch (error) {
        console.log(`Error connection to mongoDB: ${error.message}`);
    }
}

export default connectMongoDB;