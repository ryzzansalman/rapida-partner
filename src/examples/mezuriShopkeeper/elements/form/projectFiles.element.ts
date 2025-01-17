import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { projectFile } from "./projectFile.element";
import { projectFileDescription } from "./projectFileDescription.element";
import { projectFileName } from "./projectFileName.element";

export const projectFiles: IFormArray = {
  type: "array",
  id: "projectFiles",
  title: "Arquivo do projeto",
  elements: [
    {...projectFileName, isRequired: true},
    projectFileDescription,
    {...projectFile, isRequired: true}
  ],
};