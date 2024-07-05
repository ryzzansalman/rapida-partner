import { createTrelloProject, type IBddData } from "../utils/trello";


// Example usage
const bddData: IBddData = {
    "bddTitle": "OFM Quickstart",
    "narratives": [
      {
        "title": "Gerenciamento de Usuários",
        "description": "Cenários para o gerenciamento de usuários no módulo OFM Quickstart.",
        "scenarios": [
          {
            "title": "Cadastro de novo usuário",
            "description": "Como administrador, desejo cadastrar um novo usuário no sistema para que ele tenha acesso às funcionalidades da plataforma."
          },
          {
            "title": "Edição de usuário",
            "description": "Como administrador, desejo editar as informações de um usuário existente para manter os dados atualizados."
          },
          {
            "title": "Exclusão de usuário",
            "description": "Como administrador, desejo excluir um usuário do sistema para remover seu acesso às funcionalidades da plataforma."
          },
          {
            "title": "Erro ao cadastrar usuário sem email",
            "description": "Como administrador, ao tentar cadastrar um usuário sem fornecer um email válido, devo receber uma mensagem de erro informando a necessidade de um email."
          },
          {
            "title": "Erro ao editar usuário com dados inválidos",
            "description": "Como administrador, ao tentar editar um usuário com dados inválidos, devo receber uma mensagem de erro indicando os campos incorretos."
          }
        ],
        "e2e": {
          "cypress": "describe('User Management', () => {\n  it('should create a new user', () => {\n    cy.visit('/user-form');\n    cy.get('input[name=\"name\"]').type('Novo Usuário');\n    cy.get('input[name=\"username\"]').type('novousuario');\n    cy.get('input[name=\"invitationEmail\"]').type('novo@usuario.com');\n    cy.get('button[type=\"submit\"]').click();\n    cy.contains('Usuário criado com sucesso').should('be.visible');\n  });\n\n  it('should edit an existing user', () => {\n    cy.visit('/user-list');\n    cy.get('button[aria-label=\"Editar\"]').first().click();\n    cy.get('input[name=\"name\"]').clear().type('Usuário Editado');\n    cy.get('button[type=\"submit\"]').click();\n    cy.contains('Usuário atualizado com sucesso').should('be.visible');\n  });\n\n  it('should delete a user', () => {\n    cy.visit('/user-list');\n    cy.get('button[aria-label=\"Excluir\"]').first().click();\n    cy.contains('Confirmar exclusão de usuário?').should('be.visible');\n    cy.get('button[aria-label=\"Confirmar\"]').click();\n    cy.contains('Usuário excluído com sucesso').should('be.visible');\n  });\n\n  it('should show error when creating user without email', () => {\n    cy.visit('/user-form');\n    cy.get('input[name=\"name\"]').type('Usuário Sem Email');\n    cy.get('input[name=\"username\"]').type('usuariosememail');\n    cy.get('button[type=\"submit\"]').click();\n    cy.contains('Email é obrigatório').should('be.visible');\n  });\n\n  it('should show error when editing user with invalid data', () => {\n    cy.visit('/user-list');\n    cy.get('button[aria-label=\"Editar\"]').first().click();\n    cy.get('input[name=\"invitationEmail\"]').clear().type('invalido');\n    cy.get('button[type=\"submit\"]').click();\n    cy.contains('Email inválido').should('be.visible');\n  });\n});"
        }
      },
      {
        "title": "Gerenciamento de Grupos de Permissões",
        "description": "Cenários para o gerenciamento de grupos de permissões no módulo OFM Quickstart.",
        "scenarios": [
          {
            "title": "Cadastro de novo grupo de permissão",
            "description": "Como administrador, desejo cadastrar um novo grupo de permissão no sistema para que possa gerenciar permissões de acesso de forma centralizada."
          },
          {
            "title": "Edição de grupo de permissão",
            "description": "Como administrador, desejo editar as informações de um grupo de permissão existente para manter os dados atualizados."
          },
          {
            "title": "Exclusão de grupo de permissão",
            "description": "Como administrador, desejo excluir um grupo de permissão do sistema para remover suas configurações de acesso."
          },
          {
            "title": "Erro ao cadastrar grupo de permissão sem nome",
            "description": "Como administrador, ao tentar cadastrar um grupo de permissão sem fornecer um nome válido, devo receber uma mensagem de erro informando a necessidade de um nome."
          },
          {
            "title": "Erro ao editar grupo de permissão com dados inválidos",
            "description": "Como administrador, ao tentar editar um grupo de permissão com dados inválidos, devo receber uma mensagem de erro indicando os campos incorretos."
          }
        ],
        "e2e": {
          "cypress": "describe('Group Permission Management', () => {\n  it('should create a new permission group', () => {\n    cy.visit('/permission-group-form');\n    cy.get('input[name=\"name\"]').type('Novo Grupo');\n    cy.get('button[type=\"submit\"]').click();\n    cy.contains('Grupo de permissão criado com sucesso').should('be.visible');\n  });\n\n  it('should edit an existing permission group', () => {\n    cy.visit('/permission-group-list');\n    cy.get('button[aria-label=\"Editar\"]').first().click();\n    cy.get('input[name=\"name\"]').clear().type('Grupo Editado');\n    cy.get('button[type=\"submit\"]').click();\n    cy.contains('Grupo de permissão atualizado com sucesso').should('be.visible');\n  });\n\n  it('should delete a permission group', () => {\n    cy.visit('/permission-group-list');\n    cy.get('button[aria-label=\"Excluir\"]').first().click();\n    cy.contains('Confirmar exclusão de grupo de permissão?').should('be.visible');\n    cy.get('button[aria-label=\"Confirmar\"]').click();\n    cy.contains('Grupo de permissão excluído com sucesso').should('be.visible');\n  });\n\n  it('should show error when creating permission group without name', () => {\n    cy.visit('/permission-group-form');\n    cy.get('button[type=\"submit\"]').click();\n    cy.contains('Nome é obrigatório').should('be.visible');\n  });\n\n  it('should show error when editing permission group with invalid data', () => {\n    cy.visit('/permission-group-list');\n    cy.get('button[aria-label=\"Editar\"]').first().click();\n    cy.get('input[name=\"name\"]').clear().type('');\n    cy.get('button[type=\"submit\"]').click();\n    cy.contains('Nome é obrigatório').should('be.visible');\n  });\n});"
        }
      }
    ]
  };

createTrelloProject(bddData);