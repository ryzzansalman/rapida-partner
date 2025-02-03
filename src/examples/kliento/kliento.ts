import type { IProject } from "../../interfaces/project.interface";
import { customerCompanyForm } from "./components/customerCompany.form";
import { customerCompanyList } from "./components/customerCompany.list";
import { customerPersonForm } from "./components/customerPerson.form";
import { customerPersonList } from "./components/customerPerson.list";
import { customerModule } from "./modules/customer";

export const kliento: IProject = {
  id: "kliento",
  title: "Kliento",
  description: "Kliento é um sistema de gerenciamento de clientes que serve como base de um CRM dos produtos da Kunlatek. Ele se alinhará a diversos outros sistemas da Kunlatek, como o Aliro, o MuMi e o Mezuri. Desta maneira, um cliente que obter o módulo Kliento em diferentes produtos, terá uma visão unificada de seus dados, tendo uma visâo completa de como agem seus clientes em negócios variados.",
  flow: "permeson",
  businessPlan: {
    businessValue: `- **Unificação dos dados do cliente** em diferentes sistemas da Kunlatek (como Aliro, MuMi e Mezuri), proporcionando uma visão 360º do comportamento do cliente.
- **Otimização das interações comerciais**, permitindo que empresas compreendam melhor seus clientes e ajustem suas estratégias.
- **Automação de processos de CRM**, reduzindo o trabalho manual e melhorando a experiência de atendimento.
- **Análise de dados e relatórios avançados**, ajudando a prever tendências e comportamentos dos clientes em múltiplos negócios.
- **Integração nativa** com outros produtos da Kunlatek, garantindo maior eficiência e menor necessidade de customização técnica.`,
    targetMarket: `- **Empresas que utilizam outros sistemas da Kunlatek** e necessitam de um CRM integrado para centralizar seus clientes.
- **Negócios que lidam com múltiplas verticais**, como marketplaces, plataformas de turismo e e-commerces, e desejam entender melhor seus clientes.
- **Equipes de vendas e atendimento**, que precisam de uma ferramenta robusta para gerenciar leads, contatos e interações de clientes.
- **Empreendedores e pequenas empresas** que buscam uma solução escalável para fidelizar e compreender seus consumidores.`,
    benchmarkings: `- **HubSpot CRM** – Oferece uma experiência gratuita para pequenas empresas e ferramentas avançadas de automação.
- **Salesforce** – Um dos CRMs mais poderosos do mercado, com foco em grandes empresas e integração com diversos sistemas.
- **Pipedrive** – Conhecido por sua interface intuitiva e funcionalidades voltadas para vendas.
- **Zoho CRM** – Uma solução flexível que se adapta a diferentes tipos de negócios.
- **Agendor** – Focado no mercado brasileiro, com funcionalidades personalizadas para vendas e gestão de clientes.`,
    legalIssues: `- **Conformidade com a LGPD** (Lei Geral de Proteção de Dados), garantindo que todas as informações dos clientes sejam armazenadas e processadas de maneira segura.
- **Política de privacidade clara**, informando aos usuários como seus dados serão utilizados.
- **Segurança de dados robusta**, incluindo criptografia, controle de acesso e auditorias regulares.
- **Possibilidade de portabilidade de dados**, permitindo que clientes possam acessar e exportar suas informações conforme a legislação exige.`,
    ethicalIssues: `- **Proteção e respeito à privacidade dos dados**, assegurando que nenhuma informação seja utilizada sem consentimento.
- **Transparência na coleta e uso de dados**, permitindo que os usuários saibam exatamente como suas informações serão tratadas.
- **Responsabilidade social**, evitando práticas abusivas de marketing ou armazenamento indevido de informações.
- **Foco na experiência do usuário**, priorizando funcionalidades que realmente agregam valor aos clientes e empresas.`,
    afterSales: `- **Suporte técnico contínuo**, garantindo que as empresas possam solucionar dúvidas e problemas rapidamente.
- **Treinamento para equipes** que utilizarão o sistema, otimizando a adoção da ferramenta.
- **Atualizações periódicas**, trazendo melhorias e novas integrações com os produtos Kunlatek.
- **Monitoramento de desempenho**, analisando métricas de uso e propondo otimizações para aumentar a eficiência.
- **Relatórios personalizados**, permitindo que cada empresa obtenha insights valiosos sobre seus clientes e operações.`
  },
  modules: [
    customerModule,
  ],
  forms: [
    customerPersonForm,
    customerCompanyForm,
  ],
  lists: [
    customerPersonList,
    customerCompanyList,
  ],
  frontend: {
    framework: "svelte",
    uiKit: "flowbite",
  },
  backend: {
    framework: "nest",
    database: "mongodb"
  },
};