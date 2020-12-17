import express from "express";
import campusController from "./controllers/campusController.js";
import professoresController from "./controllers/professoresController.js";

const router = express.Router();

router.get("/", campusController.index);
router.get("/campus", campusController.get);
router.post("/campus", campusController.post);
router.get("/campus/delete/:id", campusController.delete);
router.post("/campus/update/:id", campusController.update);

router.get("/professores", professoresController.get);
router.post("/professores", professoresController.post);
router.get("/professores/delete/:id", professoresController.delete);
router.post("/professores/update/:id", professoresController.update);

export default router;
