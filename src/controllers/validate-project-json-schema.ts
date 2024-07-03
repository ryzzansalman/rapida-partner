import type { IProject } from "../interfaces/project.interface";
import { validateProjectJson } from "../utils/json";
import { getProjectJson } from "../utils/rapida-project";

const validateProjectJsonSchema = (projectFileName: string) => {
  const jsonProject: IProject | undefined = getProjectJson(projectFileName);
  
  return validateProjectJson(jsonProject, "project");
};

export { validateProjectJsonSchema };
