export interface IBackendFrameworkStructure {
  projectFolderCase: "kebab" | "snake" | "pascal" | "camel";
  controllerFileNomenclature: IFileNomenclature;
  modelFileNomenclature: IFileNomenclature;
  moduleFileNomenclature: IFileNomenclature;
  repositoryFileNomenclature: IFileNomenclature;
  componentPath: string;
  controllerPath: string;
  modelPath: string;
  modulePath: string;
  repositoryPath: string;
  controllerFile: IFileDetails;
  modelFile: IFileDetails;
  moduleFile: IFileDetails;
  repositoryFile: IFileDetails;
  uniqueFile: IFileDetails;
  sourcePath: string;
  hasComponentSpecificFolder: boolean;
  dependencies: IDependencies;
}

interface IFileNomenclature {
  case: "kebab" | "snake" | "pascal" | "camel";
  keyword?: string;
}

interface IFileDetails {
  hasControllerFile?: boolean;
  controllerFileExtension?: string;
  hasModelFile?: boolean;
  modelFileExtension?: string;
  hasModuleFile?: boolean;
  moduleFileExtension?: string;
  hasRepositoryFile?: boolean;
  repositoryFileExtension?: string;
  hasUniqueFile?: boolean;
  uniqueFileExtension?: string;
}

interface IDependencies {
  array?: string[];
  autocomplete?: string[];
  wysiwyg?: string[];
}
