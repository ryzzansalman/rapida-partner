import type { IFormCondition } from "./form-condition.interface";

export interface IFormFile {
  type: "file";
  name: string;
  label: string;
  placeholder?: string;
  tooltip?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  conditions?: IFormCondition[];
  todo?: string;
  validators?: ("onlyImages" | "png" | "jpg" | "pdf")[];
  isMultiple?: boolean;
}
