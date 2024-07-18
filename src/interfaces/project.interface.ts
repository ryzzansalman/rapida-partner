import type { IFormArray } from "./form-array.interface";
import type { IFormAutocomplete } from "./form-autocomplete.interface";
import type { IFormButton } from "./form-button.interface";
import type { IFormFieldset } from "./form-fieldset.interface";
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
  flow: "autentikigo" // Meaning it will have a login as main screen
  | "permeson" // Meaning it will have a login as main screen and a permission manager component which authorized users will be able to access
  | "komerco" // Meaning it will have a products component to e-commerce as main screen and a cart component that will be available to non-authenticated users, but they are only allowed to pay if they are authenticated
  frontend?: IFrontend;
  backend?: IBackend;
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

export interface IForm {
  id: string;
  title: string;
  elements: IFormElement[];
  icon?: string;
  guards?: "isAuthenticated" | "isAuthorized";
  businessRules?: IBusinessRule[];
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

export type IFormElement = IFormInput | IFormSelect | IFormAutocomplete | IFormArray | IFormTab | IFormFieldset | IFormButton;
