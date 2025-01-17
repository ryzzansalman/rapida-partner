import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const companyLegalNature: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Natureza legal",
  name: "companyLegalNature",
  options: [
    { label: "Empresa Pública", value: "201-1" },
    { label: "Sociedade de Economia Mista", value: "203-8" },
    { label: "Sociedade Anônima Aberta", value: "204-6" },
    { label: "Sociedade Anônima Fechada", value: "205-4" },
    { label: "Sociedade Empresária Limitada", value: "206-2" },
    { label: "Sociedade Empresária em Nome Coletivo", value: "207-0" },
    { label: "Sociedade Empresária em Comandita Simples", value: "208-9" },
    { label: "Sociedade Empresária em Comandita por Ações", value: "209-7" },
    { label: "Sociedade em Conta de Participação", value: "212-7" },
    { label: "Empresário(Individual)", value: "213-5" },
    { label: "Cooperativa", value: "214-3" },
    { label: "Consórcio de Sociedades", value: "215-1" },
    { label: "Grupo de Sociedades", value: "216-0" },
    { label: "Estabelecimento, no Brasil, de Sociedade Estrangeira", value: "217-8" },
    { label: "Estabelecimento, no Brasil, de Empresa Binacional Argentino - Brasileira", value: "219-4" },
    { label: "Empresa Domiciliada no Exterior", value: "221-6" },
    { label: "Clube / Fundo de Investimento", value: "222-4" },
    { label: "Sociedade Simples Pura", value: "223-2" },
    { label: "Sociedade Simples Limitada", value: "224-0" },
    { label: "Sociedade Simples em Nome Coletivo", value: "225-9" },
    { label: "Sociedade Simples em Comandita Simples", value: "226-7" },
    { label: "Empresa Binacional", value: "227-5" },
    { label: "Consórcio de Empregadores", value: "228-3" },
    { label: "Consórcio Simples", value: "229-1" },
    { label: "Empresa Individual de Responsabilidade Limitada(de Natureza Empresária)", value: "230-5" },
    { label: "Empresa Individual de Responsabilidade Limitada(de Natureza Simples)", value: "231-3" },
    { label: "Sociedade Unipessoal de Advogados", value: "232-1" },
    { label: "Cooperativas de Consumo", value: "233-0" },
    { label: "Serviço Notarial e Registral(Cartório)", value: "303-4" },
    { label: "Fundação Privada", value: "306-9" },
    { label: "Serviço Social Autônomo", value: "307-7" },
    { label: "Condomínio Edilício", value: "308-5" },
    { label: "Comissão de Conciliação Prévia", value: "310-7" },
    { label: "Entidade de Mediação e Arbitragem", value: "311-5" },
    { label: "Entidade Sindical", value: "313-1" },
    { label: "Estabelecimento, no Brasil, de Fundação ou Associação Estrangeiras", value: "320-4" },
    { label: "Fundação ou Associação Domiciliada no Exterior", value: "321-2" },
    { label: "Organização Religiosa", value: "322-0" },
    { label: "Comunidade Indígena", value: "323-9" },
    { label: "Fundo Privado", value: "324-7" },
    { label: "Órgão de Direção Nacional de Partido Político", value: "325-5" },
    { label: "Órgão de Direção Regional de Partido Político", value: "326-3" },
    { label: "Órgão de Direção Local de Partido Político", value: "327-1" },
    { label: "Comitê Financeiro de Partido Político", value: "328-0" },
    { label: "Frente Plebiscitária ou Referendária", value: "329-8" },
    { label: "Organização Social(OS)", value: "330-1" },
    { label: "Demais Condomínios", value: "331-0" },
    { label: "Associação Privada", value: "399-9" },
    { label: "Empresa Individual Imobiliária", value: "401-4" },
    { label: "Segurado Especial", value: "402-2" },
    { label: "Contribuinte individual", value: "408-1" },
    { label: "Candidato a Cargo Político Eletivo", value: "409-0" },
    { label: "Leiloeiro", value: "411-1" },
    { label: "Produtor Rural(Pessoa Física)", value: "412-0" },
    { label: "Organização Internacional", value: "501-0" },
    { label: "Representação Diplomática Estrangeira", value: "502-9" },
    { label: "Outras Instituições Extraterritoriais", value: "503-7" },
    { label: "Órgão Público do Poder Executivo Federal", value: "101-5" },
    { label: "Órgão Público do Poder Executivo Estadual ou do Distrito Federal", value: "102-3" },
    { label: "Órgão Público do Poder Executivo Municipal", value: "103-1" },
    { label: "Órgão Público do Poder Legislativo Federal", value: "104-0" },
    { label: "Órgão Público do Poder Legislativo Estadual ou do Distrito Federal", value: "105-8" },
    { label: "Órgão Público do Poder Legislativo Municipal", value: "106-6" },
    { label: "Órgão Público do Poder Judiciário Federal", value: "107-4" },
    { label: "Órgão Público do Poder Judiciário Estadual", value: "108-2" },
    { label: "Autarquia Federal", value: "110-4" },
    { label: "Autarquia Estadual ou do Distrito Federal", value: "111-2" },
    { label: "Autarquia Municipal", value: "112-0" },
    { label: "Fundação Pública de Direito Público Federal", value: "113-9" },
    { label: "Fundação Pública de Direito Público Estadual ou do Distrito Federal", value: "114-7" },
    { label: "Fundação Pública de Direito Público Municipal", value: "115-5" },
    { label: "Órgão Público Autônomo Federal", value: "116-3" },
    { label: "Órgão Público Autônomo Estadual ou do Distrito Federal", value: "117-1" },
    { label: "Órgão Público Autônomo Municipal", value: "118-0" },
    { label: "Comissão Polinacional", value: "119-8" },
    { label: "Fundo Público", value: "120-1" },
    { label: "Consórcio Público de Direito Público(Associação Pública)", value: "121-0" },
    { label: "Consórcio Público de Direito Privado", value: "122-8" },
    { label: "Estado ou Distrito Federal", value: "123-6" },
    { label: "Município", value: "124-4" },
    { label: "Fundação Pública de Direito Privado Federal", value: "125-2" },
    { label: "Fundação Pública de Direito Privado Estadual ou do Distrito Federal", value: "126-0" },
    { label: "Fundação Pública de Direito Privado Municipal", value: "127-9" },
  ],
};