import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { personAddressTwoCity } from "./personAddressTwoCity.element";
import { personAddressTwoComplement } from "./personAddressTwoComplement.element";
import { personAddressTwoDistrict } from "./personAddressTwoDistrict.element";
import { personAddressTwoLatitude } from "./personAddressTwoLatitude.element";
import { personAddressTwoLongitude } from "./personAddressTwoLongitude.element";
import { personAddressTwoNumber } from "./personAddressTwoNumber.element";
import { personAddressTwoState } from "./personAddressTwoState.element";
import { personAddressTwoStreet } from "./personAddressTwoStreet.element";
import { personAddressTwoZipCode } from "./personAddressTwoZipCode.element";

export const personAddressTwo: IFormFieldset = {
  type: "fieldset",
  id: "personAddressTwo",
  title: "Endereço 2",
  elements: [personAddressTwoZipCode, personAddressTwoStreet, personAddressTwoDistrict, personAddressTwoNumber, personAddressTwoComplement, personAddressTwoCity, personAddressTwoState, personAddressTwoLatitude, personAddressTwoLongitude],
};