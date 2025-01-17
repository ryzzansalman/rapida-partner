import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const projectStepsRelatedToProject: IFormAutocomplete = {
  type: "autocomplete",
  dataType: "text",
  label: "Etapas relacionadas ao projeto",
  tooltip: "O estapa de projeto deve estar cadastrado no gerenciamento de projetos.",
  name: "projectStepsRelatedToProject",
  optionsApi: {
    endpoint: "/api/projects-steps",
    labelField: ["projectStepName"],
    valueField: "_id",
    paramsToFilter: ["projectStepName"],
    paramType: "query",
  },
  isMultiple: true,
};