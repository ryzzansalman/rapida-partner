import type { IFormArray } from "./form-array.interface";
import type { IFormAutocomplete } from "./form-autocomplete.interface";
import type { IFormButton } from "./form-button.interface";
import type { IFormFieldset } from "./form-fieldset.interface";
import type { IFormFile } from "./form-file.interface";
import type { IFormInput } from "./form-input.interface";
import type { IFormSelect } from "./form-select.interface";
import type { IFormTab } from "./form-tab.interface";
import type { IList } from "./list.interface";

export interface IProject {
  id: string;
  title: string;
  description: string;
  businessPlan?: IBusinessPLan;
  businessRules?: IBusinessRule[];
  flow: "autentikigo" // Meaning it will have a login as main screen and a register component that will be available to non-authenticated users
  | "invito" // Meaning it will have a login as main screen and new user are only allowed to access the system if they are invited by an authorized user
  | "permeson" // Meaning it will have a login as main screen, a register component that will be available to non-authenticated users and a permission manager component for users access another users workspace
  | "komerco" // Meaning it will have a products component to e-commerce as main screen and a cart component that will be available to non-authenticated users, but they are only allowed to pay if they are authenticated
  | "labotablo" // Meaning the flow of invito added to choosing a workspace (according to how may workspaces the user is allowed to access);
  frontend?: IFrontend;
  backend?: IBackend;
  externalModules?: IExternalModules;
  modules?: IModule[];
  forms?: IForm[];
  lists?: IList[];
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

export interface IBusinessRule {
  rule: {
    description: string;
    subrules?: {
      description: string;
    }[];
  };
}

export interface IExternalModules {
  modules:[{
    id: "kliento";
    icon: "support_agent";
    alternativeIcon?: string;
  } |
  {
    id: "pago";
    icon: "credit-card";
    alternativeIcon?: string;
  } |
  {
    id: "produkto";
    icon: "qr_code_2";
    alternativeIcon?: string;
  } |
  {
    id: "projekto";
    icon: "tactic";
    alternativeIcon?: string;
  } |
  {
    id: "uzanto";
    icon: "face";
    alternativeIcon?: string;
  }]
}

export interface IForm {
  id: string;
  title: string;
  elements: IFormElement[];
  icon?: string;
  guards?: "isAuthenticated" | "isAuthorized";
  businessRules?: IBusinessRule[];
}

export interface IModule {
  id: string;
  title: string;
  icon: string;
  elements: IModuleElement[];
}

interface IModuleElement {
  id: string;
  type: "forms" | "lists" | "displays" | "charts";
}

export type IFormElement = IFormInput | IFormSelect | IFormAutocomplete | IFormArray | IFormTab | IFormFieldset | IFormButton | IFormFile;
