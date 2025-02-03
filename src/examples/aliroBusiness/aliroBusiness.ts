import type { IProject } from "../../interfaces/project.interface";
import { customerCompanyForm } from "./components/customerCompany.form";
import { customerCompanyList } from "./components/customerCompany.list";
import { customerPersonForm } from "./components/customerPerson.form";
import { customerPersonList } from "./components/customerPerson.list";
import { customerModule } from "./modules/customer";
import { productModule } from "./modules/product";

export const aliroBusiness: IProject = {
  id: "aliroBusiness",
  title: "Aliro Business",
  description: `O **Aliro** surge como uma plataforma inovadora para facilitar o controle de acesso a locais controlados e eventos, eliminando a necessidade de bilhetes físicos e reduzindo a burocracia para usuários e organizadores. Com um aplicativo móvel intuitivo, o **Aliro** permite a aquisição de ingressos e serviços relacionados, garantindo uma experiência unificada e eficiente.

O funcionamento baseia-se na geração de QRCodes únicos e diários, assegurando segurança e autenticidade nas entradas. Além disso, a plataforma permite a compra de produtos e serviços complementares, como alimentação, estacionamento e aluguel de equipamentos, todos validados digitalmente no momento da utilização.

Com um modelo flexível de pagamento (diário, mensal ou anual), o **Aliro** atende desde espaços recreativos até eventos exclusivos, promovendo conveniência, segurança e inovação no setor de acessos digitais.`,
  flow: "komerco",
  businessPlan: {
    businessValue: `- **Facilidade e praticidade**: O ingresso e a validação de serviços são feitos via QRCode exclusivo, evitando filas e processos manuais.
- **Flexibilidade de pagamento**: Planos de diária, mensalidade e anualidade atendem diferentes perfis de consumidores.
- **Centralização de serviços**: A plataforma permite a compra de produtos e serviços complementares aos eventos e locais.
- **Segurança e autenticidade**: Cada QRCode gerado é único e vinculado exclusivamente ao aplicativo do usuário, reduzindo fraudes.
- **Automação e eficiência**: Redução da necessidade de bilheterias físicas e controle manual de acessos.
- **Análises e relatórios**: Organizadores podem acessar dados sobre acessos e vendas dentro da plataforma.`,
    targetMarket: `- **Administradores de locais controlados**: Clubes, parques, academias, coworkings, espaços culturais, centros esportivos.
- **Organizadores de eventos**: Shows, casamentos, formaturas, apresentações teatrais, conferências, festas privadas, feiras e exposições.
- **Empresas de turismo e lazer**: Resorts, spas, museus, parques temáticos e passeios turísticos.
- **Setor de entretenimento**: Cinemas, teatros, boates e casas de espetáculos.
- **Fornecedores de produtos e serviços**: Restaurantes, lojas de souvenires, serviços de fotografia, estacionamento, aluguel de equipamentos.`,
    benchmarkings: `- **Eventbrite**: Plataforma de venda de ingressos online para eventos de diversos tipos.
- **Sem Parar**: Solução para controle de acesso automatizado a estacionamentos e pedágios via identificação digital.
- **Ticketmaster**: Venda de ingressos com QRCode, sistema de assentos e integração com organizadores de eventos.
- **Gympass**: Modelo de acesso por assinatura para academias e estúdios fitness.
- **Ingressos.com**: Plataforma de venda e distribuição de ingressos para cinemas e shows.
- **ParkNow**: Sistema digital para gestão de estacionamento com pagamento via app.`,
    legalIssues: `- **Proteção de dados**: A plataforma deve seguir a **LGPD (Lei Geral de Proteção de Dados)**, garantindo a privacidade dos usuários.
- **Regulamentação de eventos**: É necessário aderir a leis locais sobre venda de ingressos e tributações aplicáveis.
- **Direitos do consumidor**: Transparência nos termos de uso, cancelamentos e reembolsos.
- **Segurança digital**: Implementação de criptografia nos QRCodes para evitar falsificações e fraudes.
- **Intermediação de pagamentos**: Cumprimento de normas financeiras para transações digitais, evitando problemas com órgãos reguladores.`,
    ethicalIssues: `- **Privacidade e transparência**: Os dados dos usuários devem ser protegidos e utilizados apenas para os fins descritos na plataforma.
- **Acessibilidade**: Interface intuitiva e acessível para diferentes públicos, incluindo pessoas com deficiência.
- **Combate à revenda ilegal**: Medidas para evitar cambistas e venda de ingressos superfaturados.
- **Inclusão social**: Possibilidade de ingressos com preços reduzidos para grupos específicos, como estudantes e idosos.
- **Sustentabilidade**: Redução do uso de papel e incentivo a ingressos 100% digitais.`,
    afterSales: `- **Suporte técnico contínuo** para organizadores e estabelecimentos parceiros.
- **Treinamento para organizadores e fornecedores** no uso da plataforma e no gerenciamento de acessos.
- **Atualizações e melhorias** periódicas para otimização do sistema e novas funcionalidades.
- **Monitoramento de desempenho** e feedback contínuo dos usuários para aprimoramento da experiência.
- **Relatórios detalhados** para análise de vendas, acessos e engajamento dentro da plataforma.`
  },
  externalModules: {
    modules: [{
      id: "kliento",
      icon: "user"
    }]
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