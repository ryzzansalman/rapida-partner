import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const companiesRelatedToProject: IFormAutocomplete = {
  type: "autocomplete",
  dataType: "text",
  label: "Pessoas relacionadas ao projeto",
  name: "companiesRelatedToProject",
  optionsApi: {
    endpoint: "/api/companies",
    labelField: ["companyName", "companyCpf"],
    valueField: "_id",
    paramsToFilter: ["companyName", "companyCpf"],
    paramType: "query",
  },
  isMultiple: true,
};