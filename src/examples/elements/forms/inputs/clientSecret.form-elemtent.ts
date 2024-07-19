import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const clientSecret: IFormInput = {
    type: "input",
    name: "clientSecret",
    dataType: "text",
    label: "Client secret"
};