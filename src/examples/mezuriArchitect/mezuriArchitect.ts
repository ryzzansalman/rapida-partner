import type { IProject } from "../../interfaces/project.interface";
import { customerCompanyForm } from "./components/customerCompany.form";
import { customerCompanyList } from "./components/customerCompany.list";
import { customerPersonForm } from "./components/customerPerson.form";
import { customerPersonList } from "./components/customerPerson.list";
import { projectForm } from "./components/project.form";
import { projectList } from "./components/project.list";
import { projectStepForm } from "./components/projectStep.form";
import { projectStepList } from "./components/projectStep.list";
import { realEstateForm } from "./components/realEstate.form";
import { realEstateRoomForm } from "./components/realEstateRoom.form";
import { tagForm } from "./components/tag.form";
import { customerModule } from "./modules/customer";
import { projectModule } from "./modules/project";
import { tagModule } from "./modules/tag";

export const mezuriArchitect: IProject = {
  id: "mezuriArchitect",
  title: "Mezuri",
  description: "Sistema de gerenciamento de projetos para arquitetos",
  flow: "permeson",
  businessPlan: {
    businessValue: ``,
    targetMarket: ``,
    benchmarkings: ``,
    legalIssues: ``,
    ethicalIssues: ``,
    afterSales: ``
  },
  frontend: {
    framework: "svelte",
    uiKit: "flowbite",
  },
  backend: {
    framework: "nest",
    database: "mongodb"
  },
  modules: [
    customerModule,
    projectModule,
    tagModule,
  ],
  forms: [
    customerPersonForm,
    customerCompanyForm,
    projectForm,
    projectStepForm,
    tagForm,
  ],
  lists: [
    customerPersonList,
    customerCompanyList,
    projectList,
    projectStepList
  ]
};