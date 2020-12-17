import express from "express";
import campusController from "./controllers/campusController.js";

import laboratorioController from "./controllers/laboratorioController.js";

const router = express.Router();

router.get("/", campusController.index);

router.get("/laboratorio", laboratorioController.get);
router.post("/laboratorio", laboratorioController.post);
router.get("/laboratorio/delete/:id", laboratorioController.delete);
router.post("/laboratorio/update/:id", laboratorioController.update);

export default router;
