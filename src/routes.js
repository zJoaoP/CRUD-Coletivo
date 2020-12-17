import express from "express";
import campusController from "./controllers/campusController.js";

const router = express.Router();

router.get("/", campusController.index);

export default router;
