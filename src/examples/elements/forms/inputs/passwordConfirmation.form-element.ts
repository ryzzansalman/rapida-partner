import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const passwordConfirmation: IFormInput = {
    type: "input",
    dataType: "password",
    label: "Confirmar senha",
    name: "passwordConfirmation",
    isRequired: true
}