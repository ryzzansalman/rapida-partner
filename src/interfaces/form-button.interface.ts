import type { IFormCondition } from "./form-condition.interface";
import type { IApiRequest } from "./form-input.interface";

export interface IFormButton {
    type: "button";
    id: string;
    actionType: "submit" | "reset" | "link" | "apiRequest";
    label: string;
    todo?: string;
    icon?: string;
    isDisabled?: boolean;
    conditions?: IFormCondition[];
    apiRequest?: IApiRequest;
}