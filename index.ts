import { tsProjectToJsonProject } from './src/controllers/ts_project_to_json_project';
import { validateProjectJson } from './src/utils/json';

import { ofmBackoffice } from './src/examples/ofmBackoffice';

/**
 * ts to json
 */
const tsToJson = tsProjectToJsonProject(ofmBackoffice);

/**
 * validate project json schema
 **/
validateProjectJson(tsToJson, 'project');