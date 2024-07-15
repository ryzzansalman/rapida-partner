import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const isSelected: IFormSelect = {
    type: "select",
    dataType: "number",
    label: "Is selected",
    name: "isSelected",
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