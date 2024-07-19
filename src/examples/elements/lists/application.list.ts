import type { IList } from "../../../interfaces/list.interface";

export const applicationList: IList = {
    id: "applicationList",
    title: "Lista de aplicações",
    dataSource: {
        endpoint: "/applications",
        paramType: "query",        
    },
    properties: [
        {
            type: "title",
            property: "applicationName"
        },
        {
            type: "description",
            property: "applicationDescription"
        },
    ],
    callsToActionMenu: [
        {
            label: "Apagar",
            icon: "delete",
            action: {
                request: {
                    endpoint: "applications",
                    verb: "delete",
                    propertiesAsPathParam: ["_id"],
                    dialog: {
                        title: "Apagar ítem",
                        message: "Tem certeza que quer remover o ítem?"
                    }
                },
                link: {
                    endpoint: "application-list"
                }
            }
        }
    ]
}