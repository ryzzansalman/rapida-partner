import type { IModule } from "../../../interfaces/project.interface";
import { companyForm } from "../components/company.form";
import { companyList } from "../components/company.list";
import { personForm } from "../components/person.form";
import { personList } from "../components/person.list";

export const professionalModule: IModule = {
  id: "professionalModule",
  title: "Profissionais",
  icon: "palette",
  components: [
    personList,
    personForm,
    companyList,
    companyForm,
  ]
};
