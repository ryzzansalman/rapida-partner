import type { IFormSelect } from "../../../../../interfaces/form-select.interface";

export const userStatus: IFormSelect = {
    type: "select",
    dataType: "text",
    label: "Status",
    name: "status",
    options: [
        {
            label: "Ativo",
            value: "active",
        },
        {
            label: "Bloqueado",
            value: "blocked"
        },
        {
            label: "Inativo",
            value: "inactive"
        }
    ]
};