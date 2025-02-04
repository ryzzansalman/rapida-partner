import type { IFormFieldset } from "../../../../interfaces/form-fieldset.interface";
import { artistCompanyAddressTwoCity } from "./artistCompanyAddressTwoCity.element";
import { artistCompanyAddressTwoComplement } from "./artistCompanyAddressTwoComplement.element";
import { artistCompanyAddressTwoDistrict } from "./artistCompanyAddressTwoDistrict.element";
import { artistCompanyAddressTwoLatitude } from "./artistCompanyAddressTwoLatitude.element";
import { artistCompanyAddressTwoLongitude } from "./artistCompanyAddressTwoLongitude.element";
import { artistCompanyAddressTwoNumber } from "./artistCompanyAddressTwoNumber.element";
import { artistCompanyAddressTwoState } from "./artistCompanyAddressTwoState.element";
import { artistCompanyAddressTwoStreet } from "./artistCompanyAddressTwoStreet.element";
import { artistCompanyAddressTwoZipCode } from "./artistCompanyAddressTwoZipCode.element";

export const artistCompanyAddressTwo: IFormFieldset = {
  type: "fieldset",
  id: "artistCompanyAddressTwo",
  title: "Endereço 2",
  elements: [artistCompanyAddressTwoZipCode, artistCompanyAddressTwoStreet, artistCompanyAddressTwoDistrict, artistCompanyAddressTwoNumber, artistCompanyAddressTwoComplement, artistCompanyAddressTwoCity, artistCompanyAddressTwoState, artistCompanyAddressTwoLatitude, artistCompanyAddressTwoLongitude],
};