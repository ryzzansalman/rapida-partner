import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const realEstateRoomRelatedToProject: IFormAutocomplete = {
  type: "autocomplete",
  dataType: "text",
  label: "Espaço relacionado ao projeto",
  tooltip: "O espaço de imóvel deve estar cadastrado no gerenciamento de imóvel.",
  name: "realEstateRoomRelatedToProject",
  optionsApi: {
    endpoint: "/api/real-estates-rooms",
    labelField: ["realEstateRoomName"],
    valueField: "_id",
    paramsToFilter: ["realEstateRoomName"],
    paramType: "query",
  },
};