import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const frontendFramework: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Frontend framework",
  name: "frontendFramework",
  options: [
    { label: "Angular", value: "angular" },
    { label: "Flutter", value: "flutter" },
    { label: "React", value: "react" },
    { label: "Svelte", value: "svelte" },
    { label: "Vue", value: "vue" },
  ],
  isRequired: true,
};