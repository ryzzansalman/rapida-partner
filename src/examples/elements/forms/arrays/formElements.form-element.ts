import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { conditions } from "../arrays/conditions.form-element";
import { dataType } from "../selects/dataType.form-element";
import { formElementId } from "../inputs/ids/formElementId.form-element";
import { isAutofocus } from "../selects/isAutofocus.form-element";
import { isDisabled } from "../selects/isDisabled.form-element";
import { isRequired } from "../selects/isRequired.form-element";
import { isUnique } from "../selects/isUnique.form-element";
import { label } from "../inputs/label.form-element";
import { minLength } from "../inputs/minLength.form-element";
import { formElementName } from "../inputs/names/formElementName.form-element";
import { placeholder } from "../inputs/placeholder.form-element";
import { formElementTitle } from "../inputs/titles/formElementTitle.form-element";
import { todo } from "../inputs/todo.form-element";
import { tooltip } from "../inputs/tooltip.form-element";
import { formElementType } from "../inputs/formElementType.form-element";
import { maxLenght } from "../inputs/maxLength.form-element";
import { validators } from "../inputs/validators.form";
import { apiRequest } from "../fieldsets/apiRequest.form-element";
import { optionsApi } from "../fieldsets/optionsApi.form-element";
import { selectOption } from "../fieldsets/selectOption.form-element";
import { isMultiple } from "../selects/isMultiple.form-element";
import type { IFormSelect } from "../../../../interfaces/form-select.interface";
import type { IFormInput } from "../../../../interfaces/form-input.interface";
import type { IFormCondition } from "../../../../interfaces/form-condition.interface";

const conditionFormElementTypeEqualArray: IFormCondition[] = [
  {
    type: "form",
    elements: [
      {
        key: "formElementType",
        comparisonOperator: "===",
        value: "array",
      },
    ],
  },
];

const conditionFormElementTypeEqualButton: IFormCondition[] = [
  {
    type: "form",
    elements: [
      {
        key: "formElementType",
        comparisonOperator: "===",
        value: "button",
      },
    ],
  },
];

const conditionFormElementTypeEqualSelect: IFormCondition[] = [
  {
    type: "form",
    elements: [
      {
        key: "formElementType",
        comparisonOperator: "===",
        value: "select",
      },
    ],
  },
];

const conditionFormElementTypeEqualInput: IFormCondition[] = [
  {
    type: "form",
    elements: [
      {
        key: "formElementType",
        comparisonOperator: "===",
        value: "input",
      },
    ],
  },
];

const conditionFormElementTypeEqualSelectOrAutocomplete: IFormCondition[] = [
  {
    type: "form",
    elements: [
      {
        key: "formElementType",
        comparisonOperator: "===",
        value: "select",
      },
      {
        key: "formElementType",
        comparisonOperator: "===",
        value: "autocomplete",
      },
    ],
  },
];

const conditionFormElementTypeEqualArrayOrTab: IFormCondition[] = [
  {
    type: "form",
    elements: [
      {
        key: "formElementType",
        comparisonOperator: "===",
        value: "array",
      },
      {
        logicalOperator: "||",
        key: "formElementType",
        comparisonOperator: "===",
        value: "tab",
      },
    ],
  },
];

const conditionFormElementTypeEqualArrayOrTabOrButton: IFormCondition[] = [
  {
    type: "form",
    elements: [
      {
        key: "formElementType",
        comparisonOperator: "===",
        value: "array",
      },
      {
        logicalOperator: "||",
        key: "formElementType",
        comparisonOperator: "===",
        value: "tab",
      },
      {
        logicalOperator: "||",
        key: "formElementType",
        comparisonOperator: "===",
        value: "button",
      },
    ],
  },
];

const conditionFormElementTypeNotEqualTab: IFormCondition[] = [
  {
    type: "form",
    elements: [
      {
        logicalOperator: "&&",
        key: "formElementType",
        comparisonOperator: "!==",
        value: "tab",
      },
    ],
  },
];

const conditionFormElementTypeNotEqualArrayOrTab: IFormCondition[] = [
  {
    type: "form",
    elements: [
      {
        key: "formElementType",
        comparisonOperator: "!==",
        value: "array",
      },
      {
        logicalOperator: "&&",
        key: "formElementType",
        comparisonOperator: "!==",
        value: "tab",
      },
    ],
  },
];

const conditionFormElementTypeNotEqualArrayOrTabOrButton: IFormCondition[] = [
  {
    type: "form",
    elements: [
      {
        key: "formElementType",
        comparisonOperator: "!==",
        value: "array",
      },
      {
        logicalOperator: "&&",
        key: "formElementType",
        comparisonOperator: "!==",
        value: "tab",
      },
      {
        logicalOperator: "&&",
        key: "formElementButton",
        comparisonOperator: "!==",
        value: "button",
      },
    ],
  },
];

const newFormElementId: IFormInput = { ...formElementId, isRequired: true, conditions: conditionFormElementTypeEqualArrayOrTabOrButton };
const newFormElementTitle: IFormInput = { ...formElementTitle, isRequired: true, conditions: conditionFormElementTypeEqualArray };
const newLabel: IFormInput = { ...label, isRequired: true, conditions: conditionFormElementTypeNotEqualArrayOrTab };
const newFormElementName: IFormInput = { ...formElementName, isRequired: true, conditions: conditionFormElementTypeNotEqualArrayOrTabOrButton };
const newDataType: IFormSelect = { ...dataType, isRequired: true, conditions: conditionFormElementTypeNotEqualArrayOrTabOrButton };
const newPlaceholder: IFormInput = { ...placeholder, conditions: conditionFormElementTypeEqualInput };
const newTooltip: IFormInput = { ...label, conditions: conditionFormElementTypeNotEqualArrayOrTab };
const newIsRequired: IFormSelect = { ...isRequired, conditions: conditionFormElementTypeNotEqualArrayOrTabOrButton };
const newIsAutofocus: IFormSelect = { ...isAutofocus, conditions: conditionFormElementTypeNotEqualArrayOrTabOrButton };
const newIsDisabled: IFormSelect = { ...isDisabled, conditions: conditionFormElementTypeNotEqualArrayOrTab };
const newIsUnique: IFormSelect = { ...isUnique, conditions: conditionFormElementTypeNotEqualArrayOrTabOrButton };
const newIsMultiple: IFormSelect = { ...isMultiple, conditions: conditionFormElementTypeEqualSelectOrAutocomplete };
const newConditions: IFormArray = { ...conditions, conditions: conditionFormElementTypeNotEqualTab };

export const formElements: IFormArray = {
  type: "array",
  id: "formElements",
  title: "Elemento",
  elements: [
    formElementType,
    newFormElementId,
    newFormElementTitle,
    todo,
    newLabel,
    newFormElementName,
    newDataType,
    newPlaceholder,
    newTooltip,
    newIsRequired,
    newIsAutofocus,
    newIsDisabled,
    newIsUnique,
    newIsMultiple,
    newConditions,
    maxLenght,
    minLength,
    validators,
    apiRequest,
    optionsApi,
    selectOption,
  ],
};