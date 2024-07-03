import dotenv from 'dotenv';
dotenv.config();

const rootPath = process.env.ROOT_PATH;
const terminalPassword = process.env.TERMINAL_PASSWORD;

export { rootPath, terminalPassword };
