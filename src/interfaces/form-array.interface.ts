import type { IFormCondition } from "./form-condition.interface";
import type { IFormElement } from "./project.interface";

export interface IFormArray {
  type: "array";
  conditions?: IFormCondition[];
  todo?: string;
  id: string;
  title: string;
  elements: IFormElement[];
}
