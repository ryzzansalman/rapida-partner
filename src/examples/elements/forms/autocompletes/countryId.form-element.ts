import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const countryId: IFormAutocomplete = {
    type: "autocomplete",
    dataType: "text",
    label: "País de origem",
    name: "countryId",
    optionsApi: {
        endpoint: "http://localhost:3000/__loko/countries",
        labelField: ["description"],
        valueField: "place_id",
        paramsToFilter: ["name"],
        paramType: "query",
    },
};