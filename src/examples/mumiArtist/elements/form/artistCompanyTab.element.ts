import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { artistCompanyAddressOne } from "./artistCompanyAddressOne.element";
import { artistCompanyAddressTwo } from "./artistCompanyAddressTwo.element";
import { artistCompanyBirthday } from "./artistCompanyBirthday.element";
import { artistCompanyBusinessName } from "./artistCompanyBusinnessName.element";
import { artistCompanyCnpj } from "./artistCompanyCnpj.element";
import { artistCompanyDescription } from "./artistCompanyDescription.element";
import { artistCompanyEmailOne } from "./artistCompanyEmailOne.element";
import { artistCompanyEmailTwo } from "./artistCompanyEmailTwo.element";
import { artistCompanyFacebook } from "./artistCompanyFacebook.element";
import { artistCompanyInstagram } from "./artistCompanyInstagram.element";
import { artistCompanyLegalNature } from "./artistCompanyLegalNature.element";
import { artistCompanyLinkedin } from "./artistCompanyLinkedin.element";
import { artistCompanyLogo } from "./artistCompanyLogo.element";
import { artistCompanyName } from "./artistCompanyName.element";
import { artistCompanyPartners } from "./artistCompanyPartners.element";
import { artistCompanyPhoneOne } from "./artistCompanyPhoneOne.element";
import { artistCompanyPhoneTwo } from "./artistCompanyPhoneTwo.element";
import { artistCompanySiteOne } from "./artistCompanySiteOne.element";
import { artistCompanySiteTwo } from "./artistCompanySiteTwo.element";
import { tags } from "./tags.element";

export const artistCompanyTab: IFormTab = {
  type: "tab",
  id: "artistCompanyTab",
  tabs: [
    {
      id: "artistCompanyMainDataTab",
      title: "Dados principais",
      elements: [
        {...artistCompanyCnpj, isRequired: true, isUnique: true},
        {...artistCompanyName, isRequired: true},
        artistCompanyBusinessName,
        artistCompanyBirthday,
        artistCompanyLegalNature,
        artistCompanyDescription,
        artistCompanyLogo,
        artistCompanyPartners,
        tags,
      ],
    },
    {
      id: "artistCompanyContactTab",
      title: "Contatos e redes",
      elements: [
        {...artistCompanyPhoneOne, isRequired: true},
        artistCompanyPhoneTwo,
        {...artistCompanyEmailOne, isRequired: true},
        artistCompanyEmailTwo,
        artistCompanySiteOne,
        artistCompanySiteTwo,
        artistCompanyLinkedin,
        artistCompanyInstagram,
        artistCompanyFacebook,
      ],
    },
    {
      id: "artistCompanyAddressTab",
      title: "Endereços",
      elements: [artistCompanyAddressOne, artistCompanyAddressTwo],
    },
  ],
};
