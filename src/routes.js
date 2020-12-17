import express from "express";
import campusController from "./controllers/campusController.js";
import disciplinasController from "./controllers/disciplinasController.js";

const router = express.Router();

router.get("/", campusController.index);
router.get('/disciplinas', disciplinasController.get);
router.post('/disciplinas', disciplinasController.post);
router.get('/disciplinas/delete/:id', disciplinasController.delete);
router.post('/disciplinas/update/:id', disciplinasController.update);

export default router;