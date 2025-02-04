import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistCompanyAddressOneZipCode: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CEP",
  name: "artistCompanyAddressOneZipCode",
  apiRequest: {
    endpoint: "https://brasilapi.com.br/api/cep/v1/",
    paramType: "path",
    formFieldsFilledByApiResponse: [
      {
        formFieldName: "artistCompanyAddressOneStreet",
        propertiesFromApiToFillFormField: ["street"]
      },
      {
        formFieldName: "artistCompanyAddressOneDistrict",
        propertiesFromApiToFillFormField: ["neighborhood"]
      },
      {
        formFieldName: "artistCompanyAddressOneCity",
        propertiesFromApiToFillFormField: ["city"]
      },
      {
        formFieldName: "artistCompanyAddressOneState",
        propertiesFromApiToFillFormField: ["state"]
      },
    ],
  },
  validators: ["cep"],
};
