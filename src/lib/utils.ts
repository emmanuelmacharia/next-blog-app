import mongoose from "mongoose";

const connection: any = {}


export const connect = async () => {
    if (connection.isConnected) {
        return;
    }
    const connectionString: string = process.env.MONGO_DB_STRING || '';
    try {
        const db = await mongoose.connect(connectionString);
        connection.isConnected = db.connections[0].readyState;
      } catch (error) {
        handleError(error);
      }  
}


const handleError = (error: any) => {
    console.log(error)
    throw Error("Error connecting to the database");
}