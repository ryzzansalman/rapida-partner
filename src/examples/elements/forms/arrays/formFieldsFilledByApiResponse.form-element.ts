import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { formFieldName } from "../inputs/names/formFieldName.form-element";
import { arrayParents } from "./arrayParents.form-element";
import { propertiesFromApiToFillFormField } from "./propertiesFromApiToFillFormField.form-element";

export const formFieldsFilledByApiResponse: IFormArray = {
  type: "array",
  id: "formFieldsFilledByApiResponse",
  title: "Campos preenchidos pela API",
  elements: [
    formFieldName,
    propertiesFromApiToFillFormField,
    arrayParents,
  ],
};