import type { IModule } from "../../../interfaces/project.interface";
import { artistPersonForm } from "../components/artistPerson.form";

export const artistModule: IModule = {
  id: "artistModule",
  title: "Artistas",
  icon: "palette",
  components: [
    artistPersonForm
  ]
};
