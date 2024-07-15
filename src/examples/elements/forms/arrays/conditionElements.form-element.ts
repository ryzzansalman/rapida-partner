import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { conditionElementArray } from "../inputs/conditionElementArray.form-element";
import { conditionElementKey } from "../inputs/conditionElementKey.form-element";
import { conditionElementValue } from "../inputs/conditionElementValue.form-element";
import { conditionElementComparisonOperator } from "../selects/conditionElementComparisonOperator.form-element";
import { conditionElementLogicalOperator } from "../selects/conditionElementLogicalOperator.form-element";

export const conditionElements: IFormArray = {
  type: "array",
  id: "conditionElements",
  title: "Elemento",
  elements: [
    conditionElementKey,
    conditionElementValue,
    conditionElementArray,
    conditionElementComparisonOperator,
    conditionElementLogicalOperator,
  ]
};