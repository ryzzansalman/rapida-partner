import type { IProject } from "../../interfaces/project.interface";

export const aliroAttendant: IProject = {
  id: "aliroAttendant",
  title: "Aliro Attendant",
  description: "__Example description__",
  flow: "labotablo",
  businessPlan: {
    businessValue: ``,
    targetMarket: ``,
    benchmarkings: ``,
    legalIssues: ``,
    ethicalIssues: ``,
    afterSales: ``
  },
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