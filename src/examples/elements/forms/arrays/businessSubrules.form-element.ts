import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { subruleDescription } from "../inputs/descriptions/subruleDescription.form-element";

export const businessSubrules: IFormArray = {
  type: "array",
  id: "businessSubrules",
  title: "Sub-regra",
  elements: [
    subruleDescription,
  ],
};