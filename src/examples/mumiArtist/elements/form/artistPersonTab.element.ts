import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { artistPersonBirthday } from "./artistPersonBirthday.element";
import { artistPersonCpf } from "./artistPersonCpf.element";
import { artistPersonDescription } from "./artistPersonDescription.element";
import { artistPersonEmailOne } from "./artistPersonEmailOne.element";
import { artistPersonGender } from "./artistPersonGender.element";
import { artistPersonMaritalStatus } from "./artistPersonMaritalStatus.element";
import { artistPersonName } from "./artistPersonName.element";
import { artistPersonNickname } from "./artistPersonNickname.element";
import { artistPersonPassportNumber } from "./artistPersonPassportNumber.element";
import { artistPersonEmailTwo } from "./artistPersonEmailTwo.element";
import { artistPersonPhoneOne } from "./artistPersonPhoneOne.element";
import { artistPersonPhoneTwo } from "./artistPersonPhoneTwo.element";
import { artistPersonLinkedin } from "./artistPersonLinkedin.element";
import { artistPersonInstagram } from "./artistPersonInstagram.element";
import { artistPersonFacebook } from "./artistPersonFacebook.element";
import { artistPersonAddressOne } from "./artistPersonAddressOne.element";
import { artistPersonAddressTwo } from "./artistPersonAddressTwo.element";
import { artistPersonPicture } from "./artistPersonPicture.element";
import { artistPersonSiteOne } from "./artistPersonSiteOne.element";
import { artistPersonSiteTwo } from "./artistPersonSiteTwo.element";
import { tags } from "./tags.element";

export const artistPersonTab: IFormTab = {
  type: "tab",
  id: "artistPersonTab",
  tabs: [
    {
      id: "artistPersonMainDataTab",
      title: "Dados principais",
      elements: [
        {...artistPersonName, isRequired: true},
        artistPersonNickname,
        artistPersonBirthday,
        artistPersonGender,
        artistPersonDescription,
        artistPersonMaritalStatus,
        artistPersonPicture,
        tags,
      ],
    },
    {
      id: "artistPersonDocumentTab",
      title: "Documentos",
      elements: [
        {...artistPersonCpf, isRequired: true, isUnique: true},
        {...artistPersonPassportNumber, isUnique: true},
      ],
    },
    {
      id: "artistPersonContactTab",
      title: "Contatos e redes",
      elements: [
        {...artistPersonPhoneOne, isRequired: true},
        artistPersonPhoneTwo,
        {...artistPersonEmailOne, isRequired: true},
        artistPersonEmailTwo,
        artistPersonSiteOne,
        artistPersonSiteTwo,
        artistPersonLinkedin,
        artistPersonInstagram,
        artistPersonFacebook,
      ],
    },
    {
      id: "artistPersonAddressTab",
      title: "Endereços",
      elements: [artistPersonAddressOne, artistPersonAddressTwo],
    },
  ],
};
