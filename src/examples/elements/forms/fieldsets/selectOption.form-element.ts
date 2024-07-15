import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { label } from "../inputs/label.form-element";
import { value } from "../inputs/value.form-element";
import { isDisabled } from "../selects/isDisabled.form-element";
import { isSelected } from "../selects/isSelected.form-element";

export const selectOption: IFormFieldset = {
  type: "fieldset",
  id: "selectOption",
  title: "Opções para select",
  elements: [
    label,
    value,
    isDisabled,
    isSelected,
  ]
};