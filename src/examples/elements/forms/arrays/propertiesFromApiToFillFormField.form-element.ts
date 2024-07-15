import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { propertyName } from "../inputs/names/propertyName.form-element";

export const propertiesFromApiToFillFormField: IFormArray = {
  type: "array",
  id: "propertiesFromApiToFillFormField",
  title: "Propriedades da API para preencher o campo",
  elements: [
    propertyName,
  ],
};