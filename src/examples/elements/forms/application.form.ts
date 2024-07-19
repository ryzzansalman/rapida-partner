import type { IFormInput } from "../../../interfaces/form-input.interface";
import type { IForm } from "../../../interfaces/project.interface";
import { saveButton } from "./buttons/saveButton.form-element";
import { applicationDescription } from "./inputs/descriptions/applicationDescription.form-element";
import { applicationName } from "./inputs/names/applicationName.form-element";
import { logo } from "./inputs/pictures/logo.fom-element";
import { urlDevelopment } from "./inputs/urlDevelopment.form-element";
import { urlHomologation } from "./inputs/urlHomologation.form-element";
import { urlProduction } from "./inputs/urlProduction.form-element";

const newApplicationName: IFormInput = { ...applicationName, isRequired: true, isUnique: true };
const newApplicationDescription: IFormInput = { ...applicationDescription, isRequired: true };
const newUrlDevelopment: IFormInput = { ...urlDevelopment, isRequired: true };
const newUrlHomologation: IFormInput = { ...urlHomologation, isRequired: true };
const newUrlProduction: IFormInput = { ...urlProduction, isRequired: true };

export const applicationForm: IForm = {
    id: "applicationForm",
    title: "Gerenciar aplicação",
    elements: [
        newApplicationName, 
        newApplicationDescription, 
        newUrlDevelopment, 
        newUrlHomologation, 
        newUrlProduction, 
        logo,
        saveButton
    ]
};