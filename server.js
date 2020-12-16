import express from 'express'
import router from './src/routes.js'
import 'dotenv/config.js'
import connectDB from './dbconnect.js'

const port = 3001

const app = express();

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.use('/teste', router);

connectDB().once('open', () => {
    console.log("MongoDB database started")
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))    
})