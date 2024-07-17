import type { IFormArray } from "../../../../interfaces/form-array.interface";
import { episodeBrief } from "../inputs/briefs/episodeBrief-form-element";
import { episodePicture } from "../inputs/pictures/episodePicture.form-element";
import { episodeTitle } from "../inputs/titles/episodeTitle.form-element";

const newEpisodeTitle = { ...episodeTitle, isRequired: true };
const newEpisodeBrief = { ...episodeBrief, isRequired: true };

export const episodes: IFormArray = {
    type: "array",
    id: "episodes",
    title: "Episódio",
    elements: [
        newEpisodeTitle,
        newEpisodeBrief,
        episodePicture,
    ]
};