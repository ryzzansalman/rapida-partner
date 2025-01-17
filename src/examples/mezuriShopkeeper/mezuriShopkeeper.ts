import type { IProject } from "../../interfaces/project.interface";
import { customerCompanyForm } from "./components/customerCompany.form";
import { customerCompanyList } from "./components/customerCompany.list";
import { customerPersonForm } from "./components/customerPerson.form";
import { customerPersonList } from "./components/customerPerson.list";
import { projectForm } from "./components/project.form";
import { projectList } from "./components/project.list";
import { projectStepForm } from "./components/projectStep.form";
import { projectStepList } from "./components/projectStep.list";
import { tagForm } from "./components/tag.form";
import { customerModule } from "./modules/customer";
import { productModule } from "./modules/product";
import { projectModule } from "./modules/project";
import { tagModule } from "./modules/tag";

export const mezuriShopkeeper: IProject = {
  id: "mezuriShopkeeper",
  title: "Mezuri Shopkeeper",
  description: "Sistema de gerenciamento para lojistas",
  flow: "komerco",
  businessPlan: {
    businessValue: ``,
    targetMarket: ``,
    benchmarkings: ``,
    legalIssues: ``,
    ethicalIssues: ``,
    afterSales: ``
  },
  modules: [
    customerModule,
    productModule,
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
  ],
  frontend: {
    framework: "svelte",
    uiKit: "flowbite",
  },
  backend: {
    framework: "nest",
    database: "mongodb"
  },
};