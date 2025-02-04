import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const artistPersonGender: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Gênero",
  name: "artistPersonGender",
  options: [
    { label: "Masculino",
      value: "m",
    },
    { label: "Feminino",
      value: "f",
    },
    { label: "Outro",
      value: "o",
    },
  ],
};