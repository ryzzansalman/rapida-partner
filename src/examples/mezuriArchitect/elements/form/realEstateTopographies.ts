import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const realEstateTopographies: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Topografias",
  name: "realEstateTopographies",
  options: [
    {
      label: "Plano",
      value: "flat",
    },
    {
      label: "Aclive",
      value: "uphillSlope",
    },
    {
      label: "Declive",
      value: "downhillSlope",
    },
  ],
  isMultiple: true,
};