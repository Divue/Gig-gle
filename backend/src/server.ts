import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Import Routes
import uploadRoutes from "./routes/upload"; // ✅ Cloudinary uploads
import gigsRoute from "./routes/gigsroute";
import applicationRoute from "./routes/applicationroute";
import participantRoute from "./routes/participantRoute";  // New route for participant
import userRoutes from "./routes/user"
import messageRoutes from "./routes/message"; // New route for messages



const app = express();

// ✅ Debug Clerk environment variables
console.log("CLERK_PUBLISHABLE_KEY:", process.env.CLERK_PUBLISHABLE_KEY);
console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY);

// 🔐 Check Clerk env vars
if (!process.env.CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) {
  console.error("❌ Missing Clerk environment variables. Please check your .env file.");
  process.exit(1);
}

// 🔧 Middleware
app.use(cors());
app.use(express.json()); // for JSON bodies

// 🔌 Routes
app.use("/api/upload", uploadRoutes);
app.use("/api", gigsRoute); // Now "/api/gigs" is accessible
app.use("/api/applications", applicationRoute); // Applications route
app.use("/api/participants", participantRoute); // New route for participant creation and retrieval
app.use("/api/users", userRoutes)
app.use("/api/messages", messageRoutes); // New route for messages

// 🌱 MongoDB connection
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("❌ MONGO_URI is not defined in .env");
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
