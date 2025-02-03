import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const companyAddressOneZipCode: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CEP",
  name: "companyAddressOneZipCode",
  apiRequest: {
    endpoint: "https://brasilapi.com.br/api/cep/v1/",
    paramType: "path",
    formFieldsFilledByApiResponse: [
      {
        formFieldName: "companyAddressOneStreet",
        propertiesFromApiToFillFormField: ["street"]
      },
      {
        formFieldName: "companyAddressOneDistrict",
        propertiesFromApiToFillFormField: ["neighborhood"]
      },
      {
        formFieldName: "companyAddressOneCity",
        propertiesFromApiToFillFormField: ["city"]
      },
      {
        formFieldName: "companyAddressOneState",
        propertiesFromApiToFillFormField: ["state"]
      },
    ],
  },
  validators: ["cep"],
};
