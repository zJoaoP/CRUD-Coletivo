import express from "express";
import campusController from "./controllers/campusController.js";

const router = express.Router();

router.get("/", campusController.index);
router.get("/campus", campusController.get);
router.post("/campus", campusController.post);
router.get("/campus/delete/:id", campusController.delete);
router.post("/campus/update/:id", campusController.update);

export default router;
