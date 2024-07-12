import type { IFormArray } from "../../interfaces/form-array.interface";
import { formElementDatatype } from "./formElementDatatype.form-element";
import { formElementId } from "./formElementId.form-element";
import { formElementLabel } from "./formElementLabel.form-element";
import { formElementName } from "./formElementName.form-element";
import { formElementPlaceholder } from "./formElementPlaceholder.form-element";
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
    formElementLabel,
    formElementName,
    formElementDatatype,
    formElementPlaceholder,
    formElementTooltip,
    formElementIsRequired,
    formElementIsUnique,
    formElementIsAutofocus,
    formElementIsDisabled,
    formElementConditions,
    formElemetMaxLength,
    formElementminLength,
    formElemetValidators,
    formElementApiRequest,
    formElementOptionsApi,
    formElementOptions,
    formElementIsMultiple,
  ],
};