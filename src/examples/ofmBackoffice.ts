import { type IProject } from '../interfaces/project.interface'
import { ofmBackofficeCompanyForm } from './elements/forms/ofmBackofficeCompany.form';
import { ofmBackofficeCompanyList } from './elements/lists/ofmBackofficeCompany.list';
import { userInvitationForm } from './elements/forms/userInvitation.form';
import { userInvitationList } from './elements/lists/userInvitation.list';
import { applicationForm } from './elements/forms/application.form';
import { applicationList } from './elements/lists/application.list';
import { ssoUserForm } from './elements/forms/ssoUserForm.form';
import { ssoUserList } from './elements/lists/ssoUser.list';

export const ofmBackoffice: IProject = {
  id: "ofmBackoffice",
  description: `O projeto OFM Backoffice tem por objetivo gerenciar módulos que sirvam como base de dados e informações relacionados à Plataforma OFM, como, por exemplo, o cadastro de aplicações e módulos que servem de base para a viabilidade do sistema de permissões que estará presente nos produtos OFM, o controle de usuários dos produtos OFM e a interface de auditoria dos sistemas. Ao abordar desafios críticos como a complexidade na administração de múltiplas aplicações e a necessidade de um controle refinado de acessos, o OFM Backoffice garante eficiência operacional, segurança reforçada e conformidade com regulamentos de proteção de dados.

Investir no OFM Backoffice é apostar em uma plataforma robusta que não apenas otimiza a gestão interna, mas também potencializa a segurança e a auditoria de sistemas, fatores essenciais para empresas modernas que lidam com informações sensíveis.`,
  title: "OFM Backoffice",
  flow: "permeson",
  businessPlan: {
    businessValue: `___
### Gestão Centralizada de Aplicações e Módulos 
Empresas frequentemente enfrentam dificuldades na gestão de múltiplas aplicações e módulos que compõem seus sistemas. A falta de um ponto centralizado para cadastro e gerenciamento dessas aplicações pode resultar em inconsistências, redundâncias e falta de visibilidade sobre o estado das diversas componentes do sistema.

### Viabilidade do Sistema de Permissões
Sistemas complexos exigem um controle refinado de permissões de usuários para garantir segurança e conformidade. Sem uma base de dados unificada e uma interface de gestão eficiente, administrar quem tem acesso a quais recursos se torna uma tarefa monumental e propensa a erros, aumentando o risco de violações de segurança.

### Controle de Usuários
Manter um controle eficaz dos usuários que acessam os diversos produtos OFM é essencial para assegurar que apenas indivíduos autorizados possam utilizar determinadas funcionalidades. O OFM Backoffice proporciona uma solução centralizada para gerenciar perfis de usuários, acessos e roles, melhorando a segurança e facilitando a administração de usuários.

### Interface de Auditoria 
Em ambientes corporativos, a capacidade de auditar atividades dos usuários é crucial para identificar comportamentos anômalos, investigar incidentes e garantir conformidade com regulamentos internos e externos. A ausência de uma interface de auditoria robusta dificulta o monitoramento e a rastreabilidade das ações dos usuários, limitando a capacidade de reação a incidentes de segurança ou falhas operacionais.`,
    targetMarket: `___
### Administradores de Sistemas 
Profissionais responsáveis pela instalação, configuração e manutenção dos sistemas OFM. Eles se beneficiam de uma ferramenta centralizada para gerenciar aplicações e módulos, facilitando suas atividades diárias.

### Gestores de TI
Executivos e gerentes de TI que necessitam de uma visão abrangente e centralizada das aplicações e módulos dentro da organização. A gestão eficiente de permissões e o controle de usuários são cruciais para a segurança e eficiência operacional.

### Analistas de Segurança 
Profissionais focados em garantir a segurança da informação dentro da empresa. A interface de auditoria do OFM Backoffice é uma ferramenta essencial para monitorar atividades, detectar anomalias e realizar investigações de segurança.

### Usuários Finais
Funcionários que utilizam os produtos OFM no dia a dia. Embora indiretamente, eles são beneficiados por um sistema mais seguro e eficiente, resultante da melhor gestão de permissões e controle de acessos.

### Compliance Officers 
Profissionais responsáveis por garantir que a empresa esteja em conformidade com leis e regulamentos. A capacidade de auditar e monitorar atividades dos usuários ajuda a assegurar conformidade regulatória.`,
    benchmarkings: `___
### Microsoft Azure Active Directory (AD) 
Um dos padrões no mercado para gestão de identidades e acessos. O Azure AD oferece funcionalidades avançadas para controle de permissões, autenticação multifator, e integração com uma ampla gama de aplicações.

### Okta
Conhecida por sua plataforma de gerenciamento de identidades, a Okta fornece soluções robustas para Single Sign-On (SSO), gestão de identidades e acessos, e segurança de API. Suas práticas de integração e experiência do usuário podem servir de referência para o OFM Backoffice.

### AWS Identity and Access Management (IAM) 
O IAM da Amazon Web Services oferece controle granular sobre permissões de acesso a recursos na nuvem AWS. Suas políticas detalhadas de permissões e auditoria de atividades são aspectos importantes a serem analisados.

### SAP Identity Management 
Solução que integra com os sistemas ERP da SAP para gerenciar identidades e acessos em grandes corporações. As capacidades de integração e gestão centralizada são aspectos valiosos para o benchmarking.

### Ping Identity
Outra solução proeminente no campo de gestão de identidades, conhecida por suas funcionalidades de SSO, autenticação multifator e gestão de acessos. O foco na experiência do usuário e na segurança pode fornecer insights importantes para o desenvolvimento do OFM Backoffice.`,
    legalIssues: `___
### Proteção de Dados Pessoais
O OFM Backoffice deve estar em conformidade com leis de proteção de dados, como a Lei Geral de Proteção de Dados (LGPD) no Brasil e o Regulamento Geral sobre a Proteção de Dados (GDPR) na União Europeia. Isso inclui assegurar que os dados pessoais dos usuários sejam coletados, processados e armazenados de forma segura, com consentimento adequado e mecanismos de proteção contra violações.

### Segurança da Informação 
É crucial que o OFM Backoffice implemente medidas robustas de segurança para proteger os dados contra acessos não autorizados, roubos e violações. Isso pode envolver criptografia de dados, autenticação multifator, e monitoramento contínuo de atividades suspeitas.

### Propriedade Intelectual
Assegurar que todo o software utilizado ou desenvolvido esteja em conformidade com as leis de propriedade intelectual. Isso inclui o uso de licenças de software adequadas, evitando a violação de direitos autorais e patentes.

### Conformidade com Regulamentações Setoriais
Dependendo do setor em que a empresa opera, pode haver regulamentações específicas que precisam ser seguidas. Por exemplo, empresas no setor financeiro devem atender às regulamentações estabelecidas pelos órgãos reguladores, como o Banco Central.

### Termos de Uso e Políticas de Privacidade
Desenvolver termos de uso claros e políticas de privacidade que descrevam como os dados serão utilizados e protegidos. Essas políticas devem ser facilmente acessíveis e compreensíveis para todos os usuários.`,
    ethicalIssues: `___
### Transparência
Garantir que os usuários saibam como seus dados estão sendo coletados, utilizados e armazenados. A transparência ajuda a construir confiança e garante que os usuários possam tomar decisões informadas sobre suas informações.

### Privacidade
Respeitar a privacidade dos usuários é uma prioridade. Isso significa implementar práticas que protejam dados sensíveis e garantir que apenas pessoas autorizadas tenham acesso a informações pessoais.

### Segurança e Proteção dos Dados
Adotar as melhores práticas para proteger os dados dos usuários contra violações e acessos não autorizados. Isso inclui a implementação de medidas de segurança avançadas e a realização de auditorias regulares de segurança.

## Uso Responsável da Informação
Garantir que os dados coletados sejam usados apenas para os fins especificados e não sejam compartilhados ou vendidos a terceiros sem o consentimento dos usuários.

### Responsabilidade Social
Considerar o impacto social do projeto, garantindo que as práticas adotadas estejam alinhadas com os princípios de responsabilidade social corporativa e contribuam para o bem-estar geral da sociedade.`,
    afterSales: `___
### Treinamento de Usuários
Fornecer treinamento adequado para todos os usuários do sistema. Isso inclui a criação de manuais, tutoriais e sessões de treinamento para garantir que os usuários saibam como utilizar todas as funcionalidades do sistema de forma eficiente.

### Suporte Técnico
Estabelecer um suporte técnico robusto para resolver rapidamente quaisquer problemas que possam surgir. Isso pode incluir a criação de uma central de atendimento ao cliente, suporte online e um sistema de tickets para acompanhamento de problemas.

### Manutenção e Atualizações
Planejar uma estratégia de manutenção e atualizações regulares para garantir que o sistema permaneça seguro e eficiente. Isso inclui a aplicação de patches de segurança, atualizações de software e melhorias contínuas de funcionalidade.

### Feedback dos Usuários
Implementar um sistema para coletar feedback dos usuários sobre o funcionamento do sistema. Esse feedback pode ser usado para identificar áreas de melhoria e ajustar o sistema conforme necessário.

### Monitoramento e Auditoria
Estabelecer práticas contínuas de monitoramento e auditoria para garantir que o sistema esteja operando conforme esperado e para identificar possíveis problemas antes que eles se tornem críticos.

### Documentação
Manter uma documentação detalhada e atualizada do sistema, incluindo diagramas de arquitetura, manuais de operação e relatórios de auditoria. Isso facilita a manutenção e a transferência de conhecimento.

### Comunicação Contínua
Manter uma comunicação contínua com os usuários e stakeholders para informá-los sobre novas funcionalidades, atualizações e melhorias. Isso ajuda a manter todos alinhados e maximiza o valor do sistema para a organização.`
  },
  frontend: {
    framework: "react",
    uiKit: "material",
  },
  backend: {
    framework: "laravel",
    database: "oracle"
  },
  modules: [
    {
      id: "userModule",
      title: "Usuário",
      icon: "",
      elements: [
        {
          id: "userForm",
          type: "forms"
        },
        {
          id: "userList",
          type: "lists"
        }
      ]
    },
    {
      id: "companyModule",
      title: "Empresa",
      icon: "",
      elements: [
        {
          id: "ofmBackofficeCompanyForm",
          type: "forms"
        },
        {
          id: "ofmBackofficeCompanyList",
          type: "lists"
        }
      ]
    },
    {
      id: "applicationModule",
      title: "Aplicações",
      icon: "",
      elements: [
        {
          id: "applicationForm",
          type: "forms"
        },
        {
          id: "applicationList",
          type: "lists"
        }

      ]
    },
    {
      id: "ssoUserModule",
      title: "Ususário SSO",
      icon: "",
      elements: [
        {
          id: "ssoUserForm",
          type: "forms"
        },
        {
          id: "ssoUserList",
          type: "lists"
        }

      ]
    }
  ],
  forms: [userInvitationForm, ofmBackofficeCompanyForm, applicationForm, ssoUserForm],
  lists: [userInvitationList, ofmBackofficeCompanyList, applicationList, ssoUserList]
};

