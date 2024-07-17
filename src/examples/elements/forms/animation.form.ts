import type { IForm } from "../../../interfaces/project.interface";
import { animationTabs } from "./tabs/animationTabs.form-element";

export const animationForm: IForm = {
    id: "animationForm",
    title: "Componente de animação",
    guards: "isAuthorized",
    elements: [
        animationTabs
    ]
};