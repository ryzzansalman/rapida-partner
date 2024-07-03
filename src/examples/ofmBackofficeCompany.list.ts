import type { IList } from "../interfaces/list.interface";

export const ofmBackofficeCompanyList: IList = {
    id: "ofmBackofficeCompanyList",
    title: "Lista de usuários",
    dataSource: {
        endpoint: "/companies",
        paramType: "query",
        usesAuthentication: true
    },
    properties: [
        { property: "name", type: "title" },
        { property: "cnpj", type: "subtitle", isTimestamp: true, }
    ],
    callsToActionMenu: [
        {
            icon: "edit",
            label: "Editar",
            action: {
                link: {
                    endpoint: "/company-form",
                    propertiesAsQueryParam: ["_id"]
                }
            },
        },
        {
            icon: "delete",
            label: "Excluir",
            action: {
                request: {
                    endpoint: "/companies",
                    verb: "delete",
                    propertiesAsPathParam: ["_id"],
                    dialog: {
                        title: "Excluir animação",
                        message: "Confirmar exclusão de animação?"
                    }
                },
                link: {
                    endpoint: "/company-list",
                },
            },
        },
    ]
}