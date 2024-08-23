import express from "express";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./Router/userRouter.js";
import appointmentRouter from "./Router/appointmentRouter.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./Router/messageRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app=express();
config({path:"./config/config.env"})

const corsOptions ={
  origin:'http://localhost:5173', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


// app.use(
//     cors({
//       origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO],
//       method: ["GET", "POST", "DELETE", "PUT"],
//       credentials: true,
//     })
// );

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
);


app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnection();

app.use(errorMiddleware);

export default app;