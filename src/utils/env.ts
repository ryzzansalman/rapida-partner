import dotenv from 'dotenv';
dotenv.config();

const rootPath = process.env.ROOT_PATH;
const terminalPassword = process.env.TERMINAL_PASSWORD;
const trelloApiKey = process.env.TRELLO_API_KEY;
const trelloToken = process.env.TRELLO_TOKEN;

console.log('ROOT_PATH:', rootPath);
console.log('TERMINAL_PASSWORD:', terminalPassword);
console.log('TRELLO_API_KEY:', trelloApiKey);
console.log('TRELLO_TOKEN:', trelloToken);


export { rootPath, terminalPassword, trelloApiKey, trelloToken };
