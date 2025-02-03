import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const companyAddressTwoZipCode: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CEP",
  name: "companyAddressTwoZipCode",
  apiRequest: {
    endpoint: "https://brasilapi.com.br/api/cep/v1/",
    paramType: "path",
    formFieldsFilledByApiResponse: [
      {
        formFieldName: "companyAddressTwoStreet",
        propertiesFromApiToFillFormField: ["street"]
      },
      {
        formFieldName: "companyAddressTwoDistrict",
        propertiesFromApiToFillFormField: ["neighborhood"]
      },
      {
        formFieldName: "companyAddressTwoCity",
        propertiesFromApiToFillFormField: ["city"]
      },
      {
        formFieldName: "companyAddressTwoState",
        propertiesFromApiToFillFormField: ["state"]
      },
    ],
  },
  validators: ["cep"],
};
