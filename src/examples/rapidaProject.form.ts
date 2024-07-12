import type { IForm } from "../interfaces/project.interface";

export const rapidaProjectForm: IForm = {
  id: "projectForm",
  title: "Gerenciar projeto",
  guards: "isAuthorized",
  elements: [
    {
      type: "tab",
      id: "projectTab",
      title: "Projeto",
      tabs: [
        {
          id: "mainTab",
          title: "Dados principais",
          elements: [
            {
              type: "input",
              dataType: "text",
              name: "projectId",
              label: "Id",
              isRequired: true,
            },
            {
              type: "input",
              dataType: "text",
              name: "projectTitle",
              label: "Título",
              isRequired: true,
            },
            {
              type: "input",
              dataType: "wysiwyg",
              name: "projectDescription",
              label: "Descrição",
              isRequired: true,
            },
          ],
        },
        {
          id: "businessPlanTab",
          title: "Plano de negócios",
          elements: [
            {
              type: "input",
              name: "businessValue",
              dataType: "wysiwyg",
              label: "Valor do negócio",
            },
            {
              type: "input",
              name: "targetMarket",
              dataType: "wysiwyg",
              label: "Público alvo",
            },
            {
              type: "input",
              name: "benchmarkings",
              dataType: "wysiwyg",
              label: "Benchmarkings",
            },
            {
              type: "input",
              name: "legalIssues",
              dataType: "wysiwyg",
              label: "Legalidade",
            },
            {
              type: "input",
              name: "ethicalIssues",
              dataType: "wysiwyg",
              label: "Ética",
            },
            {
              type: "input",
              name: "afterSales",
              dataType: "wysiwyg",
              label: "Pós-venda",
            },
          ],
        },
        {
          id: "businessRulesTab",
          title: "Regras de negócio",
          elements: [
            {
              type: "array",
              id: "rules",
              title: "Regra",
              elements: [
                {
                  type: "input",
                  dataType: "text",
                  name: "ruleDescription",
                  label: "Descrição",
                },
                {
                  type: "array",
                  id: "subrules",
                  title: "Sub-regra",
                  elements: [
                    {
                      type: "input",
                      dataType: "text",
                      name: "subRuleDescription",
                      label: "Descrição",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "technologiesTab",
          title: "Tecnologias",
          elements: [
            {
              type: "select",
              dataType: "text",
              label: "Frontend framework",
              name: "frontendFramework",
              options: [
                { label: "Angular", value: "angular" },
                { label: "Flutter", value: "flutter" },
                { label: "React", value: "react" },
                { label: "Svelte", value: "svelte" },
                { label: "Vue", value: "vue" },
              ],
              isRequired: true,
            },
            {
              type: "select",
              dataType: "text",
              label: "Frontend UI kit",
              name: "frontendUiKit",
              options: [
                { label: "Ant Design", value: "antdesign" },
                { label: "Bootstrap", value: "bootstrap" },
                { label: "Material", value: "material" },
                { label: "Flowbite", value: "flowbite" },
              ],
            },
            {
              type: "select",
              dataType: "text",
              name: "backendFramework",
              label: "Backend framework",
              options: [
                { label: "Functions", value: "functions" },
                { label: "Lambda", value: "lambda" },
                { label: "Laravel", value: "laravel" },
                { label: "Nest", value: "nest" },
              ],
            },
            {
              type: "select",
              dataType: "text",
              name: "database",
              label: "Database",
              options: [
                { label: "MariaDB", value: "mariadb" },
                { label: "MongoDB", value: "mongodb" },
                { label: "Oracle", value: "oracle" },
                { label: "PostgreSQL", value: "postgresql" },
              ],
            },
          ]
        }
      ],
    },
  ],
};
