import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const backendFramework: IFormSelect = {
  type: "select",
  dataType: "text",
  name: "backendFramework",
  label: "Backend framework",
  options: [
    { label: "Functions", value: "functions" },
    { label: "Lambda", value: "lambda" },
    { label: "Laravel", value: "laravel" },
    { label: "Nest", value: "nest" },
  ],
};