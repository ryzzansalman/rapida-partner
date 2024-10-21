import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { episodes } from "../arrays/episodes.form-element";
import { charactersOnSeason } from "../autocompletes/charactersOnSeason.form-element";
import { countryId } from "../autocompletes/countryId.form-element";
import { finishDate } from "../inputs/finishDate.form-element";
import { animationName } from "../inputs/names/animationName.form-element";
import { folderPicture } from "../inputs/pictures/folderPicture.form-element";
import { seasonBrief } from "../inputs/seasonBrief.form-element";
import { startDate } from "../inputs/startDate.form-element";

const newAnimationName = { ...animationName, isRequired: true, isUnique: true };
const newStartDate = { ...startDate, isRequired: true };
const newCountryId = { ...countryId, isRequired: true };

export const animationTabs: IFormTab = {
    type: "tab",
    id: "animationTabs",
    tabs: [
        {
            id: "animationTab",
            title: "Dados principais",
            elements: [
                newAnimationName,
                newCountryId,
                folderPicture,
                newStartDate,
                finishDate,
            ]
        },
        {
            id: "seasonAndEpisodeTab",
            title: "Temporadas e episódios",
            elements: [
                {
                    type: "array",
                    id: "seasons",
                    title: "Temporada",
                    elements: [
                        seasonBrief,
                        charactersOnSeason,
                        episodes,
                    ]
                }
            ]
        }
    ]
};