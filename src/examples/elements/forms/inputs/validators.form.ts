import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const validators: IFormSelect = {
  type: "select",
  name: "validators",
  dataType: "text",
  label: "Tipo de formulário",
  options: [
    { value: "cnpj", label: "CNPJ" },
    { value: "cpf", label: "CPF" },
  ],
  isRequired: true,
};