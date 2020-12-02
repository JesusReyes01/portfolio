const nodemailer = require('nodemailer')
const {EMAIL, PASSWORD} = process.env;

module.exports = {
    email: async(req, res) => {
        const{name, email, subject, message} = req.body;
        console.log("name", name)
  
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                service: 'gmail',
                secure: false,
                requireTLS: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            });

            let info = await transporter.sendMail({
                from: `${name} <${EMAIL}>`,
                to: 'me@jesusreyes.dev',
                subject: subject,
                text: 'Portfolio Contact',
                html: 
                    `
                    <div>Name: ${name}</div>
                    <div>Email: ${email}</div>
                    <div>Subject: ${subject}</div>
                    <p>Message: ${message}</p>

                    `,
                // attachments: [
                //     {
                //         cid: 'uniquenq@nodemailer.com',
                //         path: 'https://personal-project1.s3.amazonaws.com/66bf8346-783e-4840-9de4-5759b7a0c76f-Scan-&-Go.png'
                //     }
                // ]
            })
            console.log("Message sent: %s", info.messageId);
            res.sendStatus(200)
    } 
}
