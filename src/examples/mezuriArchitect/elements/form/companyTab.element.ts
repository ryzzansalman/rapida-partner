import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { companyAddressOne } from "./companyAddressOne.element";
import { companyAddressTwo } from "./companyAddressTwo.element";
import { companyBirthday } from "./companyBirthday.element";
import { companyBusinessName } from "./companyBusinnessName.element";
import { companyCnpj } from "./companyCnpj.element";
import { companyDescription } from "./companyDescription.element";
import { companyEmailOne } from "./companyEmailOne.element";
import { companyEmailTwo } from "./companyEmailTwo.element";
import { companyFacebook } from "./companyFacebook.element";
import { companyInstagram } from "./companyInstagram.element";
import { companyLegalNature } from "./companyLegalNature.element";
import { companyLinkedin } from "./companyLinkedin.element";
import { companyLogo } from "./companyLogo.element";
import { companyName } from "./companyName.element";
import { companyPartners } from "./companyPartners.element";
import { companyPhoneOne } from "./companyPhoneOne.element";
import { companyPhoneTwo } from "./companyPhoneTwo.element";
import { companySiteOne } from "./companySiteOne.element";
import { companySiteTwo } from "./companySiteTwo.element";
import { tags } from "./tags.element";

export const companyTab: IFormTab = {
  type: "tab",
  id: "companyTab",
  tabs: [
    {
      id: "companyMainDataTab",
      title: "Dados principais",
      elements: [
        {...companyCnpj, isRequired: true, isUnique: true},
        {...companyName, isRequired: true},
        companyBusinessName,
        companyBirthday,
        companyLegalNature,
        companyDescription,
        companyLogo,
        companyPartners,
        tags,
      ],
    },
    {
      id: "companyContactTab",
      title: "Contatos e redes",
      elements: [
        {...companyPhoneOne, isRequired: true},
        companyPhoneTwo,
        {...companyEmailOne, isRequired: true},
        companyEmailTwo,
        companySiteOne,
        companySiteTwo,
        companyLinkedin,
        companyInstagram,
        companyFacebook,
      ],
    },
    {
      id: "companyAddressTab",
      title: "Endereços",
      elements: [companyAddressOne, companyAddressTwo],
    },
  ],
};
