import mongoose from "mongoose";

let connection: {isConnected: number} = { isConnected: 0 };

export const connectDB = async () => {
    if (connection.isConnected) {
        return;
    }
    const connectionString: string = process.env.MONGO_DB_STRING || '';
    try {
        const db = await mongoose.connect(connectionString);
        connection.isConnected = db.connections[0].readyState;
        console.log("connection is successful \n", connection)
      } catch (error) {
        console.log(error);
        handleError(error);
      }  
}


const handleError = (error: any) => {
    console.log(error)
    throw Error("Error connecting to the database");
}