import expressLayouts from "express-ejs-layouts";
import express from "express";
import router from "./src/routes.js";
import "dotenv/config.js";
import connectDB from "./dbconnect.js";

const port = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));

//set template engine
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");

app.use("/", router);

connectDB().once("open", () => {
  console.log("MongoDB database started");
  app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
});
