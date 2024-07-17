import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { moduleId } from "../autocompletes/moduleId.form-element";
import { modules } from "../selects/modules.form-element";

export const modulesAndVerbs: IFormArray = {
    type: "array",
    id: "modulesAndVerbs",
    title: "Permissões por módulo",
    elements: [
        moduleId,
        modules
    ]
};