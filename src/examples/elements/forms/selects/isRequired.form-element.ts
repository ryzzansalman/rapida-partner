import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const isRequired: IFormSelect = {
    type: "select",
    dataType: "number",
    label: "Is required",
    name: "isRequired",
    options: [
        {
            label: "Sim",
            value: true
        },
        {
            label: "Não",
            value: false
        },
    ],
};