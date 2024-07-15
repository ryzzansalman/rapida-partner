import type { IForm } from "../../../interfaces/project.interface";

export const productForm: IForm = {
    id: "productForm",
    title: "Gerenciar produto",
    guards: "isAuthorized",
    elements: [
        {
            type: "tab",
            id: "productTabs",
            tabs: [
                {
                    id: "mainTab",
                    title: "Dados principais",
                    elements: [
                        {
                            type: "input",
                            dataType: "text",
                            name: "name",
                            label: "Nome",
                            isRequired: true
                        }
                    ]
                }
            ]
        }
    ]
}