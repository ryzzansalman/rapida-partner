import type { IProject } from "../interfaces/project.interface";
import { getJsonFile } from "./json";
import { modelsPath } from "./path";

const getProjectJson = (projectName: string) => {
  try {
    const jsonProject: IProject = getJsonFile(
      `${modelsPath}/apps/${projectName}`
    );

    return jsonProject;
  } catch (error) {
    console.error(error);
  }
};

export { getProjectJson };
