import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { artistCompanyAddressOneCity } from "./artistCompanyAddressOneCity.element";
import { artistCompanyAddressOneComplement } from "./artistCompanyAddressOneComplement.element";
import { artistCompanyAddressOneDistrict } from "./artistCompanyAddressOneDistrict.element";
import { artistCompanyAddressOneLatitude } from "./artistCompanyAddressOneLatitude.element";
import { artistCompanyAddressOneLongitude } from "./artistCompanyAddressOneLongitude.element";
import { artistCompanyAddressOneNumber } from "./artistCompanyAddressOneNumber.element";
import { artistCompanyAddressOneState } from "./artistCompanyAddressOneState.element";
import { artistCompanyAddressOneStreet } from "./artistCompanyAddressOneStreet.element";
import { artistCompanyAddressOneZipCode } from "./artistCompanyAddressOneZipCode.element";

export const artistCompanyAddressOne: IFormFieldset = {
  type: "fieldset",
  id: "artistCompanyAddressOne",
  title: "Endereço 1",
  elements: [artistCompanyAddressOneZipCode, artistCompanyAddressOneStreet, artistCompanyAddressOneDistrict, artistCompanyAddressOneNumber, artistCompanyAddressOneComplement, artistCompanyAddressOneCity, artistCompanyAddressOneState, artistCompanyAddressOneLatitude, artistCompanyAddressOneLongitude],
};