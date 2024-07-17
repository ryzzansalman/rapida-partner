import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const modules: IFormSelect = {
    type: "select",
    dataType: "text",
    name: "methods",
    label: "Permissões",
    isMultiple: true,
    options: [
        {
            label: "Ler",
            value: "get",
            isSelected: true,
            isDisabled: true
        },
        {
            label: "Escrever",
            value: "post"
        },
        {
            label: "Editar",
            value: "put"
        },
        {
            label: "Remover",
            value: "delete"
        }
    ]
};