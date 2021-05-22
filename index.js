import express from "express";
import mongoose from "mongoose";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { Routes } from "./Routes/Routes";

var cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Appointment Booking API",
      version: "1.0.0",
    },
    servers: ["http://localhost:4000"],
  },
  apis: ["Swagger.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, { explorer: true })
);

mongoose.Promise = global.Promise;

const isProduction = process.env.NODE_ENV === "production";

// mongodb://localhost:27017/<DatabaseName>
const uri = isProduction
  ? process.env.DATABASE_URL
  : "mongodb://localhost:27017/Appointment";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB database connection established successfully");
}).on("error", (error) => {
  console.log("error occured", error);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.send(
    `node+express server running on port ${port}`
  )
);

app.listen(port, () =>
  console.log(
    `your server is running on port http://localhost:${port}`
  )
);

Routes(app);
