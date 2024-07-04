import { sendEmailWithNodemailer, type IEmail } from "../src/utils/email";

const emailConfigs: IEmail = {
    content: {
        content: "Testando",
        type: "text"
    },
    encryption: "tls",
    from: "ofmnoreply@ofm.com.br",
    mailer: "smtp",
    password: "nnjg cjki rnfr clud",
    port: 587,
    subject: "Teste",
    to: "ryzzan.salman@kunlatek.com",
    username: "ofmnoreply@gmail.com",
    service: "gmail",
}

sendEmailWithNodemailer(emailConfigs);