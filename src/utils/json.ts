import * as fs from "fs";
import Ajv from "ajv";
import { schemasPath } from "./path";

const ajv = new Ajv({ strict: false });
const addedSchemas = new Set<string>(); // Keep track of added schemas

const getJsonFile = (filePath: string): any => {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error: any) {
    console.error(`Error reading file from path: ${filePath}`, error);
    return null;
  }
};

const validateProjectJson = (jsonProjectInstance: any, jsonSchemaName: string): boolean => {
  try {
    const jsonSchemaInstance = getJsonFile(`${schemasPath}/${jsonSchemaName}.schema.json`);

    if (!jsonSchemaInstance) {
      throw new Error(`Schema ${jsonSchemaName} not found`);
    }

    // Load refs
    const refs: string[] = [];
    const jsonProjectObject = JSON.parse(jsonProjectInstance);

    groupJsonSchemaRefs(jsonSchemaInstance, refs);

    if (refs.length > 0) {
      addRefsToSchema(refs);
    }

    const validate = ajv.compile(jsonSchemaInstance);
    const valid = validate(jsonProjectObject);

    if (!valid) {
      console.info(validate.errors);
      return false;
    }

    console.info("Project JSON is valid");
    
    return true;
  } catch (error: any) {
    console.error(error);
    return false;
  }
};

const groupJsonSchemaRefs = (obj: any, refs: string[]): void => {
  if (typeof obj === 'object' && obj !== null) {
    if (Array.isArray(obj)) {
      for (const item of obj) {
        groupJsonSchemaRefs(item, refs);
      }
    } else {
      for (const key in obj) {
        if (key === "$ref" && typeof obj[key] === 'string') {
          refs.push(obj[key]);
        } else {
          groupJsonSchemaRefs(obj[key], refs);
        }
      }
    }
  }
};

const addRefsToSchema = (refs: string[]) => {
  const newRefs: string[] = [];

  refs.forEach((ref) => {
    const refContent = getJsonFile(`${schemasPath}/${ref}`);
    
    if (!addedSchemas.has(ref)) {
      groupJsonSchemaRefs(refContent, newRefs);
      
      if (refContent) {
        ajv.addSchema(refContent, refContent["$id"]);
        addedSchemas.add(ref); // Add schema to the set
      } else {
        throw new Error(`Referenced schema ${ref} not found`);
      }
    }
  });

  if (newRefs.length > 0) {
    addRefsToSchema(newRefs);
  }
};

export { getJsonFile, validateProjectJson };
