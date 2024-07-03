import { IApiRequest } from "./form-input.interface";

export interface IList {
    id?: string; // named according to component file name (<id>.<componentType>.ts)
    title: string;
    guards?: string[];
    dataSource: IApiRequest;
    properties: {
        property: string; // property taken from dataSource response. e.g.: "email"
        label?: string; // label to property. e.g.: "E-mail"
        type?: "title" | "subtitle" | "description" | "video" | "image" | "images" | "icon";
        isHtml?: boolean;
        isLink?: boolean;
        isTimestamp?: boolean;
        callToAction?: {
            link: string; // e.g.: "/user"
            usePropertyAsQuery?: boolean; // if true then "/user/<email>"
        };
    }[]; // properties taken from dataSource
    cardAsALink?: {
        link: string; // e.g.: "/user"
        propertiesAsQueryParam?: string[]; // if, for example, ["_id", "email"], then "/user?_id=value&email=value"
        propertiesAsPathParam?: string[]; // if, for example, ["_id", "email"], then "/user/<_id>/<email>"
    };
    callsToActionMenu?: {
        icon: string; // Material icons e.g: "pencil"
        label: string; // e.g: "Editar"
        action: {
            link: { // frontend url to be redirected on action completition
                endpoint: string; // e.g.: "/user"
                propertiesAsQueryParam?: string[]; // if, for example, ["_id", "email"], then "/user?_id=value&email=value"
                propertiesAsPathParam?: string[]; // if, for example, ["_id", "email"], then "/user/<_id>/<email>"
            };
            request?: { // backend request endpoint that must be processed before link redirection
                endpoint: string; // e.g.: "/user"
                propertiesAsQueryParam?: string[]; // if, for example, ["_id", "email"], then "/user?_id=value&email=value"
                propertiesAsPathParam?: string[]; // if, for example, ["_id", "email"], then "/user/<_id>/<email>"
                verb: "get" | "post" | "put" | "delete";
                dialog?: {
                    title: string;
                    message: string;
                };
            };
        };
    }[];
}