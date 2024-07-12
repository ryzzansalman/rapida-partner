import type { IFormArray } from "../../interfaces/form-array.interface";
import { formElementId } from "./formElementId.form-element";
import { formElementTitle } from "./formElementTitle.form-element";
import { formElementTodo } from "./formElementTodo.form-element";
import { formElementType } from "./formElementType.form-element";

export const formElements: IFormArray = {
  type: "array",
  id: "formElements",
  title: "Elemento",
  elements: [
    formElementType,
    formElementTodo,
    formElementId,
    formElementTitle,
  ],
};