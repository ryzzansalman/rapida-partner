import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { realEstateAddressCity } from "./realEstateAddressCity.element";
import { realEstateAddressComplement } from "./realEstateAddressComplement.element";
import { realEstateAddressDistrict } from "./realEstateAddressDistrict.element";
import { realEstateAddressLatitude } from "./realEstateAddressLatitude.element";
import { realEstateAddressLongitude } from "./realEstateAddressLongitude.element";
import { realEstateAddressNumber } from "./realEstateAddressNumber.element";
import { realEstateAddressState } from "./realEstateAddressState.element";
import { realEstateAddressStreet } from "./realEstateAddressStreet.element";
import { realEstateAddressZipCode } from "./realEstateAddressZipCode.element";

export const realEstateAddress: IFormFieldset = {
  type: "fieldset",
  id: "realEstateAddress",
  title: "Endereço",
  elements: [realEstateAddressZipCode, realEstateAddressStreet, realEstateAddressDistrict, realEstateAddressNumber, realEstateAddressComplement, realEstateAddressCity, realEstateAddressState, realEstateAddressLatitude, realEstateAddressLongitude],
};