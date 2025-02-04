import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const companyPartners: IFormAutocomplete = {
  type: "autocomplete",
  dataType: "text",
  label: "Sócios",
  tooltip: "O(s) sócio(s) deve(m) estar cadastrado(s) no gerenciamento de pessoas.",
  name: "companyPartners",
  optionsApi: {
    endpoint: "/api/people",
    labelField: ["personCpf", "personName"],
    valueField: "_id",
    paramsToFilter: ["personCpf", "personName"],
    paramType: "query",
  },
  isMultiple: true,
};