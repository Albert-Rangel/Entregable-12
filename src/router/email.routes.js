import express, { Router } from "express"
import nodemailer from 'nodemailer'
const router = express.Router()

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'claudie.funk69@ethereal.email',
        pass: '77VaKZY8tzXPWsqQuK'
    }
});

router.get("/", async (req, res) => {
    var message = {
        from: "sender@server.com",
        to: "claudie.funk69@ethereal.email",
        subject: "PRUEBA",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>",
        attachments: [{
            path: './package.json'
        }]
      };
 
    await transporter.sendMail(message);
      
    res.send("hola se envio")

})

export default router
