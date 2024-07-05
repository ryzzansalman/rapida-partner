import type { IList } from "../interfaces/list.interface";

export const groupPermissionList: IList = {
    id: "groupPermissionList",
    title: "Lista de grupos de permissões",
    dataSource: {
        endpoint: "/permissions-groups",
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
                    endpoint: "/permission-group-form",
                    propertiesAsQueryParam: ["_id"]
                }
            },
        },
        {
            icon: "delete",
            label: "Excluir",
            action: {
                request: {
                    endpoint: "/permissions-groups",
                    verb: "delete",
                    propertiesAsPathParam: ["_id"],
                    dialog: {
                        title: "Excluir grupo de permissão",
                        message: "Confirmar exclusão de grupo de permissão?"
                    }
                },
                link: {
                    endpoint: "/permission-group-list",
                },
            },
        },
    ]
}