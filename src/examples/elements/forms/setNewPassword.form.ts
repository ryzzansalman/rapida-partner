import type { IFormInput } from "../../../interfaces/form-input.interface";
import type { IForm } from "../../../interfaces/project.interface";
import { saveButton } from "./buttons/saveButton.form-element";
import { password } from "./inputs/password.form-element";
import { passwordConfirmation } from "./inputs/passwordConfirmation.form-element";

const newPassword: IFormInput = { ...password, isRequired: true };
const newPasswordConfirmation: IFormInput = { ...passwordConfirmation, isRequired: true };

export const setNewPasswordForm: IForm = {
    id: "setNewPasswordForm",
    title: "Definir nova senha",
    guards: "isAuthenticated",
    elements: [
        newPassword,
        newPasswordConfirmation,
        saveButton   
    ]
};