import { type IProject } from '../interfaces/project.interface'
import { groupPermissionForm } from './groupPermission.form';
import { groupPermissionList } from './groupPermission.list';
import { userInvitationForm } from './userInvitation.form';
import { userInvitationList } from './userInvitation.list';
export const ofmQuickstart: IProject = {
  id: "ofmQuickstart",
  description: `___ 
O projeto OFM Quickstart serve de base pra todas as aplicações da Plataforma OFM. Nele estarão presentes os módulos de Gerenciar Usuários, Gerenciar Grupos de Permissões e o fluxo de controle de autenticação e autorização de acordo com as regras do OFM Single Sign-On. Além disso, o OFM Quickstart define uma stack tecnológica padrão, garantindo consistência na estilização e navegabilidade entre os diferentes módulos, melhorando significativamente a usabilidade e a eficiência operacional.

Investir no OFM Quickstart significa apoiar uma plataforma que não só resolve problemas críticos de integração e segurança, mas também estabelece uma base sólida para o crescimento e a escalabilidade futuros.`,
  title: "OFM Backoffice",
  businessPlan: {
    businessValue: `___
### Integração de Módulos ERP
A falta de integração entre os módulos ERP da OFM Systems leva a uma experiência fragmentada e ineficiente para os usuários. O OFM Quickstart resolve esse problema ao centralizar a gestão de usuários, grupos de permissões e o fluxo de autenticação e autorização. Isso cria uma experiência unificada e coesa para os usuários.

### Complexidade na Gestão de Credenciais
Gerenciar múltiplas credenciais para diferentes módulos aumenta a carga de trabalho para administradores de TI e pode levar a problemas de segurança. O OFM Quickstart simplifica essa gestão ao implementar um Single Sign-On (SSO), permitindo que os usuários utilizem uma única credencial para acessar todos os módulos da plataforma.

### Inconsistências na Segurança
Sem um sistema unificado, a aplicação de políticas de segurança é inconsistente entre os módulos. O OFM Quickstart estabelece um padrão para autenticação e autorização, garantindo que as políticas de segurança sejam aplicadas de maneira uniforme e eficaz em toda a plataforma.

### Dificuldade na Navegabilidade e Estilização
Módulos desenvolvidos de forma isolada resultam em inconsistências na navegação e estilização, prejudicando a usabilidade. O OFM Quickstart define uma stack tecnológica padrão, estilização e navegabilidade coerentes, proporcionando uma experiência de usuário harmoniosa e intuitiva.`,
    targetMarket: `___
### Empresas que utilizam o ERP da OFM Systems 
Todos os clientes que utilizam os módulos de contabilidade, financeiro, CRM e outros da OFM Systems são diretamente beneficiados. O SSO OFM oferece uma experiência de usuário mais coesa e segura, além de facilitar a administração de acesso.

### Administradores de TI e Equipes de Suporte 
Profissionais responsáveis pela gestão de TI nas empresas clientes serão aliviados das complexidades de gerenciar múltiplas credenciais e poderão aplicar políticas de segurança mais consistentes e eficazes.

### Usuários finais dos módulos ERP 
Funcionários que utilizam os módulos do ERP diariamente terão uma experiência de acesso simplificada, o que melhora a eficiência e reduz o tempo gasto em tarefas administrativas de login.

### Gestores de Segurança da Informação
Equipes responsáveis pela segurança da informação nas empresas clientes se beneficiarão de um sistema de autenticação centralizado, que facilita a implementação de medidas de segurança e a conformidade com regulamentos.`,
    benchmarkings: `___
### Auth0
Auth0 é uma plataforma de identidade que oferece serviços de autenticação e autorização para aplicações web, móveis e legadas. Ele é um excelente benchmark por sua robustez, flexibilidade e segurança, sendo capaz de atender a necessidades complexas de diferentes tipos de aplicações e organizações.

### Okta
Okta é outra plataforma de gerenciamento de identidade que oferece soluções completas para autenticação e autorização. Suas funcionalidades de Single Sign-On e gerenciamento de usuários são amplamente reconhecidas por sua facilidade de uso e integração com diversas tecnologias.

### AWS Cognito
AWS Cognito oferece serviços de identidade para desenvolvedores, permitindo adicionar funcionalidades de inscrição, login e controle de acesso a suas aplicações web e móveis. É um benchmark importante devido à sua integração com o ecossistema AWS e sua capacidade de escalar conforme a demanda.

### Keycloak
Keycloak é uma solução open-source para gerenciamento de identidade e acesso, oferecendo SSO, gerenciamento de identidade e controle de acesso para aplicações modernas. Ele se destaca por sua flexibilidade e integração com uma ampla gama de protocolos de autenticação.`,
    legalIssues: `___
### Proteção de Dados Pessoais 
É essencial garantir a conformidade com leis de proteção de dados, como a General Data Protection Regulation (GDPR) na Europa, a Lei Geral de Proteção de Dados (LGPD) no Brasil e outras regulamentações locais. Isso envolve a coleta, armazenamento e processamento seguro dos dados pessoais dos usuários, garantindo que os dados sejam utilizados apenas para fins autorizados e com o consentimento apropriado. 
### Segurança da Informação 
Assegurar que todas as medidas de segurança necessárias sejam implementadas para proteger os dados dos usuários contra acesso não autorizado, violações e outros riscos. Isso inclui a implementação de autenticação multifator (MFA), criptografia de dados em trânsito e em repouso, e políticas de acesso rigorosas. 
### Conformidade com Normas e Regulamentos 
Além das leis de proteção de dados, o OFM Quickstart deve estar em conformidade com outros regulamentos relevantes, como o Health Insurance Portability and Accountability Act (HIPAA) para dados de saúde nos Estados Unidos, e regulamentos financeiros específicos para clientes do setor bancário ou financeiro. 
### Acordos de Nível de Serviço (SLAs) 
Estabelecer acordos claros de nível de serviço com os clientes, definindo as expectativas de disponibilidade, tempo de resposta e suporte técnico. SLAs ajudam a assegurar que as expectativas de desempenho e segurança sejam transparentes e acordadas por ambas as partes.`,
    ethicalIssues: `___
### Transparência com os Usuários
É crucial ser transparente com os usuários sobre como seus dados serão coletados, usados e protegidos. Isso envolve fornecer políticas de privacidade claras e compreensíveis, além de obter consentimento explícito dos usuários para o uso de seus dados.

### Equidade e Acessibilidade
Garantir que o OFM Quickstart seja acessível e justo para todos os usuários, independentemente de suas habilidades, localizações geográficas ou circunstâncias financeiras. Isso inclui considerar a acessibilidade digital e seguir diretrizes de design inclusivo.

### Minimização de Dados
Adotar a prática de minimização de dados, coletando apenas as informações necessárias para os fins específicos do projeto. Evitar a coleta excessiva de dados que podem aumentar o risco de violação de privacidade.

### Responsabilidade e Responsividade
Assegurar que haja mecanismos para os usuários reportarem preocupações e violações de privacidade, e que essas preocupações sejam tratadas de maneira rápida e eficaz. Manter um canal de comunicação aberto para feedback e melhorias contínuas.
`,
    afterSales: `___
### Monitoramento e Manutenção Contínua
Após a entrega, é fundamental implementar um sistema de monitoramento contínuo para garantir que todas as funcionalidades estejam operando conforme esperado. Isso inclui a monitoração de desempenho, detecção de anomalias e gestão de incidentes.

### Atualizações e Melhorias
Manter um ciclo contínuo de atualizações e melhorias baseado no feedback dos usuários e nas mudanças do mercado. Isso inclui correções de bugs, melhorias de segurança e novas funcionalidades para atender às necessidades emergentes dos clientes.

### Treinamento e Suporte
Oferecer treinamento e suporte contínuos aos administradores de TI e usuários finais para garantir que eles aproveitem ao máximo as funcionalidades do OFM Quickstart. Isso pode incluir webinars, tutoriais, documentação detalhada e um sistema de suporte técnico eficiente.

### Auditorias de Segurança e Conformidade
Realizar auditorias regulares de segurança e conformidade para garantir que o sistema continue a atender a todos os requisitos legais e regulamentares. Implementar práticas de segurança proativas para proteger contra novas ameaças e vulnerabilidades.

### Comunicação Regular com Clientes
Manter uma comunicação regular com os clientes para entender suas necessidades e expectativas em evolução. Enviar newsletters, realizar reuniões de feedback e criar fóruns de discussão para promover uma relação colaborativa e transparente.
`
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
      title: "Módulo de usuários",
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
      id: "grouPermissionModule",
      title: "Módulo de grupos de permissões",
      icon: "",
      elements: [
        {
          id: "groupPermissionForm",
          type: "forms"
        },
        {
          id: "groupPermissionList",
          type: "lists"
        }
      ]
    }
  ],
  forms: [userInvitationForm, groupPermissionForm],
  lists: [userInvitationList, groupPermissionList]
};