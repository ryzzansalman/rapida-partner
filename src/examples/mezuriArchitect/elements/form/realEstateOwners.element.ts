import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const realEstateOwners: IFormAutocomplete = {
  type: "autocomplete",
  dataType: "text",
  label: "Responsáveis pelo imóvel",
  tooltip: "O(s) responsável(is) deve(m) estar cadastrado(s) no gerenciamento de pessoas.",
  name: "realEstateOwners",
  optionsApi: {
    endpoint: "/api/people",
    labelField: ["personCpf", "personName"],
    valueField: "_id",
    paramsToFilter: ["personCpf", "personName"],
    paramType: "query",
  },
  isMultiple: true,
};