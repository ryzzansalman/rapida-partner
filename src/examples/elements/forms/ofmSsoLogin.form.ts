import type { IFormInput } from "../../../interfaces/form-input.interface";
import type { IForm } from "../../../interfaces/project.interface";
import { saveButton } from "./buttons/saveButton.form-element";
import { password } from "./inputs/password.form-element";
import { username } from "./inputs/username.form-element";

const newUsername: IFormInput = { ...username, isRequired: true };
const newPassword: IFormInput = { ...password, isRequired: true };

export const ofmLoginSsoForm: IForm = {
    id: "ofmLoginSsoForm",
    title: "Login",
    elements: [
        newUsername,
        newPassword,
        saveButton,
    ],
};