import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const personAddressTwoZipCode: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CEP",
  name: "personAddressTwoZipCode",
  apiRequest: {
    endpoint: "https://brasilapi.com.br/api/cep/v1/",
    paramType: "path",
    formFieldsFilledByApiResponse: [
      {
        formFieldName: "personAddressTwoStreet",
        propertiesFromApiToFillFormField: ["street"]
      },
      {
        formFieldName: "personAddressTwoDistrict",
        propertiesFromApiToFillFormField: ["neighborhood"]
      },
      {
        formFieldName: "personAddressTwoCity",
        propertiesFromApiToFillFormField: ["city"]
      },
      {
        formFieldName: "personAddressTwoState",
        propertiesFromApiToFillFormField: ["state"]
      },
    ],
  },
  validators: ["cep"],
};
