import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistPersonAddressTwoZipCode: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CEP",
  name: "artistPersonAddressTwoZipCode",
  apiRequest: {
    endpoint: "https://brasilapi.com.br/api/cep/v1/",
    paramType: "path",
    formFieldsFilledByApiResponse: [
      {
        formFieldName: "artistPersonAddressTwoStreet",
        propertiesFromApiToFillFormField: ["street"]
      },
      {
        formFieldName: "artistPersonAddressTwoDistrict",
        propertiesFromApiToFillFormField: ["neighborhood"]
      },
      {
        formFieldName: "artistPersonAddressTwoCity",
        propertiesFromApiToFillFormField: ["city"]
      },
      {
        formFieldName: "artistPersonAddressTwoState",
        propertiesFromApiToFillFormField: ["state"]
      },
    ],
  },
  validators: ["cep"],
};
