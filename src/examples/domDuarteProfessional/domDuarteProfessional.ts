import type { IProject } from "../../interfaces/project.interface";

export const domDuarteProfessional: IProject = {
  id: "domDuarteProfessional",
  title: "Dom Duarte - Profissionais",
  description: "__Example description__",
  flow: "autentikigo",
  businessPlan: {
    businessValue: ``,
    targetMarket: ``,
    benchmarkings: ``,
    legalIssues: ``,
    ethicalIssues: ``,
    afterSales: ``
  },
  modules: [
    professionalModule,
  ],
  forms: [
    personForm,
    companyForm,
  ],
  lists: [
    personList,
    companyList,
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