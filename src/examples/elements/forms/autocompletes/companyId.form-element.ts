import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const companyId: IFormAutocomplete = {
    type: "autocomplete",
    dataType: "text",
    label: "Empresa",
    name: "companyId",
    relatedEntity: "Company",
    optionsApi: {
        endpoint: "/companies",
        labelField: ["name"],
        valueField: "_id",
        paramsToFilter: ["name"],
        paramType: "query",
    },
};