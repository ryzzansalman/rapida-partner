import type { IFormCondition } from "./form-condition.interface";

export interface IFormSelect {
  type: "select";
  name: string;
  dataType: "text" | "number" | "password" | "email" | "color" | "date" | "file";
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
  isMultiple?: boolean;
  options: ISelectOption[];
}

interface ISelectOption {
  label: string;
  value: string;
  isDisabled?: boolean;
  isSelected?: boolean;
}
