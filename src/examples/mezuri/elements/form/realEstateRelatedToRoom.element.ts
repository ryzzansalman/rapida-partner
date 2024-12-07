import type { IFormAutocomplete } from "../../../../interfaces/form-autocomplete.interface";

export const realEstateRelatedToRoom: IFormAutocomplete = {
  type: "autocomplete",
  dataType: "text",
  label: "Imóvel relacionado ao espaço",
  tooltip: "O imóvel deve estar cadastrado no gerenciamento de imóveis.",
  name: "realEstateRelatedToRoom",
  optionsApi: {
    endpoint: "/api/real-estates",
    labelField: ["realEstateAddressOneZipCode", "realEstateName"],
    valueField: "_id",
    paramsToFilter: ["realEstateAddressOneZipCode", "realEstateName"],
    paramType: "query",
  },
  isMultiple: true,
};