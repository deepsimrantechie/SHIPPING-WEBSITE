import express from "express";
import connectDb from "./config/mongodb.js";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./Routes/userRoute.js";
import authUser from "./middleware/auth.js"; // Import the auth middleware

// App Configuration
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// API ENDPOINTS
app.use("/api/user", userRouter);

// Protected Route Example
app.get("/protected", authUser, (req, res) => {
  res.send(`Welcome! You are authenticated as user ID: ${req.body.userId}`);
});

// Route
app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

// Start the server
const startServer = async () => {
  try {
    await connectDb(); // Ensure the database is connected before starting the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();
