import type { IProject } from "../interfaces/project.interface";
import { writeFile } from "../utils/file";
import { rootPath } from "../utils/env";

const tsProjectToJsonProject = (project: IProject) => {console.log(project);
    const json = JSON.stringify(project);

    writeFile(json, `${rootPath}/rapidaObject.json`);

    console.info("Project written to file.");

    return json;
}

export {
    tsProjectToJsonProject
}