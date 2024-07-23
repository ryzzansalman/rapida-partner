import type { IFormButton } from "../../../../interfaces/form-button.interface";

export const sendEmailButton: IFormButton = {
    type: "button",
    id: "sendEmailButton",
    actionType: "apiRequest",
    label: "Enviar e-mail",
    icon: "send",
    apiRequest: {
        endpoint: "/send-email",
        paramType: "path",
    }
};