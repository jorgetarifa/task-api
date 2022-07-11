import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from "dotenv"
dotenv.config()
import { appRouter } from './routes/route'



const app: Application = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(appRouter)

app.listen( PORT, () => console.log(`Running on http://localhost:${PORT}`))
 