export interface IYamlTemplateSkeleton {
  controller: {
    skeleton: string;
  },
  template: {
    skeleton: string;
    rapidaReplacement1Label: string;
    rapidaReplacement2Label: string;
    rapidaReplacement1Placeholder: string;
    rapidaReplacement2Placeholder: string;
    rapidaReplacement1Tooltip: string;
    rapidaReplacement2Tooltip: string;
    rapidaReplacement1Autofocus: string;
    rapidaReplacement2Autofocus: string;
    rapidaReplacement1Disabled: string;
    rapidaReplacement2Disabled: string;
    rapidaReplacement1Required: string;
    rapidaReplacement2Required: string;
    rapidaReplacement1Unique: string;
    rapidaReplacement2Unique: string;
    rapidaReplacement1Maxlength: string;
    rapidaReplacement2Maxlength: string;
    rapidaReplacement1Minlength: string;
    rapidaReplacement2Minlength: string;
    rapidaReplacement1Conditions: string;
    rapidaReplacement2Conditions: string;
  },
  style: {
    skeleton: string;
  }
}

export interface IYamlStyleSkeleton {
  skeleton: string;
}