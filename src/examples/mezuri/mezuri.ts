import type { IProject } from "../../interfaces/project.interface";
import { customerPersonForm } from "./components/customerPerson.form";
import { customerModule } from "./modules/customer";
import { projectModule } from "./modules/project";
import { realEstateModule } from "./modules/realEstate";

export const mezuri: IProject = {
  id: "mezuri",
  title: "Mezuri",
  description: "Gerar uma base de dados para ",
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
    realEstateModule,
    projectModule
  ],
  forms: [
    customerPersonForm
  ]
};