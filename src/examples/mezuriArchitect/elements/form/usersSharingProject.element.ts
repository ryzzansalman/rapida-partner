import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const usersSharingProject: IFormAutocomplete = {
  type: "autocomplete",
  dataType: "text",
  label: "Usuários compartilhando o projeto",
  name: "usersSharingProject",
  optionsApi: {
    endpoint: "/__people",
    labelField: ["personName", "personCpf"],
    valueField: "_id",
    paramsToFilter: ["personName", "personCpf"],
    paramType: "query",
  },
  isMultiple: true,
};