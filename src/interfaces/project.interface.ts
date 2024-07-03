import type { IFormArray } from "./form-array.interface";
import type { IFormAutocomplete } from "./form-autocomplete.interface";
import type { IFormInput } from "./form-input.interface";
import type { IFormSelect } from "./form-select.interface";
import type { FormTab } from "./form-tab.interface";

export interface IProject {
  id: string;
  title: string;
  description: string;
  businessPlan?: IBusinessPLan;
  frontend?: IFrontend;
  backend?: IBackend;
  modules?: IModule[];
  forms?: IForm[];
  lists?: any;
  displays?: any;
  charts?: any;
}

interface IFrontend {
  framework: "angular" | "flutter" | "react" | "svelte" | "vue";
  uiKit: "antdesign" | "bootstrap" | "material" | "flowbite";
}

interface IBackend {
  framework: "functions" | "lambda" | "laravel" | "nest";
  database: "mariadb" | "mongodb" | "oracle" | "postgresql";
}

interface IBusinessPLan {
  businessValue: string,
  targetMarket: string,
  benchmarkings: string,
  legalIssues: string,
  ethicalIssues: string,
  afterSales: string
}

export interface IForm {
  id: string;
  title: string;
  elements: IFormElement[];
  icon?: string;
}

interface IModule {
  id: string;
  title: string;
  icon: string;
  elements: IModuleElement[];
}

interface IModuleElement {
  id: string;
  type: "forms" | "lists" | "displays" | "charts";
}

export type IFormElement = IFormInput | IFormSelect | IFormAutocomplete | IFormArray | FormTab;