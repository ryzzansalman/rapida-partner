import type { IForm } from "../interfaces/project.interface";

export const groupPermissionForm: IForm = {
    id: "groupPermissionForm",
    title: "Componente de grupo de permissão",
    elements: [
        {
            type: "tab",
            id: "groupPermissionTabs",
            tabs: [
                {
                    id: "mainTab",
                    title: "Dados principais",
                    elements: [
                        {
                            type: "input",
                            dataType: "text",
                            label: "Nome",
                            name: "name",
                            placeholder: "Nome do grupo de permissão",
                            isRequired: true,
                            isUnique: true,
                            minLength: 3,
                        },
                    ]
                },
                {
                    id: "modulesAndVerbsTab",
                    title: "Módulos e permissões",
                    elements: [
                        {
                            type: "array",
                            id: "modulesAndVerbs",
                            title: "Permissões por módulo",
                            elements: [
                                {
                                    type: "autocomplete",
                                    dataType: "text",
                                    label: "Módulo",
                                    name: "ModuleId",
                                    relatedEntity: "Module",
                                    optionsApi: {
                                        endpoint: "/modules",
                                        labelField: ["name"],
                                        valueField: "_id",
                                        paramsToFilter: ["name"],
                                        paramType: "query",
                                    },
                                },
                                {
                                    type: "select",
                                    dataType: "text",
                                    name: "methods",
                                    label: "Permissões",
                                    isMultiple: true,
                                    options: [
                                        {
                                            label: "Ler",
                                            value: "get",
                                            isSelected: true,
                                            isDisabled: true
                                        },
                                        {
                                            label: "Escrever",
                                            value: "post"
                                        },
                                        {
                                            label: "Editar",
                                            value: "put"
                                        },
                                        {
                                            label: "Remover",
                                            value: "delete"
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};