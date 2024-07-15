import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { filtersFromOtherFormFields } from "../arrays/filtersFromOtherFormFields.form-element";
import { formFieldsFilledByApiResponse } from "../arrays/formFieldsFilledByApiResponse.form-element";
import { paramsToFilter } from "../arrays/paramsToFilter.form-element";
import { populate } from "../arrays/populate.form-element";
import { endpoint } from "../inputs/endpoint.form-element";
import { labelField } from "../inputs/labelField.form-element";
import { rawQuery } from "../inputs/rawQuery.form-element";
import { valueField } from "../inputs/valueField.form-element";
import { endpointParamType } from "../selects/endpointParamType.form-element";
import { isNotKunlatekResponse } from "../selects/isNotKunlatekResponse.form-element";

const newEndpoint = { ...endpoint, isRequired: true };
const newLabelfield = { ...labelField, isRequired: true };
const newValueField = { ...valueField, isRequired: true };
const newParamsToFilter = { ...paramsToFilter, isRequired: true };
const newEndpointParamType = { ...endpointParamType, isRequired: true };

export const optionsApi: IFormFieldset = {
  type: "fieldset",
  id: "optionsApi",
  title: "Opções da API",
  elements: [
    newEndpoint,
    newLabelfield,
    newValueField,
    newParamsToFilter,
    newEndpointParamType,
    populate,
    formFieldsFilledByApiResponse,
    filtersFromOtherFormFields,
    isNotKunlatekResponse,
    rawQuery,
  ]
};