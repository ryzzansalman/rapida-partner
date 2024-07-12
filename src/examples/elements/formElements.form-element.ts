import type { IFormArray } from "../../interfaces/form-array.interface";
import { formElementConditions } from "./formElementConditions.form-element";
import { formElementDataType } from "./formElementDataType.form-element";
import { formElementId } from "./formElementId.form-element";
import { formElementIsAutofocus } from "./formElementIsAutofocus.form-element";
import { formElementIsDisabled } from "./formElementIsDisabled.form-element";
import { formElementIsRequired } from "./formElementIsRequired.form-element";
import { formElementIsUnique } from "./formElementIsUnique.form-element";
import { formElementLabel } from "./formElementLabel.form-element";
import { formElementName } from "./formElementName.form-element";
import { formElementPlaceholder } from "./formElementPlaceholder.form-element";
import { formElementTitle } from "./formElementTitle.form-element";
import { formElementTodo } from "./formElementTodo.form-element";
import { formElementTooltip } from "./formElementTooltip.form-element";
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
    formElementDataType,
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