import express from 'express'
import testeController from './controllers/testeController.js'
import disciplinasController from './controllers/disciplinasController.js'

const router = express.Router()

router.get('/', testeController.get)
router.post('/', testeController.post)
router.get('/show', testeController.show)
router.get('/show', testeController.show)
router.get('/disciplinas', disciplinasController.get)
router.post('/disciplinas', disciplinasController.post)
router.get('/disciplinas/show', disciplinasController.show)

export default router