import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { companyAddressOneCity } from "./companyAddressOneCity.element";
import { companyAddressOneComplement } from "./companyAddressOneComplement.element";
import { companyAddressOneDistrict } from "./companyAddressOneDistrict.element";
import { companyAddressOneLatitude } from "./companyAddressOneLatitude.element";
import { companyAddressOneLongitude } from "./companyAddressOneLongitude.element";
import { companyAddressOneNumber } from "./companyAddressOneNumber.element";
import { companyAddressOneState } from "./companyAddressOneState.element";
import { companyAddressOneStreet } from "./companyAddressOneStreet.element";
import { companyAddressOneZipCode } from "./companyAddressOneZipCode.element";

export const companyAddressOne: IFormFieldset = {
  type: "fieldset",
  id: "companyAddressOne",
  title: "Endereço 1",
  elements: [companyAddressOneZipCode, companyAddressOneStreet, companyAddressOneDistrict, companyAddressOneNumber, companyAddressOneComplement, companyAddressOneCity, companyAddressOneState, companyAddressOneLatitude, companyAddressOneLongitude],
};