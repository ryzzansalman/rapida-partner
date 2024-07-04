import { createTrelloProject, type IBddData } from "../src/utils/trello";


// Example usage
const bddData: IBddData = {
    bddTitle: 'Example Board Title',
    narratives: [
        {
            title: 'Narrative 1',
            description: 'Description for Narrative 1',
            scenarios: [
                { title: 'Scenario 1', description: 'Description for Scenario 1' },
                { title: 'Scenario 2', description: 'Description for Scenario 2' }
            ],
            e2e: { cypress: 'cypress code 1' }
        },
        {
            title: 'Narrative 2',
            description: 'Description for Narrative 2',
            scenarios: [
                { title: 'Scenario 3', description: 'Description for Scenario 3' },
                { title: 'Scenario 4', description: 'Description for Scenario 4' }
            ],
            e2e: { cypress: 'cypress code 2' }
        }
    ]
};

createTrelloProject(bddData);