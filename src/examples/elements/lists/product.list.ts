import type { IList } from "../../../interfaces/list.interface";

export const productList: IList = {
    id: "productList",
    title: "Lista de produtos",
    dataSource: {
        endpoint: "/products",
        paramType: "query",        
    },
    properties: [
        {
            type: "title",
            property: "name"
        },
        {
            type: "subtitle",
            property: "ean13"
        },
        {
            type: "description",
            property: "description",
            isHtml: true
        }
    ],
    callsToActionMenu: [
        {
            label: "Apagar",
            icon: "delete",
            action: {
                request: {
                    endpoint: "products",
                    verb: "delete",
                    propertiesAsPathParam: ["_id"],
                    dialog: {
                        title: "Apagar ítem",
                        message: "Tem certeza que quer remover o ítem?"
                    }
                },
                link: {
                    endpoint: "product-list"
                }
            }
        }
    ]
}