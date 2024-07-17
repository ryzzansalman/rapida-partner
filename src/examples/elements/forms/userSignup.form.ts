import type { IFormInput } from "../../../interfaces/form-input.interface";
import type { IForm } from "../../../interfaces/project.interface";
import { sendEmailButton } from "./buttons/sendEmailButton.form-element";
import { invitationEmail } from "./inputs/email/invitationEmail.form-element";
import { personName } from "./inputs/names/personName.form-element";
import { password } from "./inputs/password.form-element";
import { passwordConfirmation } from "./inputs/passwordConfirmation.form-element";
import { username } from "./inputs/username.form-element";

const newPersonName: IFormInput = { ...personName, isRequired: true };
const newUsername: IFormInput = { ...username, isRequired: true, isUnique: true };
const newInvitatioEmail: IFormInput = { ...invitationEmail, isRequired: true };
const newPassword: IFormInput = { ...password, isRequired: true };
const newPasswordConfirmation: IFormInput = { ...passwordConfirmation, isRequired: true };

export const userSignupForm: IForm = {
    id: "userSignupForm",
    title: "Formulário de registro",
    elements: [
        newPersonName,
        newUsername,
        newInvitatioEmail,
        newPassword,
        newPasswordConfirmation,
        sendEmailButton,
    ],
    businessRules: [
        {
            rule: {
                description: "Ao preencher o cadastro, os dados não serão enviados ao banco de dados.",
                subrules: [
                    {
                        description: "Um email será enviado para o email preenchido na área de cadastro."
                    },
                    {
                        description: "No email envaiado haverá um link com jwt onde o usuário deverá clicar se quiser executar de fato o cadastro."
                    },
                    {
                        description: "O link levará a um endpoint que validará o token e dentro deste token estará contido os dados que o usuário preencheu no formulário de cadastro, que servirão para executar o cadastro."
                    }
                ]
            }
        },
        {
            rule: {
                description: "O usuário recém-cadastrado precisa esperar passar a ter status `ativo` para poder acessar.",
                subrules: [
                    {
                        description: "Ao se cadastrar ele  inicia com status inativo."
                    },
                    {
                        description: "O status dele será alterado para ativo ou bloqueado pelo administrador de sua empresa."
                    }
                ]
            }
        }
    ]
};