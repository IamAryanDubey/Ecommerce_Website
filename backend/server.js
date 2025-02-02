import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import ItemRoute from './route/item.route.js'

// Load environment variables
configDotenv();

const port = process.env.PORT || 5000;
const app = express();

// Async function to handle server and database connection
const startServer = async () => {
    try {
        // Connect to the database
        await mongoose.connect(process.env.dbURI);
        console.log("Connected to database successfully.");

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};
app.use(cors());
app.use(express.json());
app.use("/addItem", ItemRoute);

// Start the server
startServer();


