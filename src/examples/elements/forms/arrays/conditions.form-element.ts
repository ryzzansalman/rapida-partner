import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { codeCode } from "../inputs/codeCode.form-element";
import { codeTriggerField } from "../inputs/codeTriggerField.form-element";
import { conditionType } from "../selects/conditionType.form-element";
import { conditionElements } from "./conditionElements.form-element";

export const conditions: IFormArray = {
    type: "array",
    id: "conditions",
    title: "Condição",
    elements: [
        conditionType,
        conditionElements,
        codeTriggerField,
        codeCode
    ],
    conditions: [
        {
            type: "form",
            elements: [
                {
                    key: "formElementType",
                    comparisonOperator: "!==",
                    value: "array",
                },
                {
                    logicalOperator: "||",
                    key: "formElementType",
                    comparisonOperator: "!==",
                    value: "tab",
                },
            ]
        }
    ]
}