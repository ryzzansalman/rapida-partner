import type { IList } from "../interfaces/list.interface";

export const ofmBackofficeCompanyList: IList = {
    id: "ofmBackofficeCompanyList",
    title: "Lista de empresas",
    dataSource: {
        endpoint: "/companies",
        paramType: "query",
        usesAuthentication: true
    },
    guards: ['Permeson'],
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
                        title: "Excluir empresa",
                        message: "Confirmar exclusão de empresa?"
                    }
                },
                link: {
                    endpoint: "/company-list",
                },
            },
        },
    ]
}