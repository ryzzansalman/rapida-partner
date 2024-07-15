import type { IFormCondition } from "./form-condition.interface";
import type { IApiRequest } from "./form-input.interface";

export interface IFormButton {
    type: "button";
    id: string;
    label: string;
    actionType: "submit" | "reset" | "link" | "apiRequest";
    todo?: string;
    icon?: string;
    tooltip?: string;
    isDisabled?: boolean;
    conditions?: IFormCondition[];
    apiRequest?: IApiRequest;
}