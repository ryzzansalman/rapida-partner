import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { endpoint } from "../inputs/endpoint.form-element";
import { endpointParamType } from "../selects/endpointParamType.form-element";
import { filtersFromOtherFormFields } from "../arrays/filtersFromOtherFormFields.form-element";
import { isNotKunlatekResponse } from "../selects/isNotKunlatekResponse.form-element";
import { formFieldsFilledByApiResponse } from "../arrays/formFieldsFilledByApiResponse.form-element";
import { hasAuthentication } from "../selects/hasAuthetntication.form-element";

const newEndpoint = {...endpoint, isRequired: true};
const newEndpointParamType = {...endpointParamType, isRequired: true};

export const apiRequest: IFormFieldset = {
  type: "fieldset",
  id: "apiRequest",
  title: "Requisição API",
  elements: [
    newEndpoint,
    newEndpointParamType,
    isNotKunlatekResponse,
    filtersFromOtherFormFields,
    formFieldsFilledByApiResponse,
    hasAuthentication
  ],
  conditions: [
    {
      type: "form",
      elements: [
        {
          key: "formElementType",
          comparisonOperator: "===",
          value: "input",
        },
        {
          logicalOperator: "||",
          key: "formElementType",
          comparisonOperator: "===",
          value: "button",
        }
      ]
    }
  ]
};