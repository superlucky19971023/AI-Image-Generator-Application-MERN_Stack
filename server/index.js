import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";

const app = express();
dotenv.config;
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

//Default get
app.get("/", async (_req, res) => {
  res.status(200).json({
    message: "Hello AI Image Generated Developers!",
  });
});

//function to start the server
const startServer = async () => {
  try {
    // connectDB();
    app.listen(8080, () => console.log("Server started on port: 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
