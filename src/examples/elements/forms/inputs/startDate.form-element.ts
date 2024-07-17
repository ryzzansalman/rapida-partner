import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const startDate: IFormInput = {
    type: "input",
    label: "Data de início",
    name: "startDate",
    dataType: "date",
    isRequired: true,
};