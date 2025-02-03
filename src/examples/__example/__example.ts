import type { IProject } from "../../interfaces/project.interface";

export const __example: IProject = {
  id: "__example",
  title: "__Example title__",
  description: "__Example description__",
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
  ],
  forms: [
  ],
  lists: [
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