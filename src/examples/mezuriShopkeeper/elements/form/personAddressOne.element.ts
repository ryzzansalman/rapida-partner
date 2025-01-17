import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { personAddressOneCity } from "./personAddressOneCity.element";
import { personAddressOneComplement } from "./personAddressOneComplement.element";
import { personAddressOneDistrict } from "./personAddressOneDistrict.element";
import { personAddressOneLatitude } from "./personAddressOneLatitude.element";
import { personAddressOneLongitude } from "./personAddressOneLongitude.element";
import { personAddressOneNumber } from "./personAddressOneNumber.element";
import { personAddressOneState } from "./personAddressOneState.element";
import { personAddressOneStreet } from "./personAddressOneStreet.element";
import { personAddressOneZipCode } from "./personAddressOneZipCode.element";

export const personAddressOne: IFormFieldset = {
  type: "fieldset",
  id: "personAddressOne",
  title: "Endereço 1",
  elements: [personAddressOneZipCode, personAddressOneStreet, personAddressOneDistrict, personAddressOneNumber, personAddressOneComplement, personAddressOneCity, personAddressOneState, personAddressOneLatitude, personAddressOneLongitude],
};