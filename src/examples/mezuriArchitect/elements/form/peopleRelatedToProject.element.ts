import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const peopleRelatedToProject: IFormAutocomplete = {
  type: "autocomplete",
  dataType: "text",
  label: "Pessoas relacionadas ao projeto",
  name: "peopleRelatedToProject",
  optionsApi: {
    endpoint: "/people",
    labelField: ["personName", "personCpf"],
    valueField: "_id",
    paramsToFilter: ["personName", "personCpf"],
    paramType: "query",
  },
  isMultiple: true,
};