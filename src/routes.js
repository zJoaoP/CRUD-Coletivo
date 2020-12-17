import express from "express";
import cursosController from "./controllers/cursosController.js";
import campusController from "./controllers/campusController.js";
import disciplinasController from "./controllers/disciplinasController.js";
import professoresController from "./controllers/professoresController.js";
import alunoController from "./controllers/alunoController.js";

const router = express.Router();

router.get("/", cursosController.index);
router.get("/cursos", cursosController.get);
router.post("/cursos", cursosController.post);
router.get("/cursos/delete/:id", cursosController.delete);
router.post("/cursos/update/:id", cursosController.update);

router.get("/", campusController.index);
router.get('/disciplinas', disciplinasController.get);
router.post('/disciplinas', disciplinasController.post);
router.get('/disciplinas/delete/:id', disciplinasController.delete);
router.post('/disciplinas/update/:id', disciplinasController.update);

router.get("/campus", campusController.get);
router.post("/campus", campusController.post);
router.get("/campus/delete/:id", campusController.delete);
router.post("/campus/update/:id", campusController.update);

router.get("/professores", professoresController.get);
router.post("/professores", professoresController.post);
router.get("/professores/delete/:id", professoresController.delete);
router.post("/professores/update/:id", professoresController.update);

router.get('/alunos', alunoController.get);
router.post('/alunos', alunoController.post);
router.post('/aluno/edit/:id', alunoController.update);
router.get('/aluno/delete/:id', alunoController.delete);

export default router;