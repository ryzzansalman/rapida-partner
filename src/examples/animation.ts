import { type IProject } from '../interfaces/project.interface'
import { animationForm } from './elements/forms/animation.form';
import { animationList } from './elements/lists/animation.list';
export const animation: IProject = {
  id: "animation",
  description: "Gerar uma base de dados para ",
  title: "Animação",
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
    uiKit: "antdesign",
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
  forms: [animationForm],
  lists: [animationList]
};