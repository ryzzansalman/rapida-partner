import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const endpointParamType: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Tipo de parâmetro do endpoint",
  name: "endpointParamType",
  options: [
    { value: "path", label: "Path" },
    { value: "query", label: "Query" },
  ],
};