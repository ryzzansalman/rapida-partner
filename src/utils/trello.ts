import dotenv from 'dotenv';
import { trelloApiKey, trelloToken } from './env';
dotenv.config();

interface IScenario {
    title: string;
    description: string;
}

interface INarrative {
    title: string;
    description: string;
    scenarios: IScenario[];
    e2e: {
        cypress: string;
    };
}

interface IBddData {
    bddTitle: string;
    narratives: INarrative[];
}

const createTrelloProject = async (bddData: IBddData) => {
    try {
        // Step 1: Create Board
        const boardResponse = await fetch(`https://api.trello.com/1/boards/?key=${trelloApiKey}&token=${trelloToken}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: bddData.bddTitle
            })
        });
        
        const boardData = await boardResponse.json();
        const boardId = boardData.id;

        // Step 2: Get and Archive Existing Lists
        const listsResponse = await fetch(`https://api.trello.com/1/boards/${boardId}/lists?key=${trelloApiKey}&token=${trelloToken}`);
        const listsData = await listsResponse.json();

        for (const list of listsData) {
            await fetch(`https://api.trello.com/1/lists/${list.id}/closed?key=${trelloApiKey}&token=${trelloToken}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    value: true
                })
            });
        }

        // Step 3: Create Lists
        const lists = ['Done', 'In Progress', 'To Do'];
        const listIds: { [key: string]: string } = {};

        for (const list of lists) {
            const listResponse = await fetch(`https://api.trello.com/1/lists?key=${trelloApiKey}&token=${trelloToken}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: list,
                    idBoard: boardId
                })
            });

            const listData = await listResponse.json();
            listIds[list] = listData.id;
        }

        // Step 4: Create Cards in "To Do" list and add checklists
        for (const narrative of bddData.narratives) {
            const cardDescription = `${narrative.description}\n\nCypress Code:\n${narrative.e2e.cypress}`;
            const cardResponse = await fetch(`https://api.trello.com/1/cards?key=${trelloApiKey}&token=${trelloToken}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: narrative.title,
                    desc: `${narrative.description}\n${cardDescription}`,
                    idList: listIds['To Do']
                })
            });

            const cardData = await cardResponse.json();
            const cardId = cardData.id;

            // Create Checklist
            const checklistResponse = await fetch(`https://api.trello.com/1/checklists?key=${trelloApiKey}&token=${trelloToken}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idCard: cardId,
                    name: 'Cenários'
                })
            });

            const checklistData = await checklistResponse.json();
            const checklistId = checklistData.id;

            // Add checklist items
            for (const scenario of narrative.scenarios) {
                await fetch(`https://api.trello.com/1/checklists/${checklistId}/checkItems?key=${trelloApiKey}&token=${trelloToken}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: scenario.description
                    })
                });
            }
        }

        console.info(`Board '${bddData.bddTitle}' created successfully!`);
    } catch (error) {
        console.error('Error creating board or lists:', error);
    }
};

export {
    createTrelloProject
}

export type {
    IBddData
}