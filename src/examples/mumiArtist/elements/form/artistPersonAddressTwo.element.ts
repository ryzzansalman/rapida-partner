import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { artistPersonAddressTwoCity } from "./artistPersonAddressTwoCity.element";
import { artistPersonAddressTwoComplement } from "./artistPersonAddressTwoComplement.element";
import { artistPersonAddressTwoDistrict } from "./artistPersonAddressTwoDistrict.element";
import { artistPersonAddressTwoLatitude } from "./artistPersonAddressTwoLatitude.element";
import { artistPersonAddressTwoLongitude } from "./artistPersonAddressTwoLongitude.element";
import { artistPersonAddressTwoNumber } from "./artistPersonAddressTwoNumber.element";
import { artistPersonAddressTwoState } from "./artistPersonAddressTwoState.element";
import { artistPersonAddressTwoStreet } from "./artistPersonAddressTwoStreet.element";
import { artistPersonAddressTwoZipCode } from "./artistPersonAddressTwoZipCode.element";

export const artistPersonAddressTwo: IFormFieldset = {
  type: "fieldset",
  id: "artistPersonAddressTwo",
  title: "Endereço 2",
  elements: [artistPersonAddressTwoZipCode, artistPersonAddressTwoStreet, artistPersonAddressTwoDistrict, artistPersonAddressTwoNumber, artistPersonAddressTwoComplement, artistPersonAddressTwoCity, artistPersonAddressTwoState, artistPersonAddressTwoLatitude, artistPersonAddressTwoLongitude],
};