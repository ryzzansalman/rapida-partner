import chp from "child_process";
import fs from "fs";

/**
 * Writes the content of a string to a file, overwriting the file if it already exists.
 *
 * @param {string} stringToFile - The string content to be written to the file.
 * @param {string} filePath - The path of the file to be written.
 */
export const writeFile = (stringToFile: string, filePath: string) => {
  try {
    fs.rmSync(filePath);
    fs.writeFileSync(filePath, stringToFile);
  } catch (error) {
    fs.writeFileSync(filePath, stringToFile);
  }
};

/**
 * Downloads a file from the specified URL to the provided folder path.
 *
 * @param {string} url - The URL of the file to be downloaded.
 * @param {string} folderPath - The destination folder path where the downloaded file will be saved.
 * @returns {*} - The result of the download operation.
 */
export const download = (url: string, folderPath: string) => {
  try {
    const result = chp.execSync(`wget ${url}`, { cwd: folderPath });
    return result;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Modifies the contents of a specified file by adding a string at a specified place.
 *
 * @param {string} stringToAdd - The string to be added to the file.
 * @param {string} filePath - The path to the file that is to be modified.
 * @param {string} placeToAddString - A substring after which `stringToAdd` will be added. 
 *                                    The function inserts `stringToAdd` immediately after the first occurrence of this substring.
 * @returns {void}
 * 
 * This function reads the content of the file located at `filePath`. If the file does not already contain `stringToAdd`,
 * it will insert `stringToAdd` immediately after the first occurrence of `placeToAddString`. If `stringToAdd` already exists
 * in the file, the function logs a message indicating this and does not modify the file.
 * 
 * @example
 * // To add a new import statement in a JavaScript file
 * addStringToFile("import newModule from 'new-module';\n", './path/to/file.js', "// Import statements\n");
 */
export const addStringToFile = (stringToAdd: string, filePath: string, placeToAddString: string) => {
  try {
    const fileContent = fs.readFileSync(filePath).toString();
    const fileContentToCompare = fileContent.replace(/[\r\n\s]+/g, ' ').trim();
    const stringToAddToCompare = stringToAdd.replace(/[\r\n\s]+/g, ' ').trim();

    if (!fileContentToCompare.includes(stringToAddToCompare)) {
      console.info(`Adding code to ${filePath}.`);
      const fileChanged = fileContent.replace(placeToAddString, `${placeToAddString}${stringToAdd}`);
      writeFile(fileChanged, filePath);
    } else {
      console.info(`Code that would be added already exists in ${filePath}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export const addStringToFileForced = (stringToAdd: string, filePath: string, placeToAddString: string) => {
  try {
    const fileContent = fs.readFileSync(filePath).toString();

    console.info(`Adding code to ${filePath}.`);
    const fileChanged = fileContent.replace(placeToAddString, `${placeToAddString}${stringToAdd}`);
    writeFile(fileChanged, filePath);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Reads a file from the specified file path, checks if the specified string to be changed exists in the file,
 * and replaces it with the new string if it exists. If the string to be changed does not exist in the file,
 * it logs a message indicating that the change was not made.
 *
 * @param {string} stringToChange - The string to replace the existing string with.
 * @param {string} filePath - The path to the file to be modified.
 * @param {string} stringToBeChanged - The string to be replaced.
 */
export const replaceStringInFile = (stringToChange: string, filePath: string, stringToBeChanged: string) => {
  try {
    const fileContent = fs.readFileSync(filePath).toString();
    const fileContentToCompare = fileContent.replace(/[\r\n\s]+/g, ' ').trim();
    const stringToChangeToCompare = stringToChange.replace(/[\r\n\s]+/g, ' ').trim();

    if (!fileContentToCompare.includes(stringToChangeToCompare)) {
      console.info(`Changing code in ${filePath}.`);
      const fileChanged = fileContent.replace(stringToBeChanged.replace(/[\r\n\s]+/g, ' ').trim(), `${stringToChange}`);

      writeFile(fileChanged, filePath);
    } else {
      console.info(`Code that would be changed already exists in ${filePath}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export const replaceStringInFileForced = (stringToChange: string, filePath: string, stringToBeChanged: string) => {
  try {
    const fileContent = fs.readFileSync(filePath).toString();
    const fileContentToCompare = fileContent.replace(/[\r\n\s]+/g, ' ').trim();
    const stringToChangeToCompare = stringToChange.replace(/[\r\n\s]+/g, ' ').trim();

    if (!fileContentToCompare.includes(stringToChangeToCompare) || stringToChange === "") {
      console.info(`Changing code in ${filePath}.`);
      const fileChanged = fileContent.replace(stringToBeChanged.replace(/[\r\n\s]+/g, ' ').trim(), `${stringToChange}`);
      writeFile(fileChanged, filePath);
    } else {
      console.info(`Code that would be changed already exists in ${filePath}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeStringInFile = (stringToBeRemoved: string, filePath: string) => {
  try {
    const fileContent = fs.readFileSync(filePath).toString();

    console.info(`Removing code from ${filePath}.`);
    const fileChanged = fileContent.replace(stringToBeRemoved, "");
    writeFile(fileChanged, filePath);

  } catch (error) {
    console.error(error);
  }
};