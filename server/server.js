import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import emergencyContactRoutes from "./routes/emergencyContactRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";


dotenv.config();


// Database Connection
connectDB();


const app = express();


// Middlewares
app.use(cors());

app.use(express.json());


// API Routes

app.use(
  "/api/users",
  userRoutes
);


app.use(
  "/api/emergency-contacts",
  emergencyContactRoutes
);


app.use(
  "/api/alerts",
  alertRoutes
);


app.use(
  "/api/volunteers",
  volunteerRoutes
);


app.use(
  "/api/admin",
  adminRoutes
);


// Test Route

app.get("/", (req,res)=>{

  res.json({
    message:"🚀 SheShield Backend is Running..."
  });

});


// Start Server

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );

});