import express from 'express'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.routes.js'
import cors from 'cors'
dotenv.config()
const app = express()


app.use(express.json())
app.use(cors(
    {
        origin: process.env.FRONTEND_ORIGIN
    }
))


//setting up routes
app.use('/api/user', contactRoutes)


app.listen(3000, () => {
    console.log("Server is listening")
})