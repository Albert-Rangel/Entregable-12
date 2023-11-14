import nodemailer from 'nodemailer'

export default class emailService {

    async sendEmail() {
       
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'claudie.funk69@ethereal.email',
                    pass: '77VaKZY8tzXPWsqQuK'
                }
            });
            
            var message = {
                from: "sender@server.com",
                to: "claudie.funk69@ethereal.email",
                subject: "Ticket",
                text: "Gracias por su compra. Ticket generado",
                html: "<p>HTML version of the message</p>",
                attachments: [{
                    path: './package.json'
                }]
              };
            
            await transporter.sendMail(message);
              
            return "SUC|hola se envio"

        } catch (error) {
            return `ERR|Error generico. Descripcion :${error}`
        }
    }
}