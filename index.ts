import { tsProjectToJsonProject } from './src/controllers/ts_project_to_json_project';
import { validateProjectJson } from './src/utils/json';

import { ofmQuickstart } from './src/examples/ofmQuickstart';

/**
 * ts to json
 */
const tsToJson = tsProjectToJsonProject(ofmQuickstart);

/**
 * validate project json schema
 **/
validateProjectJson(tsToJson, 'project');