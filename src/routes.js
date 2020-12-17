import express from 'express'
import testeController from './controllers/testeController.js'

const router = express.Router()

router.get('/', testeController.get)
router.post('/', testeController.post)
router.get('/show', testeController.show)

export default router