import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { companyAddressTwoCity } from "./companyAddressTwoCity.element";
import { companyAddressTwoComplement } from "./companyAddressTwoComplement.element";
import { companyAddressTwoDistrict } from "./companyAddressTwoDistrict.element";
import { companyAddressTwoLatitude } from "./companyAddressTwoLatitude.element";
import { companyAddressTwoLongitude } from "./companyAddressTwoLongitude.element";
import { companyAddressTwoNumber } from "./companyAddressTwoNumber.element";
import { companyAddressTwoState } from "./companyAddressTwoState.element";
import { companyAddressTwoStreet } from "./companyAddressTwoStreet.element";
import { companyAddressTwoZipCode } from "./companyAddressTwoZipCode.element";

export const companyAddressTwo: IFormFieldset = {
  type: "fieldset",
  id: "companyAddressTwo",
  title: "Endereço 2",
  elements: [companyAddressTwoZipCode, companyAddressTwoStreet, companyAddressTwoDistrict, companyAddressTwoNumber, companyAddressTwoComplement, companyAddressTwoCity, companyAddressTwoState, companyAddressTwoLatitude, companyAddressTwoLongitude],
};