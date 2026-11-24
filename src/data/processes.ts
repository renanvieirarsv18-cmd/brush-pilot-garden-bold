export type ColumnId = "learn" | "practice" | "known";

export type BadgeKey = "matricula" | "email" | "sistema" | "planilha" | "unidade";

export type AvatarKey = "orange" | "teal" | "lavender" | "coral" | "blue" | "amber";

export type GuideStep = { title: string; detail: string };

export type GuideScript = { label: string; text: string };

export type ProcessDef = {
  id: string;
  title: string;
  summary: string;
  badge: BadgeKey;
  priority: 1 | 2 | 3;
  avatar: AvatarKey;
  section: string;
  defaultColumn?: ColumnId | null;
  custom?: boolean;
  steps: GuideStep[];
  warnings?: string[];
  scripts?: GuideScript[];
  contacts?: { label: string; value: string }[];
};

export const COLUMNS: { id: ColumnId; label: string; dot: string }[] = [
  { id: "learn", label: "A aprender", dot: "bg-todo" },
  { id: "practice", label: "Em prática", dot: "bg-doing" },
  { id: "known", label: "Já sei", dot: "bg-done" },
];

export const BADGE_LABEL: Record<BadgeKey, string> = {
  matricula: "Matrícula",
  email: "E-mail",
  sistema: "Sistema",
  planilha: "Planilha",
  unidade: "Unidade",
};

export const BADGE_CLASS: Record<BadgeKey, string> = {
  matricula: "bg-badge-matricula text-badge-matricula-ink",
  email: "bg-badge-email text-badge-email-ink",
  sistema: "bg-badge-sistema text-badge-sistema-ink",
  planilha: "bg-badge-planilha text-badge-planilha-ink",
  unidade: "bg-badge-unidade text-badge-unidade-ink",
};

export const AVATAR_CLASS: Record<AvatarKey, string> = {
  orange: "bg-avatar-orange",
  teal: "bg-avatar-teal",
  lavender: "bg-avatar-lavender",
  coral: "bg-avatar-coral",
  blue: "bg-avatar-blue",
  amber: "bg-avatar-amber",
};

export const SECTIONS = [
  "Matrícula",
  "E-mails",
  "Malotes",
  "Ofícios",
  "Recebimentos",
  "Planilhas",
  "Sistema",
  "Grupos e fotos",
  "Agenda",
  "Parceiros",
  "Extras",
] as const;

export const SECTION_BLURB: Record<string, string> = {
  Matrícula: "Documento completo no mesmo dia. Sem papel solto na recepção.",
  "E-mails": "Assunto, corpo e destinatário do jeito que o manual pede.",
  Malotes: "Um envelope por destino, com a etiqueta certa.",
  Ofícios: "Reserva da quadra: maior de 18 anos, uma hora por RG.",
  Recebimentos: "Confere, assina, escaneia e arquiva no dia.",
  Planilhas: "Atualize o BD antes de lançar. Não apague coluna.",
  Sistema: "Turma, aluno e presença em ccplbarueri.com.br/admin.",
  "Grupos e fotos": "Grupo só da administração, foto na horizontal.",
  Agenda: "Psicologia e bioimpedância nos horários verdes.",
  Parceiros: "Basquete e corte e costura têm ficha própria.",
  Extras: "Impressão em livreto e o que a recepção criar.",
  "Da recepção": "Processos que a equipe acrescentou neste guia.",
};

const TERMO = `Declaro serem verídicas as informações contidas nesta Ficha de Inscrição e que estou ciente das normas do Termo de Adesão descritas abaixo:
Fica acordado desde já que quaisquer alterações, sendo endereço, telefones pessoais e de recados, e-mails, laudos médicos e outros que se fizerem necessários, imediatamente o munícipe notificará o Centro de Capacitação Profissional e Lazer, onde possui matrícula;
Não trazer acompanhantes nas aulas ou em outra atividade;
Observar o horário de início das aulas evitando atrasos, bem como saídas antecipadas;
Zelar pelo material teórico e prático, se houver, para uso nas aulas;
Cuidar dos pertences pessoais, guardando-os em locais determinados pelo professor, ciente que o Centro de Capacitação não se responsabiliza por materiais perdidos e esquecidos;
Autorizar o uso da minha imagem para divulgação e promoção de forma global, das atividades realizadas neste local, conforme Lei Federal nº 9610/1988;
Respeitar o limite das faltas de acordo com a grade programática de cada curso, estando ciente de que 03 (três) faltas consecutivas ou sem entregar atividades on-line no caso do curso EAD sem justificativa no mês implicarão no cancelamento da participação, podendo a Administração evadir o munícipe da turma sem prévio aviso;
A administração poderá antecipar ou prorrogar datas de início de curso, sem prévia notificação em relação à data combinada;
O munícipe poderá requerer a qualquer momento a desistência do curso através de notificação ao Centro.`;

const ANAMNESE = `PRECISO DOS SEGUINTES DADOS
(RESPONDER O QUESTIONÁRIO ABAIXO POR COMPLETO)

* E-mail?
* Telefone fixo ou celular?
* Telefone para recado? (Mínimo 2 contatos em caso de emergência)
* Escolaridade? (Completa ou incompleta?)
* Estuda atualmente? (Se sim, qual período? / Qual o nome da escola?)
* Estado civil?
* Tem filhos? Se sim, quantos e quantos residem com você?
* Apresenta algum problema de saúde?
* Faz uso de medicamento contínuo?
* Qual medicamento? (Especifique)
* Possui alguma doença emocional ou deficiência? (Especifique)
* Possui alguma alergia? (Especifique)
* Sofreu alguma fratura nos últimos três meses?
* Está apto a realizar atividades físicas?
* Em caso de urgência poderá ser encaminhado para o SAMEB ou convênio?
* De onde conheceu o CCPL?
* Possui alguém para indicar? (Se sim, deixar nome e telefone)`;

const CONFIRMA_MENOR = `Solicito que confira as informações abaixo descritas para que possamos validar a sua matrícula. Se estiver tudo certo responda esta mensagem com OK.
Informações detalhadas de sua Matrícula:

Nome Completo:
RG: -    CPF: -
Nome do Responsável Legal:
RG: -    CPF: -
Endereço: RUA, nº - Bairro, BARUERI - SP, CEP: -
WhatsApp: -
Email: -

Curso: / dia das 00h às 00h / Início:
Curso: / Pré inscrição`;

const CONFIRMA_ADULTO = `Solicito que confira as informações abaixo descritas para que possamos validar a sua matrícula. Se estiver tudo certo responda esta mensagem com OK.
Informações detalhadas de sua Matrícula:

Nome Completo: -
RG: -    CPF: -
Endereço Completo: RUA, N- Bairro, BARUERI - SP, CEP: -
WhatsApp: -
Email: -

Curso: / Pré Inscrição`;

const BOAS_VINDAS = `Boas-Vindas ao Grupo da Turma!

Prezados alunos,

É com grande satisfação que damos as boas-vindas a todos ao grupo oficial da nossa turma! Este espaço foi criado com o intuito exclusivamente informativo, a fim de fornecer a vocês informações relevantes, atualizações e avisos importantes relacionados ao curso.

É importante ressaltar que apenas a administração e os professores terão permissão para enviar mensagens neste grupo. Isso garantirá que todas as informações compartilhadas sejam precisas e oficiais. Vocês não receberão mensagens desnecessárias ou indesejadas, mantendo assim o foco nas informações mais relevantes para o andamento do curso.

Estamos empenhados em proporcionar uma experiência de aprendizado excepcional para todos vocês. Agradecemos por fazerem parte deste curso e estamos ansiosos para um semestre produtivo e repleto de aprendizado. Contem conosco para fornecer o suporte necessário ao longo dessa jornada.

Atenciosamente, equipe CCPL Jardim Florida`;

