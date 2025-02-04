import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistCompanyAddressTwoZipCode: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CEP",
  name: "artistCompanyAddressTwoZipCode",
  apiRequest: {
    endpoint: "https://brasilapi.com.br/api/cep/v1/",
    paramType: "path",
    formFieldsFilledByApiResponse: [
      {
        formFieldName: "artistCompanyAddressTwoStreet",
        propertiesFromApiToFillFormField: ["street"]
      },
      {
        formFieldName: "artistCompanyAddressTwoDistrict",
        propertiesFromApiToFillFormField: ["neighborhood"]
      },
      {
        formFieldName: "artistCompanyAddressTwoCity",
        propertiesFromApiToFillFormField: ["city"]
      },
      {
        formFieldName: "artistCompanyAddressTwoState",
        propertiesFromApiToFillFormField: ["state"]
      },
    ],
  },
  validators: ["cep"],
};
