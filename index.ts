import { tsProjectToJsonProject } from './src/controllers/ts_project_to_json_project';
import { validateProjectJson } from './src/utils/json';

import { kunlatekBackoffice } from './src/examples/kunlatekBackoffice';

/**
 * ts to json
 */
const tsToJson = tsProjectToJsonProject(kunlatekBackoffice);

/**
 * validate project json schema
 **/
validateProjectJson(tsToJson, 'project');