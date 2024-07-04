import * as fs from "fs";
import { examplesPath } from "../utils/path";

import type { IProject } from "../interfaces/project.interface";
import { writeFile } from "../utils/file";
import { rootPath } from "../utils/env";
var objectToJson = require("object-to-json");
// import type { IProject } from "../interfaces/project.interface";

const tsProjectToJsonProject = (project: IProject) => {
    const json = JSON.stringify(project);

    writeFile(json, `${rootPath}/rapidaObject.json`);

    return json;
}

export {
    tsProjectToJsonProject
}