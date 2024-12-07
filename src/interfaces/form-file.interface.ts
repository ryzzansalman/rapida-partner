import type { IFormCondition } from "./form-condition.interface";

export interface IFormFile {
  type: "file";
  name: string;
  label: string;
  tooltip?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  conditions?: IFormCondition[];
  todo?: string;
  isMultiple?: boolean;
}

interface ISelectOption {
  label: string;
  value: string | number | boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
}
