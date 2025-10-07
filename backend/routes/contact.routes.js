// bas ye ek hi file rhegi 
import express from 'express'
import { sendEmail } from '../controllers/contact.controller.js'

const router = express.Router()

//basically aadat pd gyi to ek separate function hi banungi uske liye
router.post('/contact', sendEmail)

export default router