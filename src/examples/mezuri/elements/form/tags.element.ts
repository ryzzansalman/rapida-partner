import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const tags: IFormAutocomplete = {
  type: "autocomplete",
  dataType: "text",
  label: "Tags",
  name: "tags",
  optionsApi: {
    endpoint: "/api/tags",
    labelField: ["tagName"],
    valueField: "_id",
    paramsToFilter: ["tagName"],
    paramType: "query",
  },
  isMultiple: true,
};