import type { IProject } from "../interfaces/project.interface";
import { scheduleDescription } from "./elements/forms/inputs/descriptions/scheduleDescription.form-element";
import { finishDate } from "./elements/forms/inputs/finishDate.form-element";
import { startDate } from "./elements/forms/inputs/startDate.form-element";
import { scheduleTitle } from "./elements/forms/inputs/titles/scheduleTitle.form-element";
import { projectTabs } from "./elements/forms/tabs/projectTabs.form-element";

export const kunlatekBackoffice: IProject = {
  id: "kunlatekBackoffice",
  title: "Kunlatek Backoffice",
  description: "Backoffice for Kunlatek",
  flow: "permeson",
  backend: {
    database: "mongodb",
    framework: "nest",
  },
  frontend: {
    framework: "vue",
    uiKit: "flowbite",
  },
  forms: [
    {
      id: "project",
      title: "Projeto",
      guards: "isAuthorized",
      elements: [projectTabs]
    },
    {
      id: "schedule",
      title: "Agenda",
      guards: "isAuthorized",
      elements: [startDate, finishDate, scheduleTitle, scheduleDescription]
    }
  ]
}