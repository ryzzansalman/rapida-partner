export interface IFrontendFrameworkStructure {
  projectFolderCase: "kebab" | "snake" | "pascal" | "camel";
  moduleFolder?: IFolder;
  componentFolder?: IFolder;
  moduleFile?: IFile;
  componentFile: IFile;
  templateFile?: IFile;
  controllerFile?: IFile;
  serviceFile?: IFile;
  styleFile?: IFile;
  dependencies?: IDependencies;
}

interface IFolder {
  case: "kebab" | "snake" | "pascal" | "camel";
  folderBasePath: string;
  hasFolderWithItsName?: boolean;
}

interface IFile {
  case: "kebab" | "snake" | "pascal" | "camel";
  folderBasePath: string;
  fileExtension: string;
  keyword?: string;
}

interface IDependencies {
  array?: IDependenciesPackages;
  autocomplete?: IDependenciesPackages;
  wysiwyg?: IDependenciesPackages;
}

interface IDependenciesPackages {
  angular?: string[];
  flutter?: string[];
  react?: string[];
  svelte?: string[];
  vue?: string[];
}
