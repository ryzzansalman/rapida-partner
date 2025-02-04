import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistPersonAddressOneZipCode: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CEP",
  name: "artistPersonAddressOneZipCode",
  apiRequest: {
    endpoint: "https://brasilapi.com.br/api/cep/v1/",
    paramType: "path",
    formFieldsFilledByApiResponse: [
      {
        formFieldName: "artistPersonAddressOneStreet",
        propertiesFromApiToFillFormField: ["street"]
      },
      {
        formFieldName: "artistPersonAddressOneDistrict",
        propertiesFromApiToFillFormField: ["neighborhood"]
      },
      {
        formFieldName: "artistPersonAddressOneCity",
        propertiesFromApiToFillFormField: ["city"]
      },
      {
        formFieldName: "artistPersonAddressOneState",
        propertiesFromApiToFillFormField: ["state"]
      },
    ],
  },
  validators: ["cep"],
};