const DESPEDIDA = `Queridos alunos,

Chegamos ao fim deste curso incrível juntos. Foram dias de aprendizado, descobertas e crescimento mútuo. Cada um de vocês trouxe sua energia única para essa jornada, tornando-a verdadeiramente especial. Ao nos despedirmos, levamos conosco não apenas o conhecimento adquirido, mas também as memórias compartilhadas e as amizades que se formaram. Que cada passo adiante seja um reflexo do esforço e dedicação que colocaram neste curso.

O grupo será desativado mas o CCPL Jd Florida sempre estará disponível para suas dúvidas, sugestões, elogios e críticas através do telefone (11) 4382-8210. Segue abaixo a lista de cursos disponíveis nas unidades CCPLs:

A partir dos 4 anos
- Ballet
- Arte Circense
- Jogos Lúdicos

A partir dos 6 anos
- Artesanato
- Artes Cênicas
- Inglês
- Reforço Escolar
- Canto e Coral
- Grafite
- Instrumento Musical – Violão
- Street Dance
- Informática
- Recreação

A partir dos 14 anos
- Dança do Ventre
- Danças e Ritmos
- Assistente Administrativo
- Auxiliar Contábil / RH
- Zumba
- Auxiliar de Logística
- Portaria e Recepção
- Confeitaria
- Maquiagem
- Capacitação de Babás
- Auxiliar de Veterinário e Petshop
- Empreendedorismo

A partir dos 16 anos
- Atendente de Farmácias e Drogarias
- Auxiliar de Cabeleireiro
- Auxiliar de Jardinagem

A partir dos 18 anos
- Dança de Salão – Ritmo Sertanejo
- Auxiliar de Piscineiro
- Auxiliar de Técnico de Segurança no Trabalho
- Cuidador de Idosos
- Culinária
- Depilação Profissional (Design de Sobrancelhas)
- Estética Corporal
- Estética Facial
- Extensão de Cílios
- Extensão e Design de Unhas (Alongamento em Geral)
- Manicure e Pedicure
- Micropigmentação e Fio a Fio`;

function card(
  partial: Omit<ProcessDef, "steps"> & { steps: GuideStep[] },
): ProcessDef {
  return partial;
}

