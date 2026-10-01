// Vagas demonstrativas no formato do Cadastro de Vagas (PeopleXP). Somente campos do formulário atual.
// "match" não vem do cadastro: é calculado no Vem Ser TP a partir do perfil do candidato logado.
(function () {
  var BEM_ESTAR = '<p>Aqui cuidamos dos nossos colaboradores dos pés à cabeça, com iniciativas voltadas para saúde física e saúde mental, promovendo um ambiente que fortalece o equilíbrio entre vida pessoal e vida profissional.</p><p>Em saúde mental contamos com apoio psicológico e um canal exclusivo para cuidado do sentimento e bem-estar de forma individualizada, além de promover ações de conscientização, como a semana do Bem-estar e ações que promovem a conexão social e interação entre os colaboradores como Festival de Música e Dança e Sextas-feiras temáticas.</p><p>No pilar de saúde física promovemos iniciativas como a Copa TP, Campeonato de Game, Grupo de corrida, além de parcerias com academias, estúdios de pilates, yoga e parceiros de cultura e lazer.</p>';

  var BENEFICIOS = {
    'VAGA EXTERNA EXPERT': ['Vale-transporte', 'Vale-refeição ou vale-alimentação', 'Assistência médica', 'Assistência odontológica', 'Seguro de vida', 'Plano de carreira'],
    'VAGA EXTERNA STAFF': ['Vale-transporte', 'Vale-refeição ou vale-alimentação', 'Assistência médica', 'Assistência odontológica', 'Seguro de vida', 'Participação nos lucros', 'Gympass'],
    'JOVEM APRENDIZ EXPERT': ['Vale-transporte', 'Vale-refeição', 'Curso de aprendizagem profissional'],
  };

  var EXPERIENCIAS = { 'Junior': 'de 0 a 2 anos de experiência', 'Pleno': 'de 2 a 5 anos de experiência', 'Sênior': 'acima de 5 anos de experiência' };
  var PCD_LABELS = { fisica: 'Física', auditiva: 'Auditiva', visual: 'Visual', mental: 'Mental', multipla: 'Múltipla', reabilitado: 'Reabilitado' };

  var VAGAS = [
    {
      id: 2354, nome: 'Agente de Atendimento - Aplicativo Food Delivery', tipo: 'VAGA EXTERNA EXPERT', nivel: 'INICIANTE',
      descricao: 'Atenda clientes e parceiros de um app de delivery por chat e voz, com treinamento pago e plano de carreira.',
      sobre: '<p>Se você gosta de conversar e resolver problemas, essa vaga é para você!</p><p>Suas atividades principais serão:</p><ul><li>Atender clientes, entregadores e restaurantes por chat e telefone</li><li>Acompanhar pedidos e solucionar ocorrências</li><li>Registrar os atendimentos no sistema</li><li>Seguir os padrões de qualidade da operação</li></ul>',
      salario: 'R$ 1.897,50 + RV até 18% + Benefícios + Plano de carreira', horarios: '09:00 às 15:20 | 15:20 às 21:40', escala: '6x1', jornada: '06h20',
      modalidade: 'Remoto', local: 'São Paulo/SP', dataFim: '2026-09-30', aceitaMudanca: false,
      requisitos: ['Boa comunicação escrita e verbal', 'Facilidade com computador e internet'],
      reqCandidato: { experiencia: null, escolaridade: 'ENSINO MÉDIO', idiomas: null, equipamentos: ['Notebook/Computador', 'Internet mínima de 15 Mbps - Cabeada'] },
      publico: 'VAGA PARA TODOS OS PÚBLICOS', pcd: [], match: 85,
    },
    {
      id: 2166, nome: 'Agente de atendimento - Vaga exclusiva para pessoas com deficiência - SP (PcD)', tipo: 'VAGA EXTERNA EXPERT', nivel: 'INICIANTE',
      descricao: 'Atendimento receptivo a clientes de grandes marcas, com treinamento pago, plano de carreira e ambiente inclusivo em São Paulo.',
      sobre: '<p>Buscamos pessoas comunicativas para atuar no atendimento a clientes, esclarecendo dúvidas e resolvendo solicitações pelos canais de voz e chat.</p><p>Principais atividades:</p><ul><li>Atender clientes com cordialidade e agilidade</li><li>Registrar os atendimentos no sistema</li><li>Encaminhar demandas às áreas responsáveis</li></ul>',
      salario: 'R$ 1.897,50 + RV até 18% + Benefícios + Plano de carreira', horarios: '09:00 às 15:20 | 15:20 às 21:40', escala: '6x1', jornada: '06h20',
      modalidade: 'Presencial', local: 'Água Branca – São Paulo/SP', dataFim: '2026-09-30', aceitaMudanca: false,
      requisitos: ['Ensino médio completo', 'Digitação rápida e precisa', 'Atenção aos detalhes'],
      reqCandidato: { experiencia: null, escolaridade: 'ENSINO MÉDIO', idiomas: [{ idioma: 'INGLÊS', nivel: 'Avançado' }, { idioma: 'ESPANHOL', nivel: 'Intermediário' }], equipamentos: null },
      publico: 'VAGA EXCLUSIVA PARA PESSOAS COM DEFICIÊNCIA',
      pcd: ['fisica::Amputação ou ausência de membro', 'fisica::Monoparesia', 'fisica::Nanismo', 'auditiva::Perda auditiva bilateral parcial', 'auditiva::Perda auditiva unilateral', 'visual::Baixa visão', 'visual::Visão monocular', 'reabilitado::Reabilitado pelo INSS'],
      bemEstar: BEM_ESTAR + '<p>Para esta vaga, contamos também com intérprete de Libras nos treinamentos e ambiente com acessibilidade completa.</p>', match: 92,
    },
    {
      id: 2741, nome: 'Agente de Atendimento - Serviços Financeiros - Recife', tipo: 'VAGA EXTERNA EXPERT', nivel: 'INICIANTE',
      descricao: 'Atendimento a clientes de um banco digital, com foco em resolver dúvidas sobre conta, cartão e pagamentos.',
      sobre: '<p>Venha fazer parte do time que atende um dos maiores bancos digitais do país.</p><p>Suas atividades principais serão:</p><ul><li>Atender clientes por chat e telefone</li><li>Orientar sobre produtos e serviços financeiros</li><li>Registrar e acompanhar solicitações</li></ul>',
      salario: 'R$ 1.650,00 + RV até 15% + Benefícios', horarios: '08:00 às 14:20 | 14:20 às 20:40', escala: '6x1', jornada: '06h20',
      modalidade: 'Presencial', local: 'Boa Vista – Recife/PE', dataFim: '2026-10-31', aceitaMudanca: true,
      requisitos: ['Ensino médio completo', 'Boa comunicação'],
      reqCandidato: { experiencia: null, escolaridade: 'ENSINO MÉDIO', idiomas: null, equipamentos: null },
      publico: 'VAGA PARA TODOS OS PÚBLICOS', pcd: [], match: 95,
    },
    {
      id: 2802, nome: 'Agente de Atendimento Bilíngue Espanhol - Home Office', tipo: 'VAGA EXTERNA EXPERT', nivel: 'EXPERIENTE',
      descricao: 'Atendimento a clientes da América Latina em espanhol, 100% home office, com equipamento fornecido pela TP.',
      sobre: '<p>Você fala espanhol com fluência? Temos uma oportunidade para atuar de casa atendendo clientes internacionais.</p><p>Suas atividades principais serão:</p><ul><li>Atender clientes em espanhol por voz e chat</li><li>Solucionar dúvidas técnicas de primeiro nível</li><li>Registrar os atendimentos no sistema</li></ul>',
      salario: 'R$ 2.350,00 + Benefícios + Plano de carreira', horarios: '10:00 às 16:20', escala: '5x2', jornada: '06h20',
      modalidade: 'Remoto', local: 'Brasil', dataFim: '2026-11-30', aceitaMudanca: false,
      requisitos: ['Experiência com atendimento ao cliente'],
      reqCandidato: { experiencia: 'Junior', escolaridade: 'ENSINO MÉDIO', idiomas: [{ idioma: 'ESPANHOL', nivel: 'Fluente' }], equipamentos: ['Internet mínima de 15 Mbps - Cabeada'] },
      publico: 'VAGA PARA TODOS OS PÚBLICOS', pcd: [], match: 88,
    },
    {
      id: 2611, nome: 'Assistente de Recursos Humanos', tipo: 'VAGA EXTERNA STAFF', nivel: 'EXPERIENTE',
      descricao: 'Apoie os processos de admissão, controle de ponto e rotinas de departamento pessoal da operação.',
      sobre: '<p>Procuramos uma pessoa organizada para apoiar o time de RH no dia a dia.</p><p>Suas atividades principais serão:</p><ul><li>Conduzir processos de admissão e documentação</li><li>Acompanhar controle de ponto e benefícios</li><li>Atender colaboradores sobre rotinas de RH</li></ul>',
      salario: 'R$ 3.200,00 + Benefícios', horarios: '08:00 às 17:48', escala: '5x2', jornada: '08h48',
      modalidade: 'Híbrido', local: 'Vila Olímpia – São Paulo/SP', dataFim: '', aceitaMudanca: false,
      requisitos: ['Conhecimento de Excel', 'Vivência com rotinas de departamento pessoal'],
      reqCandidato: { experiencia: 'Junior', escolaridade: 'ENSINO SUPERIOR CURSANDO OU COMPLETO', idiomas: null, equipamentos: null },
      publico: 'VAGA PARA TODOS OS PÚBLICOS', pcd: [], match: 78,
    },
    {
      id: 2755, nome: 'Analista de WFM Junior Bilíngue', tipo: 'VAGA EXTERNA STAFF', nivel: 'EXPERIENTE',
      descricao: 'Planeje escalas e dimensionamento de operações internacionais, com inglês avançado e foco em dados.',
      sobre: '<p>Atue no time de Workforce Management garantindo que as operações tenham as pessoas certas no momento certo.</p><p>Suas atividades principais serão:</p><ul><li>Elaborar escalas e dimensionamento</li><li>Acompanhar indicadores em tempo real</li><li>Gerar relatórios para clientes internacionais</li></ul>',
      salario: 'A combinar', horarios: '08:00 às 17:48', escala: '5x2', jornada: '08h48',
      modalidade: 'Híbrido', local: 'São Paulo/SP', dataFim: '', aceitaMudanca: true,
      requisitos: ['Excel avançado', 'Raciocínio analítico'],
      reqCandidato: { experiencia: 'Junior', escolaridade: 'ENSINO SUPERIOR CURSANDO OU COMPLETO', idiomas: [{ idioma: 'INGLÊS', nivel: 'Avançado' }], equipamentos: null },
      publico: 'VAGA PARA TODOS OS PÚBLICOS', pcd: [], match: 72,
    },
    {
      id: 2900, nome: 'Jovem Aprendiz - Atendimento', tipo: 'JOVEM APRENDIZ EXPERT', nivel: 'ESTUDANTE',
      descricao: 'Primeira experiência profissional em atendimento, com curso de aprendizagem e horário compatível com os estudos.',
      sobre: '<p>Comece sua carreira com a gente! Você vai aprender na prática como funciona uma operação de atendimento.</p><p>Suas atividades principais serão:</p><ul><li>Apoiar o time em atendimentos simples</li><li>Organizar informações no sistema</li><li>Participar do curso de aprendizagem profissional</li></ul>',
      salario: 'R$ 1.100,00 + Benefícios', horarios: '09:00 às 13:00', escala: '5x2', jornada: '04h00',
      modalidade: 'Presencial', local: 'Santo Amaro – São Paulo/SP', dataFim: '2026-12-15', aceitaMudanca: false,
      requisitos: ['Ter entre 18 e 22 anos', 'Estar cursando o ensino médio ou ter concluído'],
      reqCandidato: { experiencia: null, escolaridade: 'ENSINO MÉDIO', idiomas: null, equipamentos: null },
      publico: 'VAGA PARA TODOS OS PÚBLICOS', pcd: [], match: 81,
    },
    {
      id: 2690, nome: 'Agente de atendimento - Vaga exclusiva para pessoas com deficiência - MG (PcD)', tipo: 'VAGA EXTERNA EXPERT', nivel: 'INICIANTE',
      descricao: 'Atendimento receptivo em ambiente acessível em Belo Horizonte, com treinamento pago e acompanhamento dedicado.',
      sobre: '<p>Estamos ampliando nosso time de atendimento em Belo Horizonte com um ambiente preparado para receber você.</p><p>Principais atividades:</p><ul><li>Atender clientes por voz e chat</li><li>Registrar ocorrências no sistema</li><li>Encaminhar solicitações às áreas responsáveis</li></ul>',
      salario: 'R$ 1.650,00 + RV até 15% + Benefícios', horarios: '09:00 às 15:20', escala: '6x1', jornada: '06h20',
      modalidade: 'Presencial', local: 'Savassi – Belo Horizonte/MG', dataFim: '2026-09-30', aceitaMudanca: false,
      requisitos: ['Ensino médio completo'],
      reqCandidato: { experiencia: null, escolaridade: 'ENSINO MÉDIO', idiomas: null, equipamentos: null },
      publico: 'VAGA EXCLUSIVA PARA PESSOAS COM DEFICIÊNCIA',
      pcd: ['fisica::Monoparesia', 'fisica::Nanismo', 'auditiva::Perda auditiva unilateral', 'visual::Visão monocular', 'mental::Transtorno do espectro autista'], match: 90,
    },
    {
      id: 2815, nome: 'Desenvolvedor Front-End Pleno', tipo: 'VAGA EXTERNA STAFF', nivel: 'EXPERIENTE',
      descricao: 'Desenvolva interfaces dos produtos digitais da TP com React e TypeScript em um time multidisciplinar.',
      sobre: '<p>Junte-se ao time de tecnologia que constrói as plataformas internas e de candidatos da TP.</p><p>Suas atividades principais serão:</p><ul><li>Desenvolver interfaces com React e TypeScript</li><li>Colaborar com design e back-end</li><li>Garantir acessibilidade e performance</li></ul>',
      salario: 'A combinar', horarios: '09:00 às 18:00', escala: '5x2', jornada: '08h48',
      modalidade: 'Remoto', local: 'Brasil', dataFim: '', aceitaMudanca: false,
      requisitos: ['React e TypeScript', 'Versionamento com Git'],
      reqCandidato: { experiencia: 'Pleno', escolaridade: 'ENSINO SUPERIOR CURSANDO OU COMPLETO', idiomas: [{ idioma: 'INGLÊS', nivel: 'Intermediário' }], equipamentos: null },
      publico: 'VAGA PARA TODOS OS PÚBLICOS', pcd: [], match: 64,
    },
  ];

  window.VEMSER = { VAGAS: VAGAS, BENEFICIOS: BENEFICIOS, BEM_ESTAR: BEM_ESTAR, EXPERIENCIAS: EXPERIENCIAS, PCD_LABELS: PCD_LABELS };
})();
