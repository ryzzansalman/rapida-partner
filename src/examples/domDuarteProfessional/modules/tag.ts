import type { IModule } from "../../../interfaces/project.interface";
import { tagForm } from "../components/tag.form";
import { tagList } from "../components/tag.list";

export const tagModule: IModule = {
  id: "tagModule",
  title: "Gerenciamento de tags",
  icon: "tag",
  components: [
    tagForm,
    tagList
  ]
};