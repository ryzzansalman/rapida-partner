import type { IModule } from "../../../interfaces/project.interface";
import { customerCompanyForm } from "../components/customerCompany.form";
import { customerCompanyList } from "../components/customerCompany.list";
import { customerPersonForm } from "../components/customerPerson.form";
import { customerPersonList } from "../components/customerPerson.list";

export const customerModule: IModule = {
  id: "customerModule",
  title: "Clientes",
  icon: "groups",
  components: [
    customerPersonForm,
    customerPersonList,
    customerCompanyForm,
    customerCompanyList,
  ]
};