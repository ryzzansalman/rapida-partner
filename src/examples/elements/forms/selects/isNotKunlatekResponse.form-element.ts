import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const isNotKunlatekResponse: IFormSelect = {
  type: "select",
  dataType: "number",
  label: "É padrão Kunlatek pra Response",
  name: "isNotKunlatekResponse",
  options: [
    { value: true, label: "Não" },
    { value: false, label: "Sim", isSelected: true }, // Valor posto propositalmente invertido porque o atributo se refere ao que NÃO é padrão
  ],
};