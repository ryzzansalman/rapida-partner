import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const moduleId: IFormAutocomplete = {
    type: "autocomplete",
    dataType: "text",
    label: "Módulo",
    name: "moduleId",
    relatedEntity: "Module",
    optionsApi: {
        endpoint: "/modules",
        labelField: ["name"],
        valueField: "_id",
        paramsToFilter: ["name"],
        paramType: "query",
    },
};