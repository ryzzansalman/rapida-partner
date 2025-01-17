import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const realEstateAddressZipCode: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CEP",
  name: "realEstateAddressZipCode",
  apiRequest: {
    endpoint: "https://brasilapi.com.br/api/cep/v1/",
    paramType: "path",
    formFieldsFilledByApiResponse: [
      {
        formFieldName: "realEstateAddressStreet",
        propertiesFromApiToFillFormField: ["street"]
      },
      {
        formFieldName: "realEstateAddressDistrict",
        propertiesFromApiToFillFormField: ["neighborhood"]
      },
      {
        formFieldName: "realEstateAddressCity",
        propertiesFromApiToFillFormField: ["city"]
      },
      {
        formFieldName: "realEstateAddressState",
        propertiesFromApiToFillFormField: ["state"]
      },
    ],
  },
  validators: ["cep"],
};
