import type { IList } from "../interfaces/list.interface";

export const animationList: IList = {
    id: "animationList",
    title: "Lista de animações",
    guards: ['Permeson'],
    dataSource: {
        endpoint: "/animations",
        paramType: "query",
        usesAuthentication: true
    },
    properties: [
        { property: "folderPicture", type: "image" },
        { property: "name", type: "title" },
        { property: "startDate", type: "subtitle", isTimestamp: true, },
        { property: "finishDate", type: "subtitle", isTimestamp: true, },
    ],
    callsToActionMenu: [
        {
            icon: "edit",
            label: "Editar",
            action: {
                link: {
                    endpoint: "/animation-form",
                    propertiesAsQueryParam: ["_id"]
                }
            },
        },
        {
            icon: "delete",
            label: "Excluir",
            action: {
                request: {
                    endpoint: "/animations",
                    verb: "delete",
                    propertiesAsPathParam: ["_id"],
                    dialog: {
                        title: "Excluir animação",
                        message: "Confirmar exclusão de animação?"
                    }
                },
                link: {
                    endpoint: "/animation-list",
                },
            },
        },
    ],
    cardAsALink: {
        link: "/animation",
        propertiesAsQueryParam: ["_id"],
    },
}