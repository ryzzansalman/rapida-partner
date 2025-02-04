import type { IProject } from "../../interfaces/project.interface";

export const aliroBusiness: IProject = {
  id: "aliroBusiness",
  title: "Aliro Business",
  description: `A MuMi resolve um problema recorrente no setor musical: a dificuldade de contratar músicos e bandas de maneira ágil e segura.  
A plataforma funcionará como um **hub centralizado**, permitindo:

- Cadastro e busca por músicos e bandas disponíveis para eventos.
- Contratação e pagamento digital seguro.
- Avaliação e recomendação dos artistas.
- Solução para substituições de última hora.

Além disso, **músicos terão acesso a um painel personalizado**, onde poderão:

- Gerenciar sua agenda e definir disponibilidade.
- Acompanhar seu desempenho na plataforma.
- Receber recomendações e feedbacks, aumentando sua visibilidade no mercado​.`,
  flow: "labotablo",
  businessPlan: {
    businessValue: `- **Redução do tempo de resposta**, minimizando frustrações para contratantes e artistas.
- **Garantia de confiabilidade** com avaliações e recomendações dos músicos.
- **Aumento da segurança nas transações**, por meio de pagamentos integrados.
- **Gestão eficiente de substituições**, evitando cancelamentos inesperados e garantindo continuidade nos eventos.
- **Crescimento da visibilidade de músicos e bandas**, impulsionando suas carreiras através de um marketplace especializado​.`,
    targetMarket: `- **Músicos e bandas independentes**, buscando oportunidades de trabalho.
- **Empresas de eventos e organizadores**, que precisam contratar artistas de forma confiável e ágil.
- **Contratantes individuais**, como noivos e aniversariantes, interessados em música ao vivo para eventos privados.
- **Produtores culturais**, que necessitam de um canal estruturado para encontrar e gerenciar artistas​.`,
    benchmarkings: `- **GetNinjas** – Plataforma ampla, mas generalista, sem foco exclusivo em música.
- **Fiverr Music & Sound** – Permite contratação de músicos, mas é voltada para produções digitais, não para eventos presenciais.
- **Gigsalad** – Serviço internacional de intermediação de artistas, mas com pouca atuação no Brasil.
- **Bandzoogle** – Focado em websites para músicos, sem agendamento de eventos.

MuMi se diferencia pela especialização no setor musical, garantindo agilidade na **substituição de músicos e bandas em casos de cancelamento**.`,
    legalIssues: `- **LGPD (Lei Geral de Proteção de Dados)** – Garantindo a privacidade e segurança das informações dos usuários.
- **Regulamentação de pagamentos online** – Parceria com gateways financeiros reconhecidos para garantir conformidade com transações digitais.
- **Contratos digitais** – Garantia jurídica para contratantes e músicos, minimizando riscos de inadimplência​.`,
    ethicalIssues: `- **Privacidade dos usuários** – Compromisso com a segurança dos dados armazenados.
- **Transparência nas relações comerciais** – Políticas claras sobre preços, taxas e direitos dos músicos.
- **Valorização da cultura e dos artistas** – Promoção de práticas que incentivem a sustentabilidade da cena musical​.`,
    afterSales: `- **Suporte técnico** para músicos e contratantes, garantindo funcionamento adequado da plataforma.
- **Atualizações frequentes**, melhorando a usabilidade e ampliando funcionalidades conforme o feedback dos usuários.
- **Monitoramento do desempenho da plataforma**, permitindo ajustes rápidos para aprimorar a experiência.
- **Relatórios para músicos e bandas**, fornecendo insights sobre contratos fechados, avaliações e recomendações​.`,
    monetization: `- **Comissão sobre contratos fechados** – Percentual cobrado sobre cada transação realizada na plataforma.
- **Assinaturas premium para músicos e bandas** – Opção de destaque nos resultados de busca e acesso a relatórios avançados.
- **Parcerias comerciais** – Empresas de eventos, fornecedores de equipamentos e casas de show poderão anunciar na plataforma.
- **Consultoria para músicos e bandas** – Treinamentos e mentorias para ajudar artistas a aumentarem sua presença no mercado.`
  },
  externalModules: {
    modules: [
      {
        id: "kliento",
      },
    ]
  },
  frontend: {
    framework: "svelte",
    uiKit: "flowbite",
  },
  backend: {
    framework: "nest",
    database: "mongodb"
  },
};