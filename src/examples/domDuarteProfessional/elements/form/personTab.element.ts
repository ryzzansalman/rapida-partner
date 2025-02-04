import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { personBirthday } from "./personBirthday.element";
import { personCpf } from "./personCpf.element";
import { personDescription } from "./personDescription.element";
import { personEmailOne } from "./personEmailOne.element";
import { personGender } from "./personGender.element";
import { personMaritalStatus } from "./personMaritalStatus.element";
import { personName } from "./personName.element";
import { personNickname } from "./personNickname.element";
import { personPassportNumber } from "./personPassportNumber.element";
import { personEmailTwo } from "./personEmailTwo.element";
import { personPhoneOne } from "./personPhoneOne.element";
import { personPhoneTwo } from "./personPhoneTwo.element";
import { personLinkedin } from "./personLinkedin.element";
import { personInstagram } from "./personInstagram.element";
import { personFacebook } from "./personFacebook.element";
import { personAddressOne } from "./personAddressOne.element";
import { personAddressTwo } from "./personAddressTwo.element";
import { personPicture } from "./personPicture.element";
import { personSiteOne } from "./personSiteOne.element";
import { personSiteTwo } from "./personSiteTwo.element";
import { tags } from "./tags.element";

export const personTab: IFormTab = {
  type: "tab",
  id: "personTab",
  tabs: [
    {
      id: "personMainDataTab",
      title: "Dados principais",
      elements: [
        {...personName, isRequired: true},
        personNickname,
        personBirthday,
        personGender,
        personDescription,
        personMaritalStatus,
        personPicture,
        tags,
      ],
    },
    {
      id: "personDocumentTab",
      title: "Documentos",
      elements: [
        {...personCpf, isRequired: true, isUnique: true},
        {...personPassportNumber, isUnique: true},
      ],
    },
    {
      id: "personContactTab",
      title: "Contatos e redes",
      elements: [
        {...personPhoneOne, isRequired: true},
        personPhoneTwo,
        {...personEmailOne, isRequired: true},
        personEmailTwo,
        personSiteOne,
        personSiteTwo,
        personLinkedin,
        personInstagram,
        personFacebook,
      ],
    },
    {
      id: "personAddressTab",
      title: "Endereços",
      elements: [personAddressOne, personAddressTwo],
    },
  ],
};
