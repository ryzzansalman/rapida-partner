import type { IProject } from "../interfaces/project.interface";
import { ofmLoginSsoForm } from "./elements/forms/ofmSsoLogin.form";
import { userSignupForm } from "./elements/forms/userSignup.form";

export const ofmSso: IProject = {
    id: "ofmSso",
    description: "O projeto OFM SSO é uma solução inovadora de autenticação que integra e simplifica o acesso a múltiplos módulos do ERP da OFM Systems, eliminando a necessidade de logins repetidos e a redundância de dados de usuários. Com o SSO OFM, empresas poderão oferecer uma experiência de usuário mais eficiente e segura, centralizando a gestão de credenciais e aplicando políticas de segurança de forma consistente em todos os módulos. Essa unificação não apenas aumenta a produtividade dos funcionários, mas também reduz os custos operacionais e melhora a segurança da informação.",
    title: "OFM SSO",
    businessPlan: {
        businessValue: `- Eliminação da necessidade de logins repetidos, aumentando a conveniência para os usuários.
- Redução da redundância de dados de usuários, otimizando a gestão de informações.
- Centralização da gestão de credenciais, facilitando a aplicação de políticas de segurança.
- Aumento da produtividade dos funcionários através de um acesso mais rápido e simplificado aos módulos do ERP.
- Melhoria na segurança da informação com uma aplicação consistente de políticas de segurança.
- Redução de custos operacionais relacionados à gestão de múltiplas credenciais.`,
        targetMarket: `- Empresas de médio e grande porte que utilizam o ERP da OFM Systems.
- Departamentos de TI responsáveis pela gestão de sistemas de autenticação e segurança.
- Profissionais de segurança da informação que buscam simplificar a gestão de credenciais.
- Usuários finais dos módulos do ERP que desejam uma experiência de login mais fluida e segura.
- Gerentes de operações interessados em aumentar a produtividade e reduzir custos operacionais.`,
        benchmarkings: `- **Microsoft Azure AD SSO**: Plataforma robusta que oferece integração com múltiplos aplicativos e serviços, destacando-se pela segurança e gestão centralizada.
- **Okta**: Solução líder em SSO que proporciona uma experiência de login unificada e segura para diversas aplicações empresariais.
- **Google Workspace SSO**: Oferece integração simplificada com os serviços Google e outros aplicativos, com forte enfoque na segurança e na usabilidade.
- **Auth0**: Plataforma flexível e personalizável que oferece SSO, destacando-se pela facilidade de integração e gestão centralizada.
- **OneLogin**: Solução de SSO que foca na segurança e na simplicidade de uso, com integração com múltiplos aplicativos e serviços empresariais.`,
        legalIssues: `- Conformidade com a LGPD (Lei Geral de Proteção de Dados) para garantir a privacidade e proteção dos dados dos usuários.
- Adequação às regulamentações de segurança cibernética e proteção de dados vigentes no país de operação.
- Implementação de políticas de autenticação e autorização que respeitem os direitos dos usuários.
- Contratos de uso claros e transparentes para empresas e usuários finais, detalhando responsabilidades e garantias.
- Monitoramento constante e atualizações regulares para manter a conformidade com novas legislações e normas de segurança.`,
        ethicalIssues: `- Garantia de privacidade dos dados dos usuários, com políticas transparentes de coleta, armazenamento e uso de informações.
- Implementação de práticas de segurança que protejam os dados contra acesso não autorizado e ciberataques.
- Compromisso com a transparência nas práticas de gestão de credenciais e aplicação de políticas de segurança.
- Responsabilidade social corporativa na proteção dos dados dos usuários, evitando o uso indevido ou abusivo das informações coletadas.
- Educação e conscientização dos usuários sobre a importância da segurança da informação e boas práticas de autenticação.`,
        afterSales: `- Suporte técnico contínuo para resolução de problemas e atualizações de segurança.
- Treinamento para os administradores de sistemas e usuários finais sobre o uso da solução OFM SSO.
- Monitoramento constante do desempenho e segurança da solução, com relatórios regulares para as empresas clientes.
- Atualizações periódicas com novas funcionalidades e melhorias na experiência de usuário.
- Feedback contínuo com os clientes para identificar áreas de melhoria e adaptar a solução às necessidades evolutivas do mercado.`
    },
    businessRules: [
        {
            rule: {
                description: "Na URL de acesso à página inicial do SSO deve haver um `path param` indicando uma empresa cadastrada na base de dados OFM.",
                subrules: [
                    {
                        description: "Se não houver um o `path param` ou este não corresponder a uma empresa na base de dados OFM, o usuário deve ser enviado para uma página com aviso de `página não encontrada`."
                    }
                ]
            }
        },
        {
            rule: {
                description: "No caso de registro de novo usuário, ao clicar no link da página inicial do SSO para ir para a página de registro, a Url de registro também deve carregar o `path param` que determina a empresa ao qual o registro será associado."
            }
        },
    ],
    forms: [
        userSignupForm,
        ofmLoginSsoForm
    ]
}