import type { IFormCondition } from "./form-condition.interface";
import type { IFormElement } from "./project.interface";

export interface IFormFieldset {
  type: "fieldset";
  conditions?: IFormCondition[];
  todo?: string;
  id: string;
  title: string;
  elements: IFormElement[];
};
