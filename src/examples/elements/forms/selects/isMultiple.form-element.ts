import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const isMultiple: IFormSelect = {
    type: "select",
    dataType: "number",
    label: "Is multiple",
    name: "isMultiple",
    options: [
        {
            label: "Sim",
            value: 1
        },
        {
            label: "Não",
            value: 0
        },
    ],
};