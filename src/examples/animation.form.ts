import type { IForm } from "../interfaces/project.interface";

export const animationForm: IForm = {
    id: "animationForm",
    title: "Componente de animação",
    guards: ['Permeson'],
    elements: [
        {
            type: "tab",
            id: "animationTabs",
            tabs: [
                {
                    id: "animationTab",
                    title: "Dados principais",
                    elements: [
                        {
                            type: "input",
                            dataType: "text",
                            label: "Nome",
                            name: "name",
                            placeholder: "Nome da animação",
                            isRequired: true,
                            isUnique: true,
                            minLength: 3,
                        },
                        {
                            type: "autocomplete",
                            dataType: "text",
                            label: "País de origem",
                            name: "countryId",
                            optionsApi: {
                                endpoint: "http://localhost:3000/__loko/countries",
                                labelField: ["description"],
                                valueField: "place_id",
                                paramsToFilter: ["name"],
                                paramType: "query",
                            },
                            isRequired: true,
                        },
                        {
                            type: "input",
                            dataType: "file",
                            label: "Foto de capa",
                            name: "folderPicture",
                        },
                        {
                            type: "input",
                            label: "Data de início",
                            name: "startDate",
                            dataType: "date",
                            isRequired: true,
                        },
                        {
                            type: "input",
                            label: "Data de fim",
                            name: "finishDate",
                            dataType: "date",
                        },
                    ]
                },
                {
                    id: "seasonAndEpisodeTab",
                    title: "Temporadas e episódios",
                    elements: [
                        {
                            type: "array",
                            id: "seasons",
                            title: "Temporada",
                            elements: [
                                {
                                    type: "input",
                                    dataType: "wysiwyg",
                                    label: "Descrição",
                                    name: "seasonBrief",
                                },
                                {
                                    type: "autocomplete",
                                    dataType: "text",
                                    label: "Personagens que aparecem na temporada",
                                    name: "charactersOnSeason",
                                    relatedEntity: "Character",
                                    optionsApi: {
                                        endpoint: "/characters",
                                        labelField: ["name"],
                                        valueField: "_id",
                                        paramsToFilter: ["name"],
                                        paramType: "query",
                                    },
                                },
                                {
                                    type: "array",
                                    id: "episodes",
                                    title: "Episódio",
                                    elements: [
                                        {
                                            type: "input",
                                            dataType: "text",
                                            label: "Título",
                                            name: "title",
                                            isRequired: true,
                                        },
                                        {
                                            type: "input",
                                            dataType: "wysiwyg",
                                            label: "Resumo",
                                            name: "brief",
                                        },
                                        {
                                            type: "input",
                                            label: "Foto",
                                            name: "picture",
                                            dataType: "file"
                                        },
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