import { tsProjectToJsonProject } from './src/controllers/ts_project_to_json_project';
import { validateProjectJson } from './src/utils/json';

import { mezuriArchitect } from './src/examples/mezuriArchitect/mezuriArchitect';

/**
 * ts to json
 */
const tsToJson = tsProjectToJsonProject(mezuriArchitect);

/**
 * validate project json schema
 **/
validateProjectJson(tsToJson, 'project');