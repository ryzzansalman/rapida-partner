import type { IForm } from "../../../interfaces/project.interface";
import { businessRules } from "./arrays/businessRules.form-element";
import { afterSales } from "./inputs/afterSales.form-element";
import { benchmarkings } from "./inputs/benchmarkings.form-element";
import { businessValue } from "./inputs/businessValue.form-element";
import { projectDescription } from "./inputs/descriptions/projectDescription.form-element";
import { ethicalIssues } from "./inputs/ethicalIssues.form-element";
import { projectId } from "./inputs/ids/projectId.form-element";
import { legalIssues } from "./inputs/legalIssues.form-element";
import { targetMarket } from "./inputs/targetMarket.form-element";
import { projectTitle } from "./inputs/titles/projectTitle.form-element";
import { backendFramework } from "./selects/backendFramework.form-select";
import { database } from "./selects/database.form-select";
import { frontendFramework } from "./selects/frontendFramework.form-element";
import { frontendUiKit } from "./selects/frontendUiKit.form-element";

export const rapidaProjectForm: IForm = {
  id: "projectForm",
  title: "Gerenciar projeto",
  guards: "isAuthorized",
  elements: [
    {
      type: "tab",
      id: "projectTab",
      tabs: [
        {
          id: "mainTab",
          title: "Dados principais",
          elements: [
            projectId,
            projectTitle,
            projectDescription,
          ],
        },
        {
          id: "businessPlanTab",
          title: "Plano de negócios",
          elements: [
            businessValue,
            targetMarket,
            benchmarkings,
            legalIssues,
            ethicalIssues,
            afterSales,
          ],
        },
        {
          id: "businessRulesTab",
          title: "Regras de negócio",
          elements: [
            businessRules,
          ],
        },
        {
          id: "technologiesTab",
          title: "Tecnologias",
          elements: [
            frontendFramework,
            frontendUiKit,
            backendFramework,
            database,
          ]
        }
      ],
    },
  ],
};
