import type { IForm } from "../../../interfaces/project.interface";
import { groupPermissionTabs } from "./tabs/groupPermissionTabs.form-element";

export const groupPermissionForm: IForm = {
    id: "groupPermissionForm",
    title: "Componente de grupo de permissão",
    guards: "isAuthorized",
    elements: [
        groupPermissionTabs
    ]
};