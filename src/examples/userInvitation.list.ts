import type { IList } from "../interfaces/list.interface";

export const userInvitationList: IList = {
    id: "userInvitationList",
    title: "Lista de usuários",
    dataSource: {
        endpoint: "/users",
        paramType: "query",
        usesAuthentication: true
    },
    properties: [
        { property: "name", type: "title" },
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
                        title: "Excluir animação",
                        message: "Confirmar exclusão de animação?"
                    }
                },
                link: {
                    endpoint: "/user-list",
                },
            },
        },
    ]
}