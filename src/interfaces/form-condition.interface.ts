export interface IFormCondition {
  type: "form" | "code" | "array";
  elements?: IConditionElement[];
  code?: IConditionCode;
}

interface IConditionElement {
  key: string;
  value?: any;
  array?: string;
  comparisonOperator: "===" | ">" | ">=" | "in" | "<" | "<=" | "!==" | "nin";
  logicalOperator?: "&&" | "!" | "nor" | "||";
}

interface IConditionCode {
  triggerField: string;
  code: string;
}
