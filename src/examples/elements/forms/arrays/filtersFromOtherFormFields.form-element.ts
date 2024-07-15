import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { filterPropertyName } from "../inputs/names/filterPropertyName.form-element";
import { formFieldName } from "../inputs/names/formFieldName.form-element";
import { arrayParents } from "./arrayParents.form-element";

const newFormFieldName = {...formFieldName, isRequired: true};
const newFilterPropertyName = {...filterPropertyName, isRequired: true};

export const filtersFromOtherFormFields: IFormArray = {
  type: "array",
  id: "filtersFromOtherFormFields",
  title: "Filtros de outros campos do formulário",
  elements: [
    newFormFieldName,
    newFilterPropertyName,
    arrayParents
  ],
};