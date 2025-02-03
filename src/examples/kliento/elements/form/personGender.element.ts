import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const personGender: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Gênero",
  name: "personGender",
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