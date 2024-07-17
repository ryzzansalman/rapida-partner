import { tsProjectToJsonProject } from './src/controllers/ts_project_to_json_project';
import { validateProjectJson } from './src/utils/json';

import { animation } from './src/examples/animation';

/**
 * ts to json
 */
const tsToJson = tsProjectToJsonProject(animation);

/**
 * validate project json schema
 **/
validateProjectJson(tsToJson, 'project');