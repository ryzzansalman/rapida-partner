import { tsProjectToJsonProject } from './src/controllers/ts_project_to_json_project';
import { validateProjectJson } from './src/utils/json';

import { mezuri } from './src/examples/mezuri/mezuri';

/**
 * ts to json
 */
const tsToJson = tsProjectToJsonProject(mezuri);

/**
 * validate project json schema
 **/
validateProjectJson(tsToJson, 'project');