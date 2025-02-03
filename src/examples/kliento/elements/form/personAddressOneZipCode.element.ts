import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const personAddressOneZipCode: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CEP",
  name: "personAddressOneZipCode",
  apiRequest: {
    endpoint: "https://brasilapi.com.br/api/cep/v1/",
    paramType: "path",
    formFieldsFilledByApiResponse: [
      {
        formFieldName: "personAddressOneStreet",
        propertiesFromApiToFillFormField: ["street"]
      },
      {
        formFieldName: "personAddressOneDistrict",
        propertiesFromApiToFillFormField: ["neighborhood"]
      },
      {
        formFieldName: "personAddressOneCity",
        propertiesFromApiToFillFormField: ["city"]
      },
      {
        formFieldName: "personAddressOneState",
        propertiesFromApiToFillFormField: ["state"]
      },
    ],
  },
  validators: ["cep"],
};
