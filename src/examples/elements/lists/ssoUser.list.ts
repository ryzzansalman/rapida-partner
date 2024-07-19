import type { IList } from "../../../interfaces/list.interface";

export const ssoUserList: IList = {
    id: "ssoUserList",
    title: "Lista de usuários",
    dataSource: {
        endpoint: "/users",
        paramType: "query",
        hasAuthentication: true
    },
    guards: ['Permeson'],
    properties: [
        { property: "personName", type: "title" },
        { property: "username", type: "subtitle", isTimestamp: true, }
    ],
    callsToActionMenu: [
        {
            icon: "edit",
            label: "Editar",
            action: {
                link: {
                    endpoint: "/user-form",
                    propertiesAsQueryParam: ["_id"]
                }
            },
        },
        {
            icon: "delete",
            label: "Excluir",
            action: {
                request: {
                    endpoint: "/users",
                    verb: "delete",
                    propertiesAsPathParam: ["_id"],
                    dialog: {
                        title: "Excluir usuário",
                        message: "Confirmar exclusão de usuário?"
                    }
                },
                link: {
                    endpoint: "/user-list",
                },
            },
        },
    ]
}