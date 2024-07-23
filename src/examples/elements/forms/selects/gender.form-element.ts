import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const gender: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Gênero",
  name: "gender",
  options: [
    { label: "Masculino", value: "male" },
    { label: "Feminino", value: "female" },
    { label: "Outro", value: "other" },
  ],  
};