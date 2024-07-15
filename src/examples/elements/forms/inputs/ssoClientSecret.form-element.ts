import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const ssoClientSecret: IFormInput = {
  type: "input",
  name: "ssoClientSecret",
  dataType: "text",
  label: "Client secret do SSO",
};