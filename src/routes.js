import express from "express";
import campusController from "./controllers/campusController.js";

const router = express.Router();

router.get("/", campusController.index);
router.get("/campus", campusController.get);
router.post("/campus", campusController.post);

export default router;
