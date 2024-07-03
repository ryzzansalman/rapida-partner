import type { IForm } from "../interfaces/project.interface";

export const userInvitationForm: IForm = {
    id: "userInvitationForm",
    title: "Gerenciar usuário",
    elements: [
        {
            type: "input",
            name: "name",
            label: "Nome",
            dataType: "text",
            isRequired: true
        },
        {
            type: "input",
            name: "username",
            label: "Nome de usuário",
            dataType: "text",
            isRequired: true
        },
        {
            type: "input",
            name: "invitationEmail",
            label: "E-mail para convite",
            dataType: "email",
            isRequired: true
        },
    ]
}