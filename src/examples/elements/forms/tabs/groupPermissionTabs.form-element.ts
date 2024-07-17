import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { modulesAndVerbs } from "../arrays/modulesAndVerbs.form-element";
import { permissionGroupName } from "../inputs/names/permissionGroupName.form-element";

const newPermissionGroupName = { ...permissionGroupName, isRequired: true, isUnique: true, minLength: 3 };

export const groupPermissionTabs: IFormTab = {
    type: "tab",
    id: "groupPermissionTabs",
    tabs: [
        {
            id: "mainTab",
            title: "Dados principais",
            elements: [
                newPermissionGroupName,
            ]
        },
        {
            id: "modulesAndVerbsTab",
            title: "Módulos e permissões",
            elements: [
                modulesAndVerbs
            ]
        }
    ]
};