import type { IFormCondition } from "./form-condition.interface";

export interface IFormAutocomplete {
  type: "autocomplete";
  name: string;
  dataType: "text" | "number" | "password" | "email" | "color" | "date" | "file";
  label: string;
  placeholder?: string;
  tooltip?: string;
  isAutofocus?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isUnique?: boolean;
  conditions?: IFormCondition[];
  validators?: ("cpf" | "cnpj")[];
  todo?: string;
  optionsApi: IOptionsApi;
  isMultiple?: boolean;
  relatedEntity?: string;
}

interface IOptionsApi {
  endpoint?: string;
  labelField: string[];
  valueField: string;
  paramsToFilter: string[];
  paramType: "query" | "path";
  populate?: string[];
  formFieldsFilledByApiResponse?: IApiResponseField[];
  filtersFromOtherFormFields?: IApiResponseFieldFilter[];
  isNotKunlatekResponse?: boolean;
  rawQuery?: string;
}

export interface IApiResponseField {
  formFieldName: string;
  propertiesFromApiToFillFormField: string[];
  arrayParents?: string[];
}

export interface IApiResponseFieldFilter {
  formFieldName: string;
  filterPropertyName: string;
}
