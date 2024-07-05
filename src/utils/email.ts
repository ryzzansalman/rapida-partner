import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface IEmail {
    mailer: "smtp";
    host?: string;
    service?: string;
    port: number;
    username: string;
    password: string;
    encryption: "tls";
    from: string;
    to: string;
    subject: string;
    content: {
        type: "text" | "html";
        content: string;
    }
}

const sendEmailWithNodemailer = (email: IEmail) => {
    const transporter = nodemailer.createTransport({
        service: email.service,
        auth: {
            user: email.username,
            pass: email.password,
        },
        port: email.port,
        secure: email.port === 465, // true for 465, false for other ports
    });

    const mailOptions = {
        from: email.from,
        to: email.to,
        subject: email.subject,
        ...(email.content.type === "text" && { text: email.content.content }),
        ...(email.content.type === "html" && { html: email.content.content }),
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.info('Email enviado: ' + (info as nodemailer.SentMessageInfo).response);
    });
};

export {
    sendEmailWithNodemailer
}

export type {
    IEmail
}