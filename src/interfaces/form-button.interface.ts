import type { IFormCondition } from "./form-condition.interface";
import type { IApiRequest } from "./form-input.interface";

export interface IFormButton {
    type: "button";
    actionType: "submit" | "link" | "reset" | "sendEmail" | "apiRequest";
    id: string;
    label: string;
    apiRequest?: IApiRequest;
    icon?: string;
    conditions?: IFormCondition[];
}