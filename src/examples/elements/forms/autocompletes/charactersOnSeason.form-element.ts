import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const charactersOnSeason: IFormAutocomplete = {
    type: "autocomplete",
    dataType: "text",
    label: "Personagens que aparecem na temporada",
    name: "charactersOnSeason",
    relatedEntity: "Character",
    optionsApi: {
        endpoint: "/characters",
        labelField: ["name"],
        valueField: "_id",
        paramsToFilter: ["name"],
        paramType: "query",
    },
};