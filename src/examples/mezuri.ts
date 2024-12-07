import type { IProject } from "../interfaces/project.interface";

const mezuri: IProject = {
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
    {
      id: "animationModule",
      title: "Módulo de animação",
      icon: "",
      elements: [
        {
          id: "animationForm",
          type: "forms"
        },
        {
          id: "characterForm",
          type: "forms"
        }
      ]
    }
  ],
};