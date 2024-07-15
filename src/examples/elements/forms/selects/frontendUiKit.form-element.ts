import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const frontendUiKit: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Frontend UI kit",
  name: "frontendUiKit",
  options: [
    { label: "Ant Design", value: "antdesign" },
    { label: "Bootstrap", value: "bootstrap" },
    { label: "Material", value: "material" },
    { label: "Flowbite", value: "flowbite" },
  ],
};