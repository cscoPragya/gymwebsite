import nodemailer from 'nodemailer'
export const sendEmail = async (req, res, next) => {

    const { email, username, message } = req.body

    if (!email || !username) {
        res.status(400).json({ message: "All fields are mendatory" })
    }

    //ab yha par nodeemailler ka kaam hoga

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.APP_EMAIL,
            pass: process.env.APP_PASSWORD
        }
    })

    const mailOptions = {
        from: email,
        to: process.env.TRAINER_EMAIL,
        subject: `Gym Inquiry from ${username}`,
        text: `User Info:\nName: ${req.body.username}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`

    }


    //ab jo code asynchronous hota h uska kuch nhi pta hota ki kya result de isliye hmesha try catch m likho
    try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ message: "Email sent successfully!" })
    } catch (err) {
        res.status(500).json({ error: "Failed to send email." })
    }

}