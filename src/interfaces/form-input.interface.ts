import type { IApiResponseField, IApiResponseFieldFilter } from "./form-autocomplete.interface";
import type { IFormCondition } from "./form-condition.interface";

export interface IFormInput {
  type: "input";
  name: string;
  dataType: "text" | "number" | "password" | "email" | "color" | "date" | "file" | "wysiwyg";
  label: string;
  placeholder?: string;
  tooltip?: string;
  isAutofocus?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isUnique?: boolean;
  conditions?: IFormCondition[];
  validators?: ("cpf" | "cnpj")[];
  todo?: string;
  maxlength?: number;
  minLength?: number;
  apiRequest?: IApiRequest;
}

export interface IApiRequest {
  endpoint: string;
  paramType: "query" | "path";
  isNotKunlatekResponse?: boolean;
  filtersFromOtherFormFields?: IApiResponseFieldFilter[];
  formFieldsFilledByApiResponse?: IApiResponseField[];
  hasAuthentication?: boolean;
}
