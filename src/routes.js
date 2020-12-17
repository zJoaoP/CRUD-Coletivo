import express from "express";
import cursosController from "./controllers/cursosController.js";

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

router.get("/", cursosController.index);
router.get("/cursos", cursosController.get);
router.post("/cursos", cursosController.post);
router.get("/cursos/delete/:id", cursosController.delete);
router.post("/cursos/update/:id", cursosController.update);
export default router;
