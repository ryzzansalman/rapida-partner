import type { IForm } from "../../../interfaces/project.interface";
import { sendEmailButton } from "./buttons/sendEmailButton.form-element";
import { invitationEmail } from "./inputs/email/invitationEmail.form-element";
import { personName } from "./inputs/names/personName.form-element";
import { userStatus } from "./inputs/status/userStatus.form-element";
import { username } from "./inputs/username.form-element";

const newPersonName = { ...personName, isRequired: true };
const newUsername = { ...username, isRequired: true };
const newInvitationEmail = { ...invitationEmail, isRequired: true };
const newUserStatus = { ...userStatus, isRequired: true };

export const userInvitationForm: IForm = {
    id: "userInvitationForm",
    title: "Gerenciar usuário",
    guards: "isAuthenticated",
    businessRules: [
        {
            rule: {
                description: "Após o usuário ser cadastrado, deve ser disparado um e-mail para `invitationEmail` com um link https://sso.ofm.com.br/email-confirmation/{token}, onde {token} será um jwt carregando dados da identidade do usuário convidado (userName, name, invitationEmail) e a partir de qual aplicativo ele foi convidado (redirect_to:<url do aplicativo>)."
            }
        },
        {
            rule: {
                description: "Ao entrar no link https://sso.ofm.com.br/email-confirmation/{token}, haverá uma checagem do token acerca do TTL e se o usuário já está ativo.",
                subrules: [
                    {
                        description: "Se o token estiver com TTL vencido ou for um token inválido, o usuário será enviado para https://sso.ofm.com.br/authentication-issue onde terá um aviso que o token está vencido OU que o token é inválido."
                    },
                    {
                        description: "Se o token for válido E o usuário já estiver ativo, o usuário será enviado para https://sso.ofm.com.br/login?redirect_to={redirect_to_taken_from_token}."
                    },
                    {
                        description: "Se o token for válido E o usuário estiver inativo, será checado se a empresa usa um SSO próprio ou apenas o SSO OFM como fluxo de autenticação."
                    }
                ]
            }
        },
        {
            rule: {
                description: "Se utilizar exclusivamente o SSO OFM como fluxo de autenticação, será enviado para https://sso.ofm.com.br/create-password/{token} onde preencherá um formulário cadastrando sua senha de acesso pelo SSO OFM."
            }
        },
        {
            rule: {
                description: "Se utilizar um SSO próprio será enviado para https://sso.ofm.com.br/login?redirect_to={redirect_to_taken_from_token}."
            }
        }
    ],
    elements: [
        newPersonName,
        newUsername,
        newInvitationEmail,
        newUserStatus,
        sendEmailButton
    ]
}