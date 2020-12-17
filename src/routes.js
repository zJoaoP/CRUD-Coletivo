import express from "express";
import cursosController from "./controllers/cursosController.js";

const router = express.Router();

router.get("/", cursosController.index);
router.get("/cursos", cursosController.get);
router.post("/cursos", cursosController.post);
router.get("/cursos/delete/:id", cursosController.delete);
router.post("/cursos/update/:id", cursosController.update);


export default router;
