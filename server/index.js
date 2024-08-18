import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import GenerateAIImage from "./routes/GenerateAIImages.js";
import PostRouter from "./routes/Posts.js";


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// error handler
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

//function for connecting database
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGODB_URL).then(()=>{console.log("Database is connected successfully.")}).catch((err)=>{console.error("Failed to connect the database.");
    console.error(err);
  });
};

app.use("/api/post", PostRouter);
app.use("/api/generate-image", GenerateAIImage);

//Default get
app.get("/", async (_req, res) => {
  res.status(200).json({
    message: "Hello AI Image Generated Developers!",
  });
});

//function to start the server
const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => console.log("Server started on port: 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