export const PROCESSES: ProcessDef[] = [
  card({
    id: "ABA-241",
    title: "Matrícula presencial",
    summary: "No balcão, com a documentação completa, a ficha sai no mesmo dia. Nada fica solto na recepção.",
    badge: "matricula",
    priority: 3,
    avatar: "orange",
    section: "Matrícula",
    defaultColumn: "learn",
    warnings: [
      "Parte da documentação pode chegar pelo WhatsApp, desde que a matrícula termine no mesmo dia.",
      "Curso de dança exige atestado ou agendamento médico.",
      "O munícipe lê a ficha e o termo antes de assinar. Reforce as regras em voz alta.",
    ],
    contacts: [
      { label: "Sistema", value: "ccplbarueri.com.br/admin" },
      { label: "WhatsApp da capa", value: "(11) 4382-4684" },
      { label: "WhatsApp da unidade", value: "(11) 4382-8210" },
    ],
    scripts: [{ label: "Termo de adesão", text: TERMO }],
    steps: [
      { title: "Só comece com a documentação completa", detail: "RG/CPF do aluno, responsável se for menor, comprovante dos últimos 3 meses e foto 3x4. Sem o pacote, não abre ficha." },
      { title: "Matricule no sistema", detail: "Em ccplbarueri.com.br/admin, use Adicionar Aluno e lance os dados pessoais com o que está no documento." },
      { title: "Preencha a anamnese", detail: "As respostas são as do munícipe. Não complete de memória." },
      { title: "Marque os documentos entregues", detail: "Foto 3x4, comprovante, RG do responsável quando houver, atestado médico se a atividade for física." },
      { title: "Marque a unidade e os cursos", detail: "Unidade CCPL Abade Gonzaga e os cursos de interesse, com o período." },
      { title: "Salve a ficha", detail: "Use Cadastrar dados. Confira antes se a unidade e os cursos ficaram marcados." },
      { title: "Busque a ficha e abra o prontuário", detail: "Localize a inscrição recém-feita e clique em prontuário." },
      { title: "Imprima e confira", detail: "A ficha sai frente e verso. Olhe a visualização antes de mandar para a impressora." },
      { title: "Entregue para ler e assinar", detail: "O munícipe assina o campo dele. No campo do colaborador, escreva o nome de quem fez a matrícula." },
    ],
  }),
  card({
    id: "ABA-238",
    title: "Conferir documentação",
    summary: "O que aceitar de identidade, responsável, comprovante e foto antes de cadastrar qualquer pessoa.",
    badge: "matricula",
    priority: 3,
    avatar: "teal",
    section: "Matrícula",
    defaultColumn: "learn",
    warnings: [
      "A folha modelo da declaração é só orientação. Não preencha essa folha.",
      "Traga o comprovante junto da declaração. Endereço completo, letra de próprio punho, assinatura igual à do documento.",
    ],
    steps: [
      { title: "RG ou CPF do aluno", detail: "Pessoalmente ou por WhatsApp, em PDF ou foto legível, com os dados biográficos e biométricos do documento original." },
      { title: "Responsável, se for menor", detail: "Pai ou mãe como no RG/CP, tutor legal com tutela, ou instituição de acolhimento com documento de tutela. RG e CPF do responsável." },
      { title: "Comprovante dos últimos 3 meses", detail: "Aceite conta de água, luz, telefone ou fatura de cartão. Precisa ter titular, vencimento, número de registro (água, luz, internet) e CPF." },
      { title: "Recuse o que o manual recusa", detail: "Conta com mais de 3 meses, pacote de recebimento, conta com informação cortada, cadastro de prefeitura ou órgão terceiro." },
      { title: "Comprovante em nome de terceiro", detail: "Pais: sem documento extra. Avós: certidão de nascimento. Cônjuge: certidão de casamento. Outros: declaração de residência manuscrita mais o comprovante." },
      { title: "Pegue o modelo certo", detail: "Pasta 02. DIVERSOS SECRETARIA > 02. IMPRESSÕES. Imprima o modelo em branco e entregue para a pessoa escrever." },
      { title: "Foto 3x4", detail: "Faz parte do pacote da matrícula, junto com o restante." },
    ],
  }),
  card({
    id: "ABA-236",
    title: "Matrícula pelo WhatsApp",
    summary: "Pedido, anamnese e confirmação por mensagem. Só imprime depois do OK escrito.",
    badge: "matricula",
    priority: 3,
    avatar: "blue",
    section: "Matrícula",
    defaultColumn: "learn",
    warnings: [
      "Documento só em imagem nítida ou PDF.",
      "Confirmação aceita: OK, TUDO BEM, TUDO CERTO, CORRETO. Não aceite emoticon, GIF ou áudio.",
      "Imprima só depois do OK, para não deixar papel solto.",
    ],
    scripts: [
      { label: "Pedir documentos", text: "Documentos necessários para a matrícula:\n- RG/CPF do aluno\n- RG/CPF do responsável (se o aluno for menor de idade)\n- Comprovante de residência atualizado (últimos três meses)\n- Foto 3x4\n\nA documentação pode ser entregue pessoalmente ou enviada em foto legível ou PDF pelo WhatsApp." },
      { label: "Questionário de anamnese", text: ANAMNESE },
      { label: "Confirmação — menor", text: CONFIRMA_MENOR },
      { label: "Confirmação — adulto", text: CONFIRMA_ADULTO },
      { label: "Termo para incluir na confirmação", text: TERMO },
    ],
    steps: [
      { title: "Peça o pacote de documentos", detail: "RG/CPF do aluno, responsável se menor, comprovante dos últimos 3 meses e foto 3x4. Imagem nítida ou PDF." },
      { title: "Envie a anamnese completa", detail: "O munícipe responde o questionário inteiro. Não pule pergunta." },
      { title: "Monte a confirmação", detail: "Menor: nome, RG, CPF, responsável, endereço em Barueri, WhatsApp, e-mail e cursos. Adulto: os mesmos dados, sem o bloco do responsável." },
      { title: "Escreva cada curso", detail: "Dia, horário e data de início. Se ainda não há turma, marque Pré inscrição." },
      { title: "Inclua o termo de adesão", detail: "O texto do termo vai na mesma confirmação, antes do pedido de OK." },
      { title: "Espere o aceite escrito", detail: "Vale OK, TUDO BEM, TUDO CERTO ou CORRETO. Qualquer outro retorno, peça de novo por escrito." },
      { title: "Aí sim imprima", detail: "Ficha pelo fluxo presencial e documentos no Word. Pode juntar mais de um na folha, desde que cada um apareça inteiro." },
      { title: "Siga para a validação", detail: "A matrícula online só fecha com o modelo de validação preenchido e impresso." },
    ],
  }),
  card({
    id: "ABA-233",
    title: "Validar matrícula online",
    summary: "O modelo de validação recebe a data, o nome de quem atendeu e os prints do WhatsApp.",
    badge: "matricula",
    priority: 2,
    avatar: "coral",
    section: "Matrícula",
    defaultColumn: "learn",
    warnings: [
      "Na imagem, mexa só na altura. A altura é sempre 10 cm.",
      "Imprima somente as páginas que têm print, frente e verso.",
    ],
    steps: [
      { title: "Abra o modelo", detail: "Secretaria > Diversos / Impressões. O arquivo é o MODELO_VALIDAÇÃO DE MATRICULA ONLINE." },
      { title: "Troque data e nome", detail: "Data do dia e o nome de quem está na recepção. O resto do cabeçalho permanece." },
      { title: "Confira o cabeçalho", detail: "DATA, UNIDADE CCPL ABADE GONZAGA DOS SANTOS – JARDIM FLÓRIDA, RECEPÇÃO/FUNCIONÁRIO, PLATAFORMA WHATSAPP UNIDADE (11) 4382-8210, ANEXO." },
      { title: "Junte os prints", detail: "Tire o print no celular, encaminhe para o chat da unidade, baixe as fotos e insira no Word." },
      { title: "Ajuste só a altura", detail: "Cada imagem fica com 10 cm de altura. Não estique a largura por conta própria." },
      { title: "Imprima frente e verso", detail: "Arquivo > Imprimir. Só as páginas que têm print." },
    ],
  }),
  card({
    id: "ABA-229",
    title: "Solicitar PDA",
    summary: "Quando a pessoa já tem ficha em outro polo, o PDA vem por e-mail antes dos cursos daqui.",
    badge: "email",
    priority: 2,
    avatar: "blue",
    section: "E-mails",
    defaultColumn: "practice",
    scripts: [
      { label: "Assunto", text: "SOLICITAÇÃO DE PDA: #COD. DO ALUNO_NOME DO ALUNO" },
      { label: "Corpo", text: "Bom dia, tudo bem?\n\nPeço que por gentileza enviem o PDA #COD_NOME para realizar cursos nesta unidade.\n\nAtt" },
    ],
    steps: [
      { title: "Confirme que a ficha é de outro polo", detail: "PDA é para quem já está matriculado em outra unidade e vai cursar aqui." },
      { title: "Monte o assunto", detail: "SOLICITAÇÃO DE PDA: #COD. DO ALUNO_NOME DO ALUNO, com o código e o nome reais." },
      { title: "Use o corpo do manual", detail: "Bom dia, tudo bem? Peço que por gentileza enviem o PDA #COD_NOME para realizar cursos nesta unidade. Att." },
      { title: "Envie e acompanhe", detail: "Sem o PDA, não invente o histórico. Espere o polo de origem responder." },
    ],
  }),
  card({
    id: "ABA-226",
    title: "Empenhar presenças",
    summary: "No fim do dia, os links das aulas seguem para a coordenação geral e o consultor.",
    badge: "email",
    priority: 3,
    avatar: "orange",
    section: "E-mails",
    defaultColumn: "practice",
    contacts: [
      { label: "Coordenação geral", value: "coordenacaogeral@ccplbarueri.com.br" },
      { label: "Consultor Flórida", value: "consultorflorida@ccplbarueri.com.br" },
    ],
    scripts: [
      { label: "Assunto", text: "EMPENHAR PRESENÇAS NO SISTEMA_CHECKLIST_CCPL ABADE GONZAGA DOS SANTOS_DATA" },
      { label: "Corpo", text: "Boa tarde, Paulo!\n\nSegue o link para as listas de presença no sistema das aulas realizadas no dia DATA.\n\n[cole os links das aulas do dia]" },
    ],
    steps: [
      { title: "Junte os links do dia", detail: "Uma linha por aula realizada. O corpo do e-mail é a lista de links." },
      { title: "Copie o assunto", detail: "EMPENHAR PRESENÇAS NO SISTEMA_CHECKLIST_CCPL ABADE GONZAGA DOS SANTOS_ e a data, como 17.01.2025." },
      { title: "Mande para os dois", detail: "coordenacaogeral@ccplbarueri.com.br e consultorflorida@ccplbarueri.com.br." },
    ],
  }),
  card({
    id: "ABA-221",
    title: "Acompanhamento pedagógico",
    summary: "Dez minutos de aula, conteúdo comparado com o PDF do mês e um status claro no e-mail.",
    badge: "email",
    priority: 2,
    avatar: "teal",
    section: "E-mails",
    defaultColumn: "practice",
    warnings: [
      "Linguagem culta. Sem gíria.",
      "Mude só o nome e a turma. Texto em vermelho continua vermelho. Negrito continua negrito.",
      "Não altere o padrão do e-mail.",
    ],
    contacts: [
      { label: "Consultor Flórida", value: "consultorflorida@ccplbarueri.com.br" },
      { label: "Coordenação geral", value: "coordenacaogeral@ccplbarueri.com.br" },
    ],
    scripts: [
      { label: "Assunto", text: "ACOMPANHAMENTO PEDAGÓGICO_CHECKLIST CONSULTORES_CCPL ABADE GONZAGA DOS SANTOS_[data]" },
    ],
    steps: [
      { title: "Siga o calendário do mural", detail: "O acompanhamento sai na data que a coordenação deixou no quadro." },
      { title: "Assista 10 minutos", detail: "Anote o conteúdo aplicado com frase completa, do jeito que foi dado." },
      { title: "Copie o conteúdo programático", detail: "PDF em 00.PEDAGÓGICO, na pasta do mês, aula pela data. Ctrl+C para o e-mail." },
      { title: "Marque o status", detail: "CONTEÚDO NÃO APLICADO se divergiu. PARCIALMENTE APLICADO se veio pela metade. TOTALMENTE APLICADO se está igual." },
      { title: "Anexe uma foto da aula", detail: "A foto entra no mesmo e-mail. Troque apenas nome e turma." },
      { title: "Envie aos dois destinatários", detail: "Consultor Flórida e coordenação geral, no assunto padrão com a data." },
    ],
  }),
  card({
    id: "ABA-218",
    title: "Receber kit lanche",
    summary: "De segunda a sexta: duas vias assinadas, a de cima volta com o motorista, a outra vira PDF.",
    badge: "unidade",
    priority: 2,
    avatar: "lavender",
    section: "Recebimentos",
    defaultColumn: "known",
    contacts: [{ label: "Coordenação Flórida", value: "coordenacaoflorida@ccplbarueri.com.br" }],
    scripts: [
      { label: "Assunto", text: "ROMANEIO ENTREGA DE KIT LANCHE JARDIM FLÓRIDA REF DATA" },
      { label: "Corpo", text: "Bom dia, tudo bem!\n\nSegue cópia eletrônica do romaneio de entrega de kit lanche." },
    ],
    steps: [
      { title: "Deixe a caixa na cozinha", detail: "O kit chega de segunda a sexta. A equipe guarda o que foi deixado para a unidade." },
      { title: "Destaque as duas vias", detail: "Assine as duas. A via de cima volta com o motorista." },
      { title: "Escaneie no Ricoh", detail: "Configuração padrão. O PDF cai na pasta do scanner." },
      { title: "Nomeie o arquivo", detail: "ROMANEIO ENTREGA DE KIT LANCHE REF. e a data." },
      { title: "Mande o e-mail", detail: "Para coordenacaoflorida@ccplbarueri.com.br. Exemplo de assunto: ROMANEIO ENTREGA DE KIT LANCHE JARDIM FLÓRIDA REF 18.12.24." },
      { title: "Arquive", detail: "Secretaria > 01.RECEBIMENTOS > ROMANEIO KIT LANCHE. A via física vai para a pasta da coordenação." },
    ],
  }),
  card({
    id: "ABA-214",
    title: "Imprimir etiquetas",
    summary: "Uma etiqueta por envelope pardo, na mesa da coordenação. O papel entra de cabeça para baixo.",
    badge: "unidade",
    priority: 2,
    avatar: "amber",
    section: "Malotes",
    defaultColumn: "known",
    warnings: [
      "Quando o Word avisar da margem, clique em SIM. Antes disso, troque o tipo de papel.",
      "O erro de tamanho é esperado: abra o erro e mude a impressão manual para A4.",
    ],
    steps: [
      { title: "Ache o arquivo pronto", detail: "Secretaria > 02.DIVERSOS SECRETARIA > 02. IMPRESSÕES. Etiqueta em branco também fica embaixo da impressora, na pasta da secretaria." },
      { title: "Troque o papel antes de imprimir", detail: "Arquivo > Imprimir. Ajuste o tipo de papel. A etiqueta entra com a face para baixo." },
      { title: "Passe pelo aviso do Word", detail: "No aviso de margem, SIM. Se aparecer erro de tamanho, abra o erro e selecione A4 na impressão manual." },
      { title: "Cole no envelope", detail: "Uma etiqueta por envelope pardo, na mesa da coordenação." },
    ],
  }),
  card({
    id: "ABA-210",
    title: "Lançar planilha AZ",
    summary: "Atualize o BD, gere o número AZ, lance no sistema e escaneie a ficha inteira.",
    badge: "planilha",
    priority: 3,
    avatar: "coral",
    section: "Planilhas",
    defaultColumn: "known",
    scripts: [
      { label: "Nome do arquivo", text: "AZ_NOME DO ALUNO_#COD#_IDCOD DA TURMA" },
    ],
    steps: [
      { title: "Atualize o BD", detail: "Baixe a base, volte para a área BD da planilha AZ, selecione e Ctrl+V." },
      { title: "Inclua a ficha e o código", detail: "Lance a ficha e o código do aluno. Os campos básicos se completam." },
      { title: "Preserve o histórico e salve", detail: "Use Preservar histórico e depois Salvar." },
      { title: "Anote o número AZ", detail: "O número gerado entra na planilha e, em seguida, no sistema." },
      { title: "Escaneie a ficha toda", detail: "Não corte página. Salve na pasta correspondente." },
      { title: "Nomeie como o manual", detail: "AZ_NOME DO ALUNO_#COD#_IDCOD DA TURMA. O manual também cita o nome NOME DO ALUNO_#COD# — use o padrão da pasta daquela turma." },
    ],
  }),
  card({
    id: "ABA-205",
    title: "Abrir grupo da turma",
    summary: "Um grupo por turma. Quem fala é a administração e o professor. O aluno só lê.",
    badge: "sistema",
    priority: 2,
    avatar: "blue",
    section: "Grupos e fotos",
    defaultColumn: "known",
    warnings: [
      "Costura, Basquete e VidAtiva são parceria: esses grupos continuam abertos para o aluno escrever.",
      "Nos demais grupos do CCPL, só administradores publicam.",
    ],
    scripts: [
      { label: "Nome do grupo", text: "CODIGO DA TURMA_NOME DA TURMA_JF" },
      { label: "Boas-vindas", text: BOAS_VINDAS },
    ],
    steps: [
      { title: "Crie o grupo", detail: "Novo grupo. O primeiro a entrar é o professor ou o consultor pedagógico." },
      { title: "Nomeie no padrão", detail: "CODIGO DA TURMA_NOME DA TURMA_JF." },
      { title: "Coloque a imagem", detail: "A foto oficial está em 02.DIVERSOS SECRETARIA, na pasta de imagens." },
      { title: "Trave quem pode falar", detail: "Permissão para apenas administradores enviarem mensagem." },
      { title: "Adicione os alunos pelo código", detail: "Entre com o código da ficha, não com apelido." },
      { title: "Promova o professor", detail: "Se o professor ainda não for administrador, promova." },
      { title: "Mande as boas-vindas", detail: "Use o texto do manual e assine equipe CCPL Jardim Florida." },
    ],
  }),
  card({
    id: "ABA-201",
    title: "Emitir declaração",
    summary: "O modelo certo, o endereço da unidade e a assinatura de quem está presente.",
    badge: "unidade",
    priority: 1,
    avatar: "orange",
    section: "Agenda",
    defaultColumn: "known",
    contacts: [
      { label: "Endereço na declaração", value: "Centro de Capacitação Profissional e Lazer, Rua das Orquídeas, Nº 62, Jardim Flórida, Barueri-SP" },
    ],
    steps: [
      { title: "Abra o modelo que a pessoa pediu", detail: "Cada declaração tem o arquivo dela. Não reaproveite outro texto por cima." },
      { title: "Confira a linha do endereço", detail: "Centro de Capacitação Profissional e Lazer, Rua das Orquídeas, Nº 62, Jardim Flórida, Barueri-SP." },
      { title: "Troque os dados variáveis", detail: "Nome e RG, horário, curso, data e o nome do responsável, quando houver." },
      { title: "Imprima para assinar e carimbar", detail: "Quem assina é o responsável presente. Não entregue em branco." },
    ],
  }),
  card({
    id: "ABA-198",
    title: "Devolutiva do SAU",
    summary: "O SAU sai por e-mail. No campo Para, digite SAU para a lista aparecer.",
    badge: "email",
    priority: 2,
    avatar: "coral",
    section: "E-mails",
    contacts: [
      { label: "ADM Geral", value: "admgeral@ccplbarueri.com.br" },
      { label: "Consultor Paraíso", value: "consultorparaiso@ccplbarueri.com.br" },
      { label: "Coordenação Paraíso", value: "coordenacaoparaiso@ccplbarueri.com.br" },
      { label: "Coordenação geral", value: "coordenacaogeral@ccplbarueri.com.br" },
      { label: "Consultor Flórida", value: "consultorflorida@ccplbarueri.com.br" },
    ],
    scripts: [{ label: "Assunto", text: "DEVOLUTIVA_SAU_NOME_DATA" }],
    steps: [
      { title: "Abra um e-mail novo", detail: "No campo Para, escreva SAU para a lista de contatos aparecer." },
      { title: "Monte o assunto", detail: "DEVOLUTIVA_SAU_NOME_DATA. Exemplo do manual: NÁGILA BIANCA PAIXÃO MORAES_17.01.2025." },
      { title: "Mande para o grupo do SAU", detail: "O manual lista ADM Geral, Consultor Paraíso, Coordenação Paraíso, Coordenação Geral e Consultor Flórida." },
    ],
  }),
  card({
    id: "ABA-194",
    title: "Atraso dos professores",
    summary: "Manhã, tarde e noite: quem veio, quem faltou e quem chegou depois.",
    badge: "email",
    priority: 2,
    avatar: "amber",
    section: "E-mails",
    contacts: [
      { label: "Coordenação geral", value: "coordenacaogeral@ccplbarueri.com.br" },
      { label: "Consultor Flórida", value: "consultorflorida@ccplbarueri.com.br" },
    ],
    scripts: [
      { label: "Assunto", text: "CONTROLE DE AUSÊNCIA OU ATRASO DOS PROFESSORES_CHECKLIST CONSULTORES_CCPL ABADE GONZAGA DOS SANTOS_[data]" },
      { label: "Abertura", text: "Boa noite, Paulo!\n\nSegue o controle de ausência ou atraso dos professores referente ao dia DATA.\n\nMANHÃ\nNome — horário\n\nTARDE\nNome — horário\n\nNOITE\nNome — horário" },
    ],
    steps: [
      { title: "Separe os turnos", detail: "O corpo vai em MANHÃ, TARDE e NOITE, com nome e horário." },
      { title: "Marque presença ou falta", detail: "Presente no sinal do modelo. Falta: escreva (faltou) e a observação com o motivo." },
      { title: "Registre atraso", detail: "Anote o horário em que a pessoa chegou e escreva (atraso)." },
      { title: "Envie no assunto padrão", detail: "CONTROLE DE AUSÊNCIA OU ATRASO DOS PROFESSORES_CHECKLIST CONSULTORES_CCPL ABADE GONZAGA DOS SANTOS_ e a data. O exemplo do manual começa com “Boa noite, Paulo!”." },
    ],
  }),
  card({
    id: "ABA-190",
    title: "Enviar documento de funcionário",
    summary: "Tudo é escaneado. O assunto leva o tipo, o nome em maiúsculas e o mês.",
    badge: "email",
    priority: 2,
    avatar: "teal",
    section: "E-mails",
    contacts: [
      { label: "Dani", value: "rh2.semprevita@gmail.com" },
      { label: "Luana", value: "rh@gruposemprevita.org.br" },
      { label: "Coordenação Flórida", value: "coordenacaoflorida@ccplbarueri.com.br" },
      { label: "Coordenação geral", value: "coordenacaogeral@ccplbarueri.com.br" },
    ],
    scripts: [
      { label: "Assunto", text: "RELATÓRIO DE PRESTAÇÃO DE SERVIÇOS_NOME COMPLETO_MÊS" },
      { label: "Corpo", text: "Boa tarde!\n\nSegue em cópia eletrônica o documento \"NOME DO DOCUMENTO\".\nOriginal será enviado junto ao malote." },
    ],
    steps: [
      { title: "Escaneie todos os documentos", detail: "Nada de funcionário segue só em papel. O PDF é a cópia eletrônica." },
      { title: "Escreva o assunto em maiúsculas", detail: "Tipo do documento, nome completo e mês de referência. Exemplo: RELATÓRIO DE PRESTAÇÃO DE SERVIÇOS_ANDREIA DIAS_JANEIRO." },
      { title: "Avise que o original vai no malote", detail: "Corpo: Boa tarde! Segue em cópia eletrônica o documento. Original será enviado junto ao malote." },
      { title: "Copie quem o manual copia", detail: "No relatório de prestação, entram Dani, coordenação Flórida, Luana e a coordenação geral." },
    ],
  }),
  card({
    id: "ABA-186",
    title: "Montar o malote",
    summary: "Um envelope por destino. RHRB, RH Sempre Vita e Financeiro não se misturam.",
    badge: "unidade",
    priority: 2,
    avatar: "lavender",
    section: "Malotes",
    steps: [
      { title: "Envelope da RHRB", detail: "Informações da cozinheira, folha de ponto, lista de cesta básica e holerite." },
      { title: "Envelope do RH Sempre Vita", detail: "Demais funcionários do CCPL, folhas de ponto, lista e protocolo de cesta básica, holerites, contratos de estágio, relatórios de prestação de serviço e folhas de pagamento." },
      { title: "Envelope do Financeiro", detail: "Recebimento de itens, protocolo de itens frigoríficos e protocolo de água e gás." },
      { title: "Etiqueta e lacre", detail: "Uma etiqueta por envelope pardo. O original que já foi escaneado segue neste malote." },
    ],
  }),
  card({
    id: "ABA-182",
    title: "Criar uma etiqueta",
    summary: "Quando o tamanho pedido ainda não existe, a etiqueta nova nasce no Word.",
    badge: "unidade",
    priority: 1,
    avatar: "amber",
    section: "Malotes",
    steps: [
      { title: "Abra Correspondências", detail: "No Word: Correspondências > Etiquetas." },
      { title: "Entre em Opções", detail: "Opções > Nova etiqueta." },
      { title: "Grave o tamanho pedido", detail: "Use a medida que a coordenação passou. Salve com um nome que a próxima pessoa reconheça." },
      { title: "Imprima pelo caminho das etiquetas", detail: "Papel certo, face para baixo, aviso de margem em SIM, tamanho em A4 se o erro aparecer." },
    ],
  }),
  card({
    id: "ABA-178",
    title: "Ofício da quadra",
    summary: "Segunda, das 8h às 10h. Uma hora por RG. Só para quem tem 18 anos ou mais.",
    badge: "unidade",
    priority: 2,
    avatar: "blue",
    section: "Ofícios",
    warnings: [
      "Sem álcool, sem droga, sem comércio e sem política na quadra.",
      "Camisa e tênis. Devolve limpa. A unidade não responde por vandalismo de terceiro nem por objeto perdido.",
    ],
    scripts: [{ label: "Nome do arquivo", text: "OFICIO QUADRA_[NOME DO MUNÍCIPE]_[DATA]" }],
    steps: [
      { title: "Confira idade e horário", detail: "A distribuição é na segunda, 8h às 10h. Uma hora por RG. Menor de 18 não reserva." },
      { title: "Preencha o termo de responsabilidade", detail: "Data, Quadra Poliesportiva ou Society, nome, idade, WhatsApp e RG ou CPF de quem representa." },
      { title: "Leia o compromisso", detail: "Cuidar do espaço, sem álcool ou droga, sem comércio ou política, de camisa e tênis, devolver limpo. Uma hora, salvo extensão da coordenação." },
      { title: "Marque o dia e a unidade", detail: "Dia da semana marcado e unidade CCPL Abade Gonzaga dos Santos - Jardim Flórida. As duas assinaturas." },
      { title: "Anote no mural", detail: "Calendário OFICIOS e o mês: nome e horário." },
      { title: "Salve o arquivo", detail: "OFICIO QUADRA_NOME_DATA em 02.DIVERSOS SECRETARIA > ofícios. O termo impresso está em 02. IMPRESSÕES." },
    ],
  }),
  card({
    id: "ABA-174",
    title: "Receber hortifruti",
    summary: "De segunda a sexta, a conferência é na cozinha, com o motorista.",
    badge: "unidade",
    priority: 2,
    avatar: "teal",
    section: "Recebimentos",
    contacts: [{ label: "Carol", value: "canutri.marques@gmail.com" }],
    scripts: [{ label: "Nome do arquivo", text: "ROMANEIO DE ENTREGA HORTIFRUTI_JARDIM FLÓRIDA_DD.MM.AAAA" }],
    steps: [
      { title: "Confira na cozinha", detail: "De segunda a sexta, junto com o motorista. Não assine sem olhar a entrega." },
      { title: "Escaneie o romaneio", detail: "Nome: ROMANEIO DE ENTREGA HORTIFRUTI_JARDIM FLÓRIDA_ e a data." },
      { title: "Envie para a Carol", detail: "canutri.marques@gmail.com." },
      { title: "Arquive na coordenação", detail: "A via física fica na pasta da coordenação." },
    ],
  }),
  card({
    id: "ABA-170",
    title: "Receber açougue",
    summary: "Itens frigoríficos: confere, lança na planilha e o original vai no envelope do Financeiro.",
    badge: "unidade",
    priority: 2,
    avatar: "coral",
    section: "Recebimentos",
    contacts: [
      { label: "Financeiro", value: "financeiro@gruposemprevita.org.br" },
      { label: "Carol", value: "canutri.marques@gmail.com" },
    ],
    scripts: [
      { label: "Assunto", text: "RECEBIMENTO DE ITENS FRIGORÍFICOS_CCPL JARDIM FLÓRIDA_DATA" },
      { label: "Corpo", text: "Boa tarde!\n\nSegue em anexo cópia eletrônica do recebimento de itens frigoríficos.\nO original será encaminhado junto ao malote." },
    ],
    steps: [
      { title: "Confira com o motorista", detail: "Assine e date só depois da conferência." },
      { title: "Passe os dados para o Excel", detail: "Copie o que está no PDF. Duplique a linha modelo, renomeie pela data da entrega e preencha as linhas novas." },
      { title: "Mande os dois arquivos", detail: "O PDF e a planilha. Assunto no padrão RECEBIMENTO DE ITENS FRIGORÍFICOS_CCPL JARDIM FLÓRIDA_ e a data." },
      { title: "Guarde o original", detail: "Envelope do FINANCEIRO, na coordenação, para sair no malote." },
    ],
  }),
  card({
    id: "ABA-166",
    title: "Receber água e gás",
    summary: "Nota da Mutingaz escaneada, e-mail para o Financeiro e original no envelope do malote.",
    badge: "unidade",
    priority: 2,
    avatar: "blue",
    section: "Recebimentos",
    contacts: [{ label: "Financeiro", value: "financeiro@gruposemprevita.org.br" }],
    scripts: [
      { label: "Nome do arquivo", text: "NF MUTINGAZ_RECEBIMENTO_ÁGUA E GÁS_CCPL JARDIM FLÓRIDA_[DATA]" },
      { label: "Corpo", text: "Boa tarde!\n\nSegue em anexo cópia eletrônica do recebimento de água e gás.\nO original será encaminhado junto ao malote." },
    ],
    steps: [
      { title: "Escaneie a nota", detail: "Nome: NF MUTINGAZ_RECEBIMENTO_ÁGUA E GÁS_CCPL JARDIM FLÓRIDA_ e a data." },
      { title: "Envie ao Financeiro", detail: "financeiro@gruposemprevita.org.br. A coordenação Flórida pode ir em cópia, como no manual." },
      { title: "Não misture com o açougue", detail: "Água e gás tem assunto e pasta próprios. O frigorífico é outro recebimento." },
      { title: "Arquive", detail: "Envelope do FINANCEIRO e a pasta da coordenação." },
    ],
  }),
  card({
    id: "ABA-162",
    title: "Receber materiais",
    summary: "Pedagógico, papelaria, limpeza ou enfermagem: confere, nomeia e manda a cópia.",
    badge: "unidade",
    priority: 2,
    avatar: "lavender",
    section: "Recebimentos",
    scripts: [
      { label: "Nome do arquivo", text: "RECEBIMENTO_MATERIAIS_TIPO_CCPL JD FLÓRIDA_DD.MM.AAAA" },
      { label: "Corpo", text: "Boa tarde!\n\nSegue em anexo cópia eletrônica de \"NOME DO DOCUMENTO\"." },
    ],
    steps: [
      { title: "Confira a entrega", detail: "Escreva na lista o nome de quem recebeu e a data." },
      { title: "Escolha o tipo", detail: "PEDAGÓGICOS, PAPELARIA, LIMPEZA ou ENFERMAGEM." },
      { title: "Nomeie", detail: "RECEBIMENTO_MATERIAIS_(tipo)_CCPL JD FLÓRIDA_ e a data no formato DD.MM.AAAA." },
      { title: "Envie o e-mail", detail: "Boa tarde! Segue em anexo cópia eletrônica do documento, com o nome entre aspas." },
      { title: "Arquive nos dois lugares", detail: "Pasta correspondente em 01.RECEBIMENTOS e o fichário da coordenação." },
    ],
  }),
  card({
    id: "ABA-158",
    title: "Ativos e inativos",
    summary: "Inativo é quem desistiu. O caminho é o botão ao lado do código, com o BD atualizado.",
    badge: "planilha",
    priority: 2,
    avatar: "amber",
    section: "Planilhas",
    steps: [
      { title: "Atualize o BD", detail: "O mesmo caminho das outras planilhas: baixar, selecionar a área BD e colar." },
      { title: "Abra a planilha de ativos e inativos", detail: "Inativo significa que o aluno saiu." },
      { title: "Use o botão ao lado do código", detail: "Clique, busque o código, confirme com OK." },
      { title: "Tire o filtro e salve", detail: "Remova o filtro, selecione tudo, OK e salve." },
    ],
  }),
  card({
    id: "ABA-154",
    title: "Pré-inscritos",
    summary: "A base nova cola na aba inteira. Não apague coluna do arquivo baixado.",
    badge: "planilha",
    priority: 2,
    avatar: "teal",
    section: "Planilhas",
    warnings: [
      "Se aparecer um aviso sobre a aba de cursos de interesse, siga a orientação escrita na própria planilha. O manual não detalha o restante desse aviso.",
    ],
    steps: [
      { title: "Atualize o BD", detail: "Baixe a base antes de colar qualquer coisa." },
      { title: "Selecione o CCPL Abade Gonzaga", detail: "A colagem é desta unidade." },
      { title: "Copie a planilha baixada", detail: "Abra o arquivo recebido sem apagar colunas. Ctrl+C." },
      { title: "Cole na aba inteira", detail: "Selecione a planilha de pré-inscritos toda e Ctrl+V." },
    ],
  }),
  card({
    id: "ABA-150",
    title: "Lista de presença",
    summary: "A planilha espelha a lista de papel. Presença é a letra C maiúscula na data.",
    badge: "planilha",
    priority: 3,
    avatar: "orange",
    section: "Planilhas",
    steps: [
      { title: "Atualize o BD", detail: "Abra a lista e cole a base nova na área BD, como nas outras planilhas." },
      { title: "Inclua quem chegou no meio", detail: "Na lista da turma, use o espaço em branco ou o código em vermelho. Código na primeira coluna, status e a data da inclusão na observação." },
      { title: "Marque IDM se entrou depois do mês", detail: "O padrão do manual é IDM_ e o mês, como IDM_01.25." },
      { title: "Lance a justificativa de falta", detail: "Ache o aluno e a turma e preencha o campo de justificativa que a planilha já tem. Não crie coluna nova." },
      { title: "Passe a lista de papel", detail: "O que está na folha entra na célula da data. Presença é C maiúsculo." },
    ],
  }),
  card({
    id: "ABA-146",
    title: "Atestado e agendamento",
    summary: "O documento médico vira uma linha: código, tipo e data do papel.",
    badge: "planilha",
    priority: 2,
    avatar: "coral",
    section: "Planilhas",
    steps: [
      { title: "Atualize o BD", detail: "O mesmo atualizar da planilha AZ: baixar, selecionar a área e colar." },
      { title: "Código na primeira coluna", detail: "Use o código do aluno que está na ficha." },
      { title: "Escreva o tipo do documento", detail: "Atestado ou agendamento, igual ao papel que chegou." },
      { title: "Lance a data do documento", detail: "A data é a do atestado ou do agendamento, não a do dia em que você digitou." },
    ],
  }),
  card({
    id: "ABA-142",
    title: "Certificados",
    summary: "A pendência é digitada à mão. Sem protocolo assinado, o certificado não sai.",
    badge: "planilha",
    priority: 2,
    avatar: "lavender",
    section: "Planilhas",
    warnings: ["O protocolo é assinado antes da entrega."],
    steps: [
      { title: "Abra a aba de pendência", detail: "Os dados entram manualmente, inclusive a data de término que está no certificado." },
      { title: "Preencha o protocolo", detail: "Curso, turma e data de término." },
      { title: "Colha a assinatura", detail: "O protocolo assinado vem antes de entregar o certificado." },
      { title: "Entregue e registre", detail: "Se a própria pessoa retira: nome e data. Se for terceiro, também quem é, o parentesco e o RG ou CPF." },
    ],
  }),
  card({
    id: "ABA-138",
    title: "Controle de apostilas",
    summary: "Cada pedido de professor entra na planilha, com a quantidade e o curso.",
    badge: "planilha",
    priority: 1,
    avatar: "amber",
    section: "Planilhas",
    steps: [
      { title: "Abra a planilha de apostilas", detail: "Ela controla quantidade e curso." },
      { title: "Registre cada pedido", detail: "Toda vez que um professor pedir apostila, lance na hora. Não deixe para o fim da semana." },
    ],
  }),
  card({
    id: "ABA-134",
    title: "Presença de workshop",
    summary: "A lista impressa vai com o professor e volta depois da aula, com nome completo.",
    badge: "planilha",
    priority: 2,
    avatar: "teal",
    section: "Planilhas",
    steps: [
      { title: "Abra a pasta do mês", detail: "00.PEDAGÓGICO > 05-LISTAS DE PRESENÇA - WORKSHOP > ano > mês." },
      { title: "Imprima e entregue ao professor", detail: "A lista física sai antes da aula e retorna quando a aula acaba." },
      { title: "Quem já tem ficha", detail: "Entre pelo código. Nome completo." },
      { title: "Quem não tem ficha", detail: "NOME COMPLETO em maiúsculas e um asterisco *." },
      { title: "Marque a presença", detail: "Letra C maiúscula, como na lista comum." },
    ],
  }),
  card({
    id: "ABA-130",
    title: "Planilha de estoque",
    summary: "O sumário lista a planilha de estoque. O passo ilustrado não está no miolo — não chute coluna.",
    badge: "planilha",
    priority: 1,
    avatar: "blue",
    section: "Planilhas",
    warnings: ["Na dúvida sobre uma célula, pare e pergunte à coordenação."],
    steps: [
      { title: "Localize o arquivo com a coordenação", detail: "O item 6.9 do manual aponta a planilha. Confirme qual é o arquivo vigente antes de editar." },
      { title: "Não apague aba nem coluna", detail: "Se a planilha pedir base nova, baixe o BD, selecione a área e cole, no mesmo espírito das outras." },
      { title: "Registre só o que a coluna já pede", detail: "Movimento do dia nas colunas existentes. Comprovante de recebimento, quando houver, vai para 01.RECEBIMENTOS." },
    ],
  }),
  card({
    id: "ABA-126",
    title: "Planilhas online",
    summary: "SAU do mês, espera da bioimpedância e o horário de aulas que vai para o mural.",
    badge: "planilha",
    priority: 2,
    avatar: "lavender",
    section: "Planilhas",
    steps: [
      { title: "Confirme o SAU no mês", detail: "A entrega do SAU é confirmada na planilha online, dentro do mês." },
      { title: "Olhe a espera da bioimpedância", detail: "A aba Lista de Espera Bioimpedância é de onde saem as pessoas chamadas para a agenda." },
      { title: "Imprima o horário das aulas", detail: "A aba de horário é o calendário das turmas por dia, para consulta da recepção." },
    ],
  }),
  card({
    id: "ABA-122",
    title: "Incluir turma no sistema",
    summary: "Turma nova no administrativo: unidade Abade, professor, sala e as duas datas.",
    badge: "sistema",
    priority: 2,
    avatar: "orange",
    section: "Sistema",
    contacts: [{ label: "Sistema", value: "ccplbarueri.com.br/admin/Inicio" }],
    steps: [
      { title: "Entre no menu Turmas", detail: "ccplbarueri.com.br/admin/Inicio. O menu mostra ativas, concluídas, relatório e transferências." },
      { title: "Adicionar turma", detail: "Nome, unidade Abade, curso, horário, dias, professor, auxiliar, período e sala." },
      { title: "Complete o quadro", detail: "Quantidade ideal, consultor, coordenador, data de início e previsão de término." },
      { title: "Cadastre", detail: "Botão Cadastra Turma. Confira a unidade antes de salvar." },
    ],
  }),
  card({
    id: "ABA-118",
    title: "Incluir aluno na turma",
    summary: "Pelo relatório de turmas, trocando os últimos números do link até achar a turma certa.",
    badge: "sistema",
    priority: 3,
    avatar: "teal",
    section: "Sistema",
    steps: [
      { title: "Abra Turmas e o relatório", detail: "Entre no primeiro link de turma que a lista mostrar." },
      { title: "Troque o final do endereço", detail: "Os últimos números da URL são a turma. Mude até abrir a turma destino." },
      { title: "Adicionar aluno", detail: "Adicionar usuário pelo código da ficha." },
      { title: "Confirme no botão verde", detail: "Sem o código da ficha, não cadastre por nome parecido." },
    ],
  }),
  card({
    id: "ABA-114",
    title: "Lançar presença no sistema",
    summary: "A data nova nasce no botão verde. Cada aluno fica presente, falta ou afastado.",
    badge: "sistema",
    priority: 3,
    avatar: "coral",
    section: "Sistema",
    steps: [
      { title: "Abra a turma pelo mesmo caminho", detail: "Relatório de turmas e o link da turma, como na inclusão de aluno." },
      { title: "Some a data", detail: "O botão verde de mais cria a data da aula." },
      { title: "Marque um a um", detail: "Presença, falta ou afastado, de acordo com a lista." },
      { title: "Salve", detail: "Sem salvar, o empenho do dia sai errado." },
    ],
  }),
  card({
    id: "ABA-110",
    title: "Encerrar grupo da turma",
    summary: "Mensagem de fim, alunos saem primeiro e a conta do CCPL é a última.",
    badge: "sistema",
    priority: 2,
    avatar: "blue",
    section: "Grupos e fotos",
    scripts: [{ label: "Mensagem de encerramento", text: DESPEDIDA }],
    steps: [
      { title: "Envie a despedida", detail: "O texto do manual, com o telefone (11) 4382-8210 e a lista de cursos por idade." },
      { title: "Remova os alunos", detail: "Todos os alunos saem do grupo." },
      { title: "O CCPL sai por último", detail: "A conta da unidade é o último usuário removido." },
      { title: "Apague o grupo", detail: "Depois que a turma acabou, o grupo não fica aberto. Parcerias de Costura, Basquete e VidAtiva seguem a regra própria." },
    ],
  }),
  card({
    id: "ABA-106",
    title: "Fotos da turma",
    summary: "Toda aula do CCPL entra no relatório. Parceiro, pelo menos uma vez no mês. Sete a treze fotos.",
    badge: "unidade",
    priority: 2,
    avatar: "amber",
    section: "Grupos e fotos",
    warnings: [
      "Horizontal, 4:3, bem iluminada. Não corte aluno nem professor.",
      "Ângulos variados. De 7 a 13 fotos.",
    ],
    scripts: [
      { label: "Nome do arquivo", text: "JF_NOME DO CURSO_DIA DA SEMANA_00H00 ÀS 00H00_DD.MM.AAAA" },
    ],
    steps: [
      { title: "Fotografe a aula", detail: "Toda turma do CCPL, para o relatório. Turma parceira, no mínimo uma vez por mês." },
      { title: "Nomeie", detail: "Exemplo do manual: JF_DEPILAÇÃO PROFISSIONAL - DESIGN DE SOBRANCELHAS_SEGUNDA_18H00 ÀS 21H00_27.01.2025." },
      { title: "Poste no grupo da turma", detail: "Antes do arquivo, o nome do curso." },
      { title: "Baixe e compacte", detail: "O zip leva o nome da turma." },
      { title: "Extraia em JF_FOTOS", detail: "Pasta 00.PEDAGÓGICO / JF_FOTOS. Botão direito, extrair tudo, e apague o zip." },
    ],
  }),
  card({
    id: "ABA-102",
    title: "Agendar psicologia",
    summary: "Na agenda do Google, só o horário verde. Fora dele, não marque.",
    badge: "unidade",
    priority: 2,
    avatar: "lavender",
    section: "Agenda",
    warnings: [
      "O material avisa “Não agendar busca espontânea” quando essa orientação está na própria agenda. Respeite o aviso da agenda.",
    ],
    steps: [
      { title: "Abra a agenda e olhe o verde", detail: "Horário livre é o bloco verde. Não marque fora dele." },
      { title: "Escolha o motivo", detail: "Busca espontânea, quando o aluno pede; solicitação da psicóloga ou assistente social; ou matrícula." },
      { title: "Troque a cor do evento", detail: "A cor identifica o tipo do agendamento." },
      { title: "Selecione RECEPÇÃO e a unidade", detail: "O fim do evento é o dia da consulta, não um intervalo aberto." },
    ],
  }),
  card({
    id: "ABA-098",
    title: "Horários de bioimpedância",
    summary: "A grade nasce vazia, de dez em dez minutos, antes de chamar alguém da espera.",
    badge: "unidade",
    priority: 1,
    avatar: "teal",
    section: "Agenda",
    steps: [
      { title: "Crie os horários sem aluno", detail: "Blocos de 10 minutos. Ainda sem nome." },
      { title: "Ajuste os horários se precisar", detail: "Edite o intervalo antes de oferecer para a lista de espera." },
      { title: "Chame pela planilha online", detail: "As pessoas estão na Lista de Espera Bioimpedância." },
    ],
  }),
  card({
    id: "ABA-094",
    title: "Agendar bioimpedância",
    summary: "O evento leva código e nome completo, e muda de cor quando fica marcado.",
    badge: "unidade",
    priority: 2,
    avatar: "orange",
    section: "Agenda",
    scripts: [{ label: "Nome do evento", text: "#COD DO ALUNO_NOME COMPLETO" }],
    steps: [
      { title: "Abra um horário vazio", detail: "Só um horário que ainda não tem aluno." },
      { title: "Nomeie", detail: "#COD DO ALUNO_NOME COMPLETO." },
      { title: "Mude a cor", detail: "A cor mostra que aquele horário deixou de estar livre." },
      { title: "Avise a pessoa", detail: "A chamada sai para quem está na lista de espera." },
    ],
  }),
  card({
    id: "ABA-090",
    title: "Depois da bioimpedância",
    summary: "A ficha vai para a pasta do mês no Drive e a pessoa recebe a dela no WhatsApp.",
    badge: "unidade",
    priority: 2,
    avatar: "coral",
    section: "Agenda",
    steps: [
      { title: "Arquive no Drive", detail: "Pasta Bioimpedancia, dentro do mês da consulta." },
      { title: "Ache pelo código", detail: "Ctrl+F no código do aluno." },
      { title: "Envie no WhatsApp", detail: "A ficha daquela pessoa, não a pasta inteira." },
    ],
  }),
  card({
    id: "ABA-086",
    title: "Matrícula de basquete",
    summary: "Parceria com a Secretaria de Esportes. A anamnese é presencial, com atenção ao CPF.",
    badge: "matricula",
    priority: 2,
    avatar: "blue",
    section: "Parceiros",
    steps: [
      { title: "Abra a pasta do basquete", detail: "02.DIVERSOS SECRETARIA > BASQUETE: avaliação, ficha de anamnese e ficha de matrícula." },
      { title: "Preencha a anamnese na hora", detail: "Identificação, contato de emergência e CPF com calma. Não mande a pessoa levar a ficha para casa." },
      { title: "Passe o bloco de saúde", detail: "Deficiências que o formulário lista (autismo com suporte 1 a 3, TDAH, Down com raio-x cervical, intelectual, TOD, auditiva, visual, esquizofrenia e outras), medicamentos, quadro respiratório e asma." },
      { title: "Feche com PAR-Q e os termos", detail: "PAR-Q e os termos de responsabilidade assinados. O grupo de WhatsApp desta parceria permanece aberto para o aluno escrever." },
    ],
  }),
  card({
    id: "ABA-082",
    title: "Matrícula de corte e costura",
    summary: "Núcleo de Moda. Ficha presencial, três autorizações e certificado só com protocolo assinado.",
    badge: "matricula",
    priority: 2,
    avatar: "lavender",
    section: "Parceiros",
    warnings: [
      "Nome em verde na planilha: concluiu todos os módulos e não refaz.",
      "Nem todo certificado está no Jardim Flórida.",
    ],
    steps: [
      { title: "Receba RG, comprovante e foto 3x4", detail: "A ficha é presencial, do Núcleo de Moda de Barueri." },
      { title: "Colha as autorizações", detail: "Grupo de WhatsApp, indicação para entrevista de emprego, fotos e vídeos, e a assinatura da aluna." },
      { title: "Lance na LISTAS DE COSTURA", detail: "Pré-inscrições: data, nome completo, WhatsApp, período e módulo. Desistentes: nome completo e data." },
      { title: "Olhe a aba de certificados", detail: "ALUNAS 2023-2024 controla quem já fechou os módulos. Verde não repete o curso." },
      { title: "Entregue com protocolo", detail: "Protocolo assinado antes. A própria aluna: nome e data. Terceiro: quem, parentesco e RG ou CPF. Os certificados físicos ficam na caixa preta, em ordem alfabética, na recepção." },
    ],
  }),
  card({
    id: "ABA-078",
    title: "Imprimir em livreto",
    summary: "O PDF vira livreto frente e verso, encadernado à esquerda, em retrato.",
    badge: "unidade",
    priority: 1,
    avatar: "amber",
    section: "Extras",
    steps: [
      { title: "Abra o PDF e a impressão", detail: "Escolha o modo Livreto." },
      { title: "Frente e verso em subconjunto", detail: "Marque subconjunto frente e verso e o intervalo de folhas." },
      { title: "Encadernação à esquerda", detail: "Orientação retrato. Girar páginas automaticamente." },
      { title: "Formulários", detail: "Em formulários, Documento e marcações. Aí sim, Imprimir." },
    ],
  }),
  card({
    id: "ABA-074",
    title: "Agenda de e-mails",
    summary: "Quem recebe cada assunto. Na dúvida, este cartão evita e-mail no endereço errado.",
    badge: "email",
    priority: 3,
    avatar: "teal",
    section: "E-mails",
    contacts: [
      { label: "Unidade", value: "CCPL Abade Gonzaga dos Santos · Jardim Flórida" },
      { label: "Endereço", value: "Rua das Orquídeas, 62" },
      { label: "WhatsApp da capa", value: "(11) 4382-4684" },
      { label: "WhatsApp da unidade", value: "(11) 4382-8210" },
      { label: "Kit lanche", value: "coordenacaoflorida@ccplbarueri.com.br" },
      { label: "Hortifruti · Carol", value: "canutri.marques@gmail.com" },
      { label: "Consultor Flórida", value: "consultorflorida@ccplbarueri.com.br" },
      { label: "Coordenação geral", value: "coordenacaogeral@ccplbarueri.com.br" },
      { label: "Financeiro", value: "financeiro@gruposemprevita.org.br" },
      { label: "ADM Geral", value: "admgeral@ccplbarueri.com.br" },
      { label: "Consultor Paraíso", value: "consultorparaiso@ccplbarueri.com.br" },
      { label: "Coordenação Paraíso", value: "coordenacaoparaiso@ccplbarueri.com.br" },
      { label: "Cozinheira · RHRB", value: "rbalimentacao.rh@gmail.com" },
      { label: "Contador", value: "adm.printsuporte@gmail.com" },
      { label: "Dani · RH", value: "rh2.semprevita@gmail.com" },
      { label: "Luana · RH", value: "rh@gruposemprevita.org.br" },
    ],
    steps: [
      { title: "Kit lanche", detail: "Coordenação Flórida." },
      { title: "Hortifruti", detail: "Carol, nutricionista." },
      { title: "Cestas, frigorífico, água e gás", detail: "Financeiro." },
      { title: "Acompanhamento, atraso e empenho", detail: "Consultor Flórida e coordenação geral." },
      { title: "SAU", detail: "Digite SAU no Para. O manual também lista ADM Geral, Paraíso e Flórida." },
      { title: "Cozinha, contador e demais funcionários", detail: "RHRB para a cozinheira, o e-mail de TI para o contador, Dani e Luana para o restante da equipe." },
    ],
  }),
];
