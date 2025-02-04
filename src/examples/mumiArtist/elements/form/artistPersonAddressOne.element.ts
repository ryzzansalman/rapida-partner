import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { artistPersonAddressOneCity } from "./artistPersonAddressOneCity.element";
import { artistPersonAddressOneComplement } from "./artistPersonAddressOneComplement.element";
import { artistPersonAddressOneDistrict } from "./artistPersonAddressOneDistrict.element";
import { artistPersonAddressOneLatitude } from "./artistPersonAddressOneLatitude.element";
import { artistPersonAddressOneLongitude } from "./artistPersonAddressOneLongitude.element";
import { artistPersonAddressOneNumber } from "./artistPersonAddressOneNumber.element";
import { artistPersonAddressOneState } from "./artistPersonAddressOneState.element";
import { artistPersonAddressOneStreet } from "./artistPersonAddressOneStreet.element";
import { artistPersonAddressOneZipCode } from "./artistPersonAddressOneZipCode.element";

export const artistPersonAddressOne: IFormFieldset = {
  type: "fieldset",
  id: "artistPersonAddressOne",
  title: "Endereço 1",
  elements: [artistPersonAddressOneZipCode, artistPersonAddressOneStreet, artistPersonAddressOneDistrict, artistPersonAddressOneNumber, artistPersonAddressOneComplement, artistPersonAddressOneCity, artistPersonAddressOneState, artistPersonAddressOneLatitude, artistPersonAddressOneLongitude],
};