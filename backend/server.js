import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import usersRoute from "./routes/usersRoute.js";

import connectDB from "./db/dbConnect.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(express.json()); //to parse incoming json request
app.use(cookieParser()); //to parse incoming cookies

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

app.use("/api/users", usersRoute);

//server listening
server.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
