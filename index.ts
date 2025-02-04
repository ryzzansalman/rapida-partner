import { tsProjectToJsonProject } from './src/controllers/ts_project_to_json_project';
import { validateProjectJson } from './src/utils/json';

import { mumiArtist } from './src/examples/mumiArtist/mumiArtist';

/**
 * ts to json
 */
const tsToJson = tsProjectToJsonProject(mumiArtist);

/**
 * validate project json schema
 **/
validateProjectJson(tsToJson, 'project');