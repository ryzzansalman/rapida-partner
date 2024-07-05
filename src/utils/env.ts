import dotenv from 'dotenv';
dotenv.config();

const rootPath = process.env.ROOT_PATH;
const terminalPassword = process.env.TERMINAL_PASSWORD;
const trelloApiKey = process.env.TRELLO_API_KEY;
const trelloToken = process.env.TRELLO_TOKEN;

export { rootPath, terminalPassword, trelloApiKey, trelloToken };
