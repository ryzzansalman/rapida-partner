import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { ruleDescription } from "../inputs/descriptions/ruleDescription.form-element";
import { businessSubrules } from "./businessSubrules.form-element";

export const businessRules: IFormArray = {
  type: "array",
  id: "businessRules",
  title: "Regra",
  elements: [
    ruleDescription,
    businessSubrules,
  ],
};