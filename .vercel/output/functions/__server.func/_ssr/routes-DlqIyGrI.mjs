import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Copy, i as Plus, o as ChevronRight, r as Search, s as Check, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DlqIyGrI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLUMNS = [
	{
		id: "learn",
		label: "A aprender",
		dot: "bg-todo"
	},
	{
		id: "practice",
		label: "Em prática",
		dot: "bg-doing"
	},
	{
		id: "known",
		label: "Já sei",
		dot: "bg-done"
	}
];
var BADGE_LABEL = {
	matricula: "Matrícula",
	email: "E-mail",
	sistema: "Sistema",
	planilha: "Planilha",
	unidade: "Unidade"
};
var BADGE_CLASS = {
	matricula: "bg-badge-matricula text-badge-matricula-ink",
	email: "bg-badge-email text-badge-email-ink",
	sistema: "bg-badge-sistema text-badge-sistema-ink",
	planilha: "bg-badge-planilha text-badge-planilha-ink",
	unidade: "bg-badge-unidade text-badge-unidade-ink"
};
var AVATAR_CLASS = {
	orange: "bg-avatar-orange",
	teal: "bg-avatar-teal",
	lavender: "bg-avatar-lavender",
	coral: "bg-avatar-coral",
	blue: "bg-avatar-blue",
	amber: "bg-avatar-amber"
};
var SECTIONS = [
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
	"Extras"
];
var SECTION_BLURB = {
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
	"Da recepção": "Processos que a equipe acrescentou neste guia."
};
var TERMO = `Declaro serem verídicas as informações contidas nesta Ficha de Inscrição e que estou ciente das normas do Termo de Adesão descritas abaixo:
Fica acordado desde já que quaisquer alterações, sendo endereço, telefones pessoais e de recados, e-mails, laudos médicos e outros que se fizerem necessários, imediatamente o munícipe notificará o Centro de Capacitação Profissional e Lazer, onde possui matrícula;
Não trazer acompanhantes nas aulas ou em outra atividade;
Observar o horário de início das aulas evitando atrasos, bem como saídas antecipadas;
Zelar pelo material teórico e prático, se houver, para uso nas aulas;
Cuidar dos pertences pessoais, guardando-os em locais determinados pelo professor, ciente que o Centro de Capacitação não se responsabiliza por materiais perdidos e esquecidos;
Autorizar o uso da minha imagem para divulgação e promoção de forma global, das atividades realizadas neste local, conforme Lei Federal nº 9610/1988;
Respeitar o limite das faltas de acordo com a grade programática de cada curso, estando ciente de que 03 (três) faltas consecutivas ou sem entregar atividades on-line no caso do curso EAD sem justificativa no mês implicarão no cancelamento da participação, podendo a Administração evadir o munícipe da turma sem prévio aviso;
A administração poderá antecipar ou prorrogar datas de início de curso, sem prévia notificação em relação à data combinada;
O munícipe poderá requerer a qualquer momento a desistência do curso através de notificação ao Centro.`;
var ANAMNESE = `PRECISO DOS SEGUINTES DADOS
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
var CONFIRMA_MENOR = `Solicito que confira as informações abaixo descritas para que possamos validar a sua matrícula. Se estiver tudo certo responda esta mensagem com OK.
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
var CONFIRMA_ADULTO = `Solicito que confira as informações abaixo descritas para que possamos validar a sua matrícula. Se estiver tudo certo responda esta mensagem com OK.
Informações detalhadas de sua Matrícula:

Nome Completo: -
RG: -    CPF: -
Endereço Completo: RUA, N- Bairro, BARUERI - SP, CEP: -
WhatsApp: -
Email: -

Curso: / Pré Inscrição`;
var BOAS_VINDAS = `Boas-Vindas ao Grupo da Turma!

Prezados alunos,

É com grande satisfação que damos as boas-vindas a todos ao grupo oficial da nossa turma! Este espaço foi criado com o intuito exclusivamente informativo, a fim de fornecer a vocês informações relevantes, atualizações e avisos importantes relacionados ao curso.

É importante ressaltar que apenas a administração e os professores terão permissão para enviar mensagens neste grupo. Isso garantirá que todas as informações compartilhadas sejam precisas e oficiais. Vocês não receberão mensagens desnecessárias ou indesejadas, mantendo assim o foco nas informações mais relevantes para o andamento do curso.

Estamos empenhados em proporcionar uma experiência de aprendizado excepcional para todos vocês. Agradecemos por fazerem parte deste curso e estamos ansiosos para um semestre produtivo e repleto de aprendizado. Contem conosco para fornecer o suporte necessário ao longo dessa jornada.

Atenciosamente, equipe CCPL Jardim Florida`;
var DESPEDIDA = `Queridos alunos,

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
function card(partial) {
	return partial;
}
var PROCESSES = [
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
			"O munícipe lê a ficha e o termo antes de assinar. Reforce as regras em voz alta."
		],
		contacts: [
			{
				label: "Sistema",
				value: "ccplbarueri.com.br/admin"
			},
			{
				label: "WhatsApp da capa",
				value: "(11) 4382-4684"
			},
			{
				label: "WhatsApp da unidade",
				value: "(11) 4382-8210"
			}
		],
		scripts: [{
			label: "Termo de adesão",
			text: TERMO
		}],
		steps: [
			{
				title: "Só comece com a documentação completa",
				detail: "RG/CPF do aluno, responsável se for menor, comprovante dos últimos 3 meses e foto 3x4. Sem o pacote, não abre ficha."
			},
			{
				title: "Matricule no sistema",
				detail: "Em ccplbarueri.com.br/admin, use Adicionar Aluno e lance os dados pessoais com o que está no documento."
			},
			{
				title: "Preencha a anamnese",
				detail: "As respostas são as do munícipe. Não complete de memória."
			},
			{
				title: "Marque os documentos entregues",
				detail: "Foto 3x4, comprovante, RG do responsável quando houver, atestado médico se a atividade for física."
			},
			{
				title: "Marque a unidade e os cursos",
				detail: "Unidade CCPL Abade Gonzaga e os cursos de interesse, com o período."
			},
			{
				title: "Salve a ficha",
				detail: "Use Cadastrar dados. Confira antes se a unidade e os cursos ficaram marcados."
			},
			{
				title: "Busque a ficha e abra o prontuário",
				detail: "Localize a inscrição recém-feita e clique em prontuário."
			},
			{
				title: "Imprima e confira",
				detail: "A ficha sai frente e verso. Olhe a visualização antes de mandar para a impressora."
			},
			{
				title: "Entregue para ler e assinar",
				detail: "O munícipe assina o campo dele. No campo do colaborador, escreva o nome de quem fez a matrícula."
			}
		]
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
		warnings: ["A folha modelo da declaração é só orientação. Não preencha essa folha.", "Traga o comprovante junto da declaração. Endereço completo, letra de próprio punho, assinatura igual à do documento."],
		steps: [
			{
				title: "RG ou CPF do aluno",
				detail: "Pessoalmente ou por WhatsApp, em PDF ou foto legível, com os dados biográficos e biométricos do documento original."
			},
			{
				title: "Responsável, se for menor",
				detail: "Pai ou mãe como no RG/CP, tutor legal com tutela, ou instituição de acolhimento com documento de tutela. RG e CPF do responsável."
			},
			{
				title: "Comprovante dos últimos 3 meses",
				detail: "Aceite conta de água, luz, telefone ou fatura de cartão. Precisa ter titular, vencimento, número de registro (água, luz, internet) e CPF."
			},
			{
				title: "Recuse o que o manual recusa",
				detail: "Conta com mais de 3 meses, pacote de recebimento, conta com informação cortada, cadastro de prefeitura ou órgão terceiro."
			},
			{
				title: "Comprovante em nome de terceiro",
				detail: "Pais: sem documento extra. Avós: certidão de nascimento. Cônjuge: certidão de casamento. Outros: declaração de residência manuscrita mais o comprovante."
			},
			{
				title: "Pegue o modelo certo",
				detail: "Pasta 02. DIVERSOS SECRETARIA > 02. IMPRESSÕES. Imprima o modelo em branco e entregue para a pessoa escrever."
			},
			{
				title: "Foto 3x4",
				detail: "Faz parte do pacote da matrícula, junto com o restante."
			}
		]
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
			"Imprima só depois do OK, para não deixar papel solto."
		],
		scripts: [
			{
				label: "Pedir documentos",
				text: "Documentos necessários para a matrícula:\n- RG/CPF do aluno\n- RG/CPF do responsável (se o aluno for menor de idade)\n- Comprovante de residência atualizado (últimos três meses)\n- Foto 3x4\n\nA documentação pode ser entregue pessoalmente ou enviada em foto legível ou PDF pelo WhatsApp."
			},
			{
				label: "Questionário de anamnese",
				text: ANAMNESE
			},
			{
				label: "Confirmação — menor",
				text: CONFIRMA_MENOR
			},
			{
				label: "Confirmação — adulto",
				text: CONFIRMA_ADULTO
			},
			{
				label: "Termo para incluir na confirmação",
				text: TERMO
			}
		],
		steps: [
			{
				title: "Peça o pacote de documentos",
				detail: "RG/CPF do aluno, responsável se menor, comprovante dos últimos 3 meses e foto 3x4. Imagem nítida ou PDF."
			},
			{
				title: "Envie a anamnese completa",
				detail: "O munícipe responde o questionário inteiro. Não pule pergunta."
			},
			{
				title: "Monte a confirmação",
				detail: "Menor: nome, RG, CPF, responsável, endereço em Barueri, WhatsApp, e-mail e cursos. Adulto: os mesmos dados, sem o bloco do responsável."
			},
			{
				title: "Escreva cada curso",
				detail: "Dia, horário e data de início. Se ainda não há turma, marque Pré inscrição."
			},
			{
				title: "Inclua o termo de adesão",
				detail: "O texto do termo vai na mesma confirmação, antes do pedido de OK."
			},
			{
				title: "Espere o aceite escrito",
				detail: "Vale OK, TUDO BEM, TUDO CERTO ou CORRETO. Qualquer outro retorno, peça de novo por escrito."
			},
			{
				title: "Aí sim imprima",
				detail: "Ficha pelo fluxo presencial e documentos no Word. Pode juntar mais de um na folha, desde que cada um apareça inteiro."
			},
			{
				title: "Siga para a validação",
				detail: "A matrícula online só fecha com o modelo de validação preenchido e impresso."
			}
		]
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
		warnings: ["Na imagem, mexa só na altura. A altura é sempre 10 cm.", "Imprima somente as páginas que têm print, frente e verso."],
		steps: [
			{
				title: "Abra o modelo",
				detail: "Secretaria > Diversos / Impressões. O arquivo é o MODELO_VALIDAÇÃO DE MATRICULA ONLINE."
			},
			{
				title: "Troque data e nome",
				detail: "Data do dia e o nome de quem está na recepção. O resto do cabeçalho permanece."
			},
			{
				title: "Confira o cabeçalho",
				detail: "DATA, UNIDADE CCPL ABADE GONZAGA DOS SANTOS – JARDIM FLÓRIDA, RECEPÇÃO/FUNCIONÁRIO, PLATAFORMA WHATSAPP UNIDADE (11) 4382-8210, ANEXO."
			},
			{
				title: "Junte os prints",
				detail: "Tire o print no celular, encaminhe para o chat da unidade, baixe as fotos e insira no Word."
			},
			{
				title: "Ajuste só a altura",
				detail: "Cada imagem fica com 10 cm de altura. Não estique a largura por conta própria."
			},
			{
				title: "Imprima frente e verso",
				detail: "Arquivo > Imprimir. Só as páginas que têm print."
			}
		]
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
		scripts: [{
			label: "Assunto",
			text: "SOLICITAÇÃO DE PDA: #COD. DO ALUNO_NOME DO ALUNO"
		}, {
			label: "Corpo",
			text: "Bom dia, tudo bem?\n\nPeço que por gentileza enviem o PDA #COD_NOME para realizar cursos nesta unidade.\n\nAtt"
		}],
		steps: [
			{
				title: "Confirme que a ficha é de outro polo",
				detail: "PDA é para quem já está matriculado em outra unidade e vai cursar aqui."
			},
			{
				title: "Monte o assunto",
				detail: "SOLICITAÇÃO DE PDA: #COD. DO ALUNO_NOME DO ALUNO, com o código e o nome reais."
			},
			{
				title: "Use o corpo do manual",
				detail: "Bom dia, tudo bem? Peço que por gentileza enviem o PDA #COD_NOME para realizar cursos nesta unidade. Att."
			},
			{
				title: "Envie e acompanhe",
				detail: "Sem o PDA, não invente o histórico. Espere o polo de origem responder."
			}
		]
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
		contacts: [{
			label: "Coordenação geral",
			value: "coordenacaogeral@ccplbarueri.com.br"
		}, {
			label: "Consultor Flórida",
			value: "consultorflorida@ccplbarueri.com.br"
		}],
		scripts: [{
			label: "Assunto",
			text: "EMPENHAR PRESENÇAS NO SISTEMA_CHECKLIST_CCPL ABADE GONZAGA DOS SANTOS_DATA"
		}, {
			label: "Corpo",
			text: "Boa tarde, Paulo!\n\nSegue o link para as listas de presença no sistema das aulas realizadas no dia DATA.\n\n[cole os links das aulas do dia]"
		}],
		steps: [
			{
				title: "Junte os links do dia",
				detail: "Uma linha por aula realizada. O corpo do e-mail é a lista de links."
			},
			{
				title: "Copie o assunto",
				detail: "EMPENHAR PRESENÇAS NO SISTEMA_CHECKLIST_CCPL ABADE GONZAGA DOS SANTOS_ e a data, como 17.01.2025."
			},
			{
				title: "Mande para os dois",
				detail: "coordenacaogeral@ccplbarueri.com.br e consultorflorida@ccplbarueri.com.br."
			}
		]
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
			"Não altere o padrão do e-mail."
		],
		contacts: [{
			label: "Consultor Flórida",
			value: "consultorflorida@ccplbarueri.com.br"
		}, {
			label: "Coordenação geral",
			value: "coordenacaogeral@ccplbarueri.com.br"
		}],
		scripts: [{
			label: "Assunto",
			text: "ACOMPANHAMENTO PEDAGÓGICO_CHECKLIST CONSULTORES_CCPL ABADE GONZAGA DOS SANTOS_[data]"
		}],
		steps: [
			{
				title: "Siga o calendário do mural",
				detail: "O acompanhamento sai na data que a coordenação deixou no quadro."
			},
			{
				title: "Assista 10 minutos",
				detail: "Anote o conteúdo aplicado com frase completa, do jeito que foi dado."
			},
			{
				title: "Copie o conteúdo programático",
				detail: "PDF em 00.PEDAGÓGICO, na pasta do mês, aula pela data. Ctrl+C para o e-mail."
			},
			{
				title: "Marque o status",
				detail: "CONTEÚDO NÃO APLICADO se divergiu. PARCIALMENTE APLICADO se veio pela metade. TOTALMENTE APLICADO se está igual."
			},
			{
				title: "Anexe uma foto da aula",
				detail: "A foto entra no mesmo e-mail. Troque apenas nome e turma."
			},
			{
				title: "Envie aos dois destinatários",
				detail: "Consultor Flórida e coordenação geral, no assunto padrão com a data."
			}
		]
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
		contacts: [{
			label: "Coordenação Flórida",
			value: "coordenacaoflorida@ccplbarueri.com.br"
		}],
		scripts: [{
			label: "Assunto",
			text: "ROMANEIO ENTREGA DE KIT LANCHE JARDIM FLÓRIDA REF DATA"
		}, {
			label: "Corpo",
			text: "Bom dia, tudo bem!\n\nSegue cópia eletrônica do romaneio de entrega de kit lanche."
		}],
		steps: [
			{
				title: "Deixe a caixa na cozinha",
				detail: "O kit chega de segunda a sexta. A equipe guarda o que foi deixado para a unidade."
			},
			{
				title: "Destaque as duas vias",
				detail: "Assine as duas. A via de cima volta com o motorista."
			},
			{
				title: "Escaneie no Ricoh",
				detail: "Configuração padrão. O PDF cai na pasta do scanner."
			},
			{
				title: "Nomeie o arquivo",
				detail: "ROMANEIO ENTREGA DE KIT LANCHE REF. e a data."
			},
			{
				title: "Mande o e-mail",
				detail: "Para coordenacaoflorida@ccplbarueri.com.br. Exemplo de assunto: ROMANEIO ENTREGA DE KIT LANCHE JARDIM FLÓRIDA REF 18.12.24."
			},
			{
				title: "Arquive",
				detail: "Secretaria > 01.RECEBIMENTOS > ROMANEIO KIT LANCHE. A via física vai para a pasta da coordenação."
			}
		]
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
		warnings: ["Quando o Word avisar da margem, clique em SIM. Antes disso, troque o tipo de papel.", "O erro de tamanho é esperado: abra o erro e mude a impressão manual para A4."],
		steps: [
			{
				title: "Ache o arquivo pronto",
				detail: "Secretaria > 02.DIVERSOS SECRETARIA > 02. IMPRESSÕES. Etiqueta em branco também fica embaixo da impressora, na pasta da secretaria."
			},
			{
				title: "Troque o papel antes de imprimir",
				detail: "Arquivo > Imprimir. Ajuste o tipo de papel. A etiqueta entra com a face para baixo."
			},
			{
				title: "Passe pelo aviso do Word",
				detail: "No aviso de margem, SIM. Se aparecer erro de tamanho, abra o erro e selecione A4 na impressão manual."
			},
			{
				title: "Cole no envelope",
				detail: "Uma etiqueta por envelope pardo, na mesa da coordenação."
			}
		]
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
		scripts: [{
			label: "Nome do arquivo",
			text: "AZ_NOME DO ALUNO_#COD#_IDCOD DA TURMA"
		}],
		steps: [
			{
				title: "Atualize o BD",
				detail: "Baixe a base, volte para a área BD da planilha AZ, selecione e Ctrl+V."
			},
			{
				title: "Inclua a ficha e o código",
				detail: "Lance a ficha e o código do aluno. Os campos básicos se completam."
			},
			{
				title: "Preserve o histórico e salve",
				detail: "Use Preservar histórico e depois Salvar."
			},
			{
				title: "Anote o número AZ",
				detail: "O número gerado entra na planilha e, em seguida, no sistema."
			},
			{
				title: "Escaneie a ficha toda",
				detail: "Não corte página. Salve na pasta correspondente."
			},
			{
				title: "Nomeie como o manual",
				detail: "AZ_NOME DO ALUNO_#COD#_IDCOD DA TURMA. O manual também cita o nome NOME DO ALUNO_#COD# — use o padrão da pasta daquela turma."
			}
		]
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
		warnings: ["Costura, Basquete e VidAtiva são parceria: esses grupos continuam abertos para o aluno escrever.", "Nos demais grupos do CCPL, só administradores publicam."],
		scripts: [{
			label: "Nome do grupo",
			text: "CODIGO DA TURMA_NOME DA TURMA_JF"
		}, {
			label: "Boas-vindas",
			text: BOAS_VINDAS
		}],
		steps: [
			{
				title: "Crie o grupo",
				detail: "Novo grupo. O primeiro a entrar é o professor ou o consultor pedagógico."
			},
			{
				title: "Nomeie no padrão",
				detail: "CODIGO DA TURMA_NOME DA TURMA_JF."
			},
			{
				title: "Coloque a imagem",
				detail: "A foto oficial está em 02.DIVERSOS SECRETARIA, na pasta de imagens."
			},
			{
				title: "Trave quem pode falar",
				detail: "Permissão para apenas administradores enviarem mensagem."
			},
			{
				title: "Adicione os alunos pelo código",
				detail: "Entre com o código da ficha, não com apelido."
			},
			{
				title: "Promova o professor",
				detail: "Se o professor ainda não for administrador, promova."
			},
			{
				title: "Mande as boas-vindas",
				detail: "Use o texto do manual e assine equipe CCPL Jardim Florida."
			}
		]
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
		contacts: [{
			label: "Endereço na declaração",
			value: "Centro de Capacitação Profissional e Lazer, Rua das Orquídeas, Nº 62, Jardim Flórida, Barueri-SP"
		}],
		steps: [
			{
				title: "Abra o modelo que a pessoa pediu",
				detail: "Cada declaração tem o arquivo dela. Não reaproveite outro texto por cima."
			},
			{
				title: "Confira a linha do endereço",
				detail: "Centro de Capacitação Profissional e Lazer, Rua das Orquídeas, Nº 62, Jardim Flórida, Barueri-SP."
			},
			{
				title: "Troque os dados variáveis",
				detail: "Nome e RG, horário, curso, data e o nome do responsável, quando houver."
			},
			{
				title: "Imprima para assinar e carimbar",
				detail: "Quem assina é o responsável presente. Não entregue em branco."
			}
		]
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
			{
				label: "ADM Geral",
				value: "admgeral@ccplbarueri.com.br"
			},
			{
				label: "Consultor Paraíso",
				value: "consultorparaiso@ccplbarueri.com.br"
			},
			{
				label: "Coordenação Paraíso",
				value: "coordenacaoparaiso@ccplbarueri.com.br"
			},
			{
				label: "Coordenação geral",
				value: "coordenacaogeral@ccplbarueri.com.br"
			},
			{
				label: "Consultor Flórida",
				value: "consultorflorida@ccplbarueri.com.br"
			}
		],
		scripts: [{
			label: "Assunto",
			text: "DEVOLUTIVA_SAU_NOME_DATA"
		}],
		steps: [
			{
				title: "Abra um e-mail novo",
				detail: "No campo Para, escreva SAU para a lista de contatos aparecer."
			},
			{
				title: "Monte o assunto",
				detail: "DEVOLUTIVA_SAU_NOME_DATA. Exemplo do manual: NÁGILA BIANCA PAIXÃO MORAES_17.01.2025."
			},
			{
				title: "Mande para o grupo do SAU",
				detail: "O manual lista ADM Geral, Consultor Paraíso, Coordenação Paraíso, Coordenação Geral e Consultor Flórida."
			}
		]
	}),
	card({
		id: "ABA-194",
		title: "Atraso dos professores",
		summary: "Manhã, tarde e noite: quem veio, quem faltou e quem chegou depois.",
		badge: "email",
		priority: 2,
		avatar: "amber",
		section: "E-mails",
		contacts: [{
			label: "Coordenação geral",
			value: "coordenacaogeral@ccplbarueri.com.br"
		}, {
			label: "Consultor Flórida",
			value: "consultorflorida@ccplbarueri.com.br"
		}],
		scripts: [{
			label: "Assunto",
			text: "CONTROLE DE AUSÊNCIA OU ATRASO DOS PROFESSORES_CHECKLIST CONSULTORES_CCPL ABADE GONZAGA DOS SANTOS_[data]"
		}, {
			label: "Abertura",
			text: "Boa noite, Paulo!\n\nSegue o controle de ausência ou atraso dos professores referente ao dia DATA.\n\nMANHÃ\nNome — horário\n\nTARDE\nNome — horário\n\nNOITE\nNome — horário"
		}],
		steps: [
			{
				title: "Separe os turnos",
				detail: "O corpo vai em MANHÃ, TARDE e NOITE, com nome e horário."
			},
			{
				title: "Marque presença ou falta",
				detail: "Presente no sinal do modelo. Falta: escreva (faltou) e a observação com o motivo."
			},
			{
				title: "Registre atraso",
				detail: "Anote o horário em que a pessoa chegou e escreva (atraso)."
			},
			{
				title: "Envie no assunto padrão",
				detail: "CONTROLE DE AUSÊNCIA OU ATRASO DOS PROFESSORES_CHECKLIST CONSULTORES_CCPL ABADE GONZAGA DOS SANTOS_ e a data. O exemplo do manual começa com “Boa noite, Paulo!”."
			}
		]
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
			{
				label: "Dani",
				value: "rh2.semprevita@gmail.com"
			},
			{
				label: "Luana",
				value: "rh@gruposemprevita.org.br"
			},
			{
				label: "Coordenação Flórida",
				value: "coordenacaoflorida@ccplbarueri.com.br"
			},
			{
				label: "Coordenação geral",
				value: "coordenacaogeral@ccplbarueri.com.br"
			}
		],
		scripts: [{
			label: "Assunto",
			text: "RELATÓRIO DE PRESTAÇÃO DE SERVIÇOS_NOME COMPLETO_MÊS"
		}, {
			label: "Corpo",
			text: "Boa tarde!\n\nSegue em cópia eletrônica o documento \"NOME DO DOCUMENTO\".\nOriginal será enviado junto ao malote."
		}],
		steps: [
			{
				title: "Escaneie todos os documentos",
				detail: "Nada de funcionário segue só em papel. O PDF é a cópia eletrônica."
			},
			{
				title: "Escreva o assunto em maiúsculas",
				detail: "Tipo do documento, nome completo e mês de referência. Exemplo: RELATÓRIO DE PRESTAÇÃO DE SERVIÇOS_ANDREIA DIAS_JANEIRO."
			},
			{
				title: "Avise que o original vai no malote",
				detail: "Corpo: Boa tarde! Segue em cópia eletrônica o documento. Original será enviado junto ao malote."
			},
			{
				title: "Copie quem o manual copia",
				detail: "No relatório de prestação, entram Dani, coordenação Flórida, Luana e a coordenação geral."
			}
		]
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
			{
				title: "Envelope da RHRB",
				detail: "Informações da cozinheira, folha de ponto, lista de cesta básica e holerite."
			},
			{
				title: "Envelope do RH Sempre Vita",
				detail: "Demais funcionários do CCPL, folhas de ponto, lista e protocolo de cesta básica, holerites, contratos de estágio, relatórios de prestação de serviço e folhas de pagamento."
			},
			{
				title: "Envelope do Financeiro",
				detail: "Recebimento de itens, protocolo de itens frigoríficos e protocolo de água e gás."
			},
			{
				title: "Etiqueta e lacre",
				detail: "Uma etiqueta por envelope pardo. O original que já foi escaneado segue neste malote."
			}
		]
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
			{
				title: "Abra Correspondências",
				detail: "No Word: Correspondências > Etiquetas."
			},
			{
				title: "Entre em Opções",
				detail: "Opções > Nova etiqueta."
			},
			{
				title: "Grave o tamanho pedido",
				detail: "Use a medida que a coordenação passou. Salve com um nome que a próxima pessoa reconheça."
			},
			{
				title: "Imprima pelo caminho das etiquetas",
				detail: "Papel certo, face para baixo, aviso de margem em SIM, tamanho em A4 se o erro aparecer."
			}
		]
	}),
	card({
		id: "ABA-178",
		title: "Ofício da quadra",
		summary: "Segunda, das 8h às 10h. Uma hora por RG. Só para quem tem 18 anos ou mais.",
		badge: "unidade",
		priority: 2,
		avatar: "blue",
		section: "Ofícios",
		warnings: ["Sem álcool, sem droga, sem comércio e sem política na quadra.", "Camisa e tênis. Devolve limpa. A unidade não responde por vandalismo de terceiro nem por objeto perdido."],
		scripts: [{
			label: "Nome do arquivo",
			text: "OFICIO QUADRA_[NOME DO MUNÍCIPE]_[DATA]"
		}],
		steps: [
			{
				title: "Confira idade e horário",
				detail: "A distribuição é na segunda, 8h às 10h. Uma hora por RG. Menor de 18 não reserva."
			},
			{
				title: "Preencha o termo de responsabilidade",
				detail: "Data, Quadra Poliesportiva ou Society, nome, idade, WhatsApp e RG ou CPF de quem representa."
			},
			{
				title: "Leia o compromisso",
				detail: "Cuidar do espaço, sem álcool ou droga, sem comércio ou política, de camisa e tênis, devolver limpo. Uma hora, salvo extensão da coordenação."
			},
			{
				title: "Marque o dia e a unidade",
				detail: "Dia da semana marcado e unidade CCPL Abade Gonzaga dos Santos - Jardim Flórida. As duas assinaturas."
			},
			{
				title: "Anote no mural",
				detail: "Calendário OFICIOS e o mês: nome e horário."
			},
			{
				title: "Salve o arquivo",
				detail: "OFICIO QUADRA_NOME_DATA em 02.DIVERSOS SECRETARIA > ofícios. O termo impresso está em 02. IMPRESSÕES."
			}
		]
	}),
	card({
		id: "ABA-174",
		title: "Receber hortifruti",
		summary: "De segunda a sexta, a conferência é na cozinha, com o motorista.",
		badge: "unidade",
		priority: 2,
		avatar: "teal",
		section: "Recebimentos",
		contacts: [{
			label: "Carol",
			value: "canutri.marques@gmail.com"
		}],
		scripts: [{
			label: "Nome do arquivo",
			text: "ROMANEIO DE ENTREGA HORTIFRUTI_JARDIM FLÓRIDA_DD.MM.AAAA"
		}],
		steps: [
			{
				title: "Confira na cozinha",
				detail: "De segunda a sexta, junto com o motorista. Não assine sem olhar a entrega."
			},
			{
				title: "Escaneie o romaneio",
				detail: "Nome: ROMANEIO DE ENTREGA HORTIFRUTI_JARDIM FLÓRIDA_ e a data."
			},
			{
				title: "Envie para a Carol",
				detail: "canutri.marques@gmail.com."
			},
			{
				title: "Arquive na coordenação",
				detail: "A via física fica na pasta da coordenação."
			}
		]
	}),
	card({
		id: "ABA-170",
		title: "Receber açougue",
		summary: "Itens frigoríficos: confere, lança na planilha e o original vai no envelope do Financeiro.",
		badge: "unidade",
		priority: 2,
		avatar: "coral",
		section: "Recebimentos",
		contacts: [{
			label: "Financeiro",
			value: "financeiro@gruposemprevita.org.br"
		}, {
			label: "Carol",
			value: "canutri.marques@gmail.com"
		}],
		scripts: [{
			label: "Assunto",
			text: "RECEBIMENTO DE ITENS FRIGORÍFICOS_CCPL JARDIM FLÓRIDA_DATA"
		}, {
			label: "Corpo",
			text: "Boa tarde!\n\nSegue em anexo cópia eletrônica do recebimento de itens frigoríficos.\nO original será encaminhado junto ao malote."
		}],
		steps: [
			{
				title: "Confira com o motorista",
				detail: "Assine e date só depois da conferência."
			},
			{
				title: "Passe os dados para o Excel",
				detail: "Copie o que está no PDF. Duplique a linha modelo, renomeie pela data da entrega e preencha as linhas novas."
			},
			{
				title: "Mande os dois arquivos",
				detail: "O PDF e a planilha. Assunto no padrão RECEBIMENTO DE ITENS FRIGORÍFICOS_CCPL JARDIM FLÓRIDA_ e a data."
			},
			{
				title: "Guarde o original",
				detail: "Envelope do FINANCEIRO, na coordenação, para sair no malote."
			}
		]
	}),
	card({
		id: "ABA-166",
		title: "Receber água e gás",
		summary: "Nota da Mutingaz escaneada, e-mail para o Financeiro e original no envelope do malote.",
		badge: "unidade",
		priority: 2,
		avatar: "blue",
		section: "Recebimentos",
		contacts: [{
			label: "Financeiro",
			value: "financeiro@gruposemprevita.org.br"
		}],
		scripts: [{
			label: "Nome do arquivo",
			text: "NF MUTINGAZ_RECEBIMENTO_ÁGUA E GÁS_CCPL JARDIM FLÓRIDA_[DATA]"
		}, {
			label: "Corpo",
			text: "Boa tarde!\n\nSegue em anexo cópia eletrônica do recebimento de água e gás.\nO original será encaminhado junto ao malote."
		}],
		steps: [
			{
				title: "Escaneie a nota",
				detail: "Nome: NF MUTINGAZ_RECEBIMENTO_ÁGUA E GÁS_CCPL JARDIM FLÓRIDA_ e a data."
			},
			{
				title: "Envie ao Financeiro",
				detail: "financeiro@gruposemprevita.org.br. A coordenação Flórida pode ir em cópia, como no manual."
			},
			{
				title: "Não misture com o açougue",
				detail: "Água e gás tem assunto e pasta próprios. O frigorífico é outro recebimento."
			},
			{
				title: "Arquive",
				detail: "Envelope do FINANCEIRO e a pasta da coordenação."
			}
		]
	}),
	card({
		id: "ABA-162",
		title: "Receber materiais",
		summary: "Pedagógico, papelaria, limpeza ou enfermagem: confere, nomeia e manda a cópia.",
		badge: "unidade",
		priority: 2,
		avatar: "lavender",
		section: "Recebimentos",
		scripts: [{
			label: "Nome do arquivo",
			text: "RECEBIMENTO_MATERIAIS_TIPO_CCPL JD FLÓRIDA_DD.MM.AAAA"
		}, {
			label: "Corpo",
			text: "Boa tarde!\n\nSegue em anexo cópia eletrônica de \"NOME DO DOCUMENTO\"."
		}],
		steps: [
			{
				title: "Confira a entrega",
				detail: "Escreva na lista o nome de quem recebeu e a data."
			},
			{
				title: "Escolha o tipo",
				detail: "PEDAGÓGICOS, PAPELARIA, LIMPEZA ou ENFERMAGEM."
			},
			{
				title: "Nomeie",
				detail: "RECEBIMENTO_MATERIAIS_(tipo)_CCPL JD FLÓRIDA_ e a data no formato DD.MM.AAAA."
			},
			{
				title: "Envie o e-mail",
				detail: "Boa tarde! Segue em anexo cópia eletrônica do documento, com o nome entre aspas."
			},
			{
				title: "Arquive nos dois lugares",
				detail: "Pasta correspondente em 01.RECEBIMENTOS e o fichário da coordenação."
			}
		]
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
			{
				title: "Atualize o BD",
				detail: "O mesmo caminho das outras planilhas: baixar, selecionar a área BD e colar."
			},
			{
				title: "Abra a planilha de ativos e inativos",
				detail: "Inativo significa que o aluno saiu."
			},
			{
				title: "Use o botão ao lado do código",
				detail: "Clique, busque o código, confirme com OK."
			},
			{
				title: "Tire o filtro e salve",
				detail: "Remova o filtro, selecione tudo, OK e salve."
			}
		]
	}),
	card({
		id: "ABA-154",
		title: "Pré-inscritos",
		summary: "A base nova cola na aba inteira. Não apague coluna do arquivo baixado.",
		badge: "planilha",
		priority: 2,
		avatar: "teal",
		section: "Planilhas",
		warnings: ["Se aparecer um aviso sobre a aba de cursos de interesse, siga a orientação escrita na própria planilha. O manual não detalha o restante desse aviso."],
		steps: [
			{
				title: "Atualize o BD",
				detail: "Baixe a base antes de colar qualquer coisa."
			},
			{
				title: "Selecione o CCPL Abade Gonzaga",
				detail: "A colagem é desta unidade."
			},
			{
				title: "Copie a planilha baixada",
				detail: "Abra o arquivo recebido sem apagar colunas. Ctrl+C."
			},
			{
				title: "Cole na aba inteira",
				detail: "Selecione a planilha de pré-inscritos toda e Ctrl+V."
			}
		]
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
			{
				title: "Atualize o BD",
				detail: "Abra a lista e cole a base nova na área BD, como nas outras planilhas."
			},
			{
				title: "Inclua quem chegou no meio",
				detail: "Na lista da turma, use o espaço em branco ou o código em vermelho. Código na primeira coluna, status e a data da inclusão na observação."
			},
			{
				title: "Marque IDM se entrou depois do mês",
				detail: "O padrão do manual é IDM_ e o mês, como IDM_01.25."
			},
			{
				title: "Lance a justificativa de falta",
				detail: "Ache o aluno e a turma e preencha o campo de justificativa que a planilha já tem. Não crie coluna nova."
			},
			{
				title: "Passe a lista de papel",
				detail: "O que está na folha entra na célula da data. Presença é C maiúsculo."
			}
		]
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
			{
				title: "Atualize o BD",
				detail: "O mesmo atualizar da planilha AZ: baixar, selecionar a área e colar."
			},
			{
				title: "Código na primeira coluna",
				detail: "Use o código do aluno que está na ficha."
			},
			{
				title: "Escreva o tipo do documento",
				detail: "Atestado ou agendamento, igual ao papel que chegou."
			},
			{
				title: "Lance a data do documento",
				detail: "A data é a do atestado ou do agendamento, não a do dia em que você digitou."
			}
		]
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
			{
				title: "Abra a aba de pendência",
				detail: "Os dados entram manualmente, inclusive a data de término que está no certificado."
			},
			{
				title: "Preencha o protocolo",
				detail: "Curso, turma e data de término."
			},
			{
				title: "Colha a assinatura",
				detail: "O protocolo assinado vem antes de entregar o certificado."
			},
			{
				title: "Entregue e registre",
				detail: "Se a própria pessoa retira: nome e data. Se for terceiro, também quem é, o parentesco e o RG ou CPF."
			}
		]
	}),
	card({
		id: "ABA-138",
		title: "Controle de apostilas",
		summary: "Cada pedido de professor entra na planilha, com a quantidade e o curso.",
		badge: "planilha",
		priority: 1,
		avatar: "amber",
		section: "Planilhas",
		steps: [{
			title: "Abra a planilha de apostilas",
			detail: "Ela controla quantidade e curso."
		}, {
			title: "Registre cada pedido",
			detail: "Toda vez que um professor pedir apostila, lance na hora. Não deixe para o fim da semana."
		}]
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
			{
				title: "Abra a pasta do mês",
				detail: "00.PEDAGÓGICO > 05-LISTAS DE PRESENÇA - WORKSHOP > ano > mês."
			},
			{
				title: "Imprima e entregue ao professor",
				detail: "A lista física sai antes da aula e retorna quando a aula acaba."
			},
			{
				title: "Quem já tem ficha",
				detail: "Entre pelo código. Nome completo."
			},
			{
				title: "Quem não tem ficha",
				detail: "NOME COMPLETO em maiúsculas e um asterisco *."
			},
			{
				title: "Marque a presença",
				detail: "Letra C maiúscula, como na lista comum."
			}
		]
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
			{
				title: "Localize o arquivo com a coordenação",
				detail: "O item 6.9 do manual aponta a planilha. Confirme qual é o arquivo vigente antes de editar."
			},
			{
				title: "Não apague aba nem coluna",
				detail: "Se a planilha pedir base nova, baixe o BD, selecione a área e cole, no mesmo espírito das outras."
			},
			{
				title: "Registre só o que a coluna já pede",
				detail: "Movimento do dia nas colunas existentes. Comprovante de recebimento, quando houver, vai para 01.RECEBIMENTOS."
			}
		]
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
			{
				title: "Confirme o SAU no mês",
				detail: "A entrega do SAU é confirmada na planilha online, dentro do mês."
			},
			{
				title: "Olhe a espera da bioimpedância",
				detail: "A aba Lista de Espera Bioimpedância é de onde saem as pessoas chamadas para a agenda."
			},
			{
				title: "Imprima o horário das aulas",
				detail: "A aba de horário é o calendário das turmas por dia, para consulta da recepção."
			}
		]
	}),
	card({
		id: "ABA-122",
		title: "Incluir turma no sistema",
		summary: "Turma nova no administrativo: unidade Abade, professor, sala e as duas datas.",
		badge: "sistema",
		priority: 2,
		avatar: "orange",
		section: "Sistema",
		contacts: [{
			label: "Sistema",
			value: "ccplbarueri.com.br/admin/Inicio"
		}],
		steps: [
			{
				title: "Entre no menu Turmas",
				detail: "ccplbarueri.com.br/admin/Inicio. O menu mostra ativas, concluídas, relatório e transferências."
			},
			{
				title: "Adicionar turma",
				detail: "Nome, unidade Abade, curso, horário, dias, professor, auxiliar, período e sala."
			},
			{
				title: "Complete o quadro",
				detail: "Quantidade ideal, consultor, coordenador, data de início e previsão de término."
			},
			{
				title: "Cadastre",
				detail: "Botão Cadastra Turma. Confira a unidade antes de salvar."
			}
		]
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
			{
				title: "Abra Turmas e o relatório",
				detail: "Entre no primeiro link de turma que a lista mostrar."
			},
			{
				title: "Troque o final do endereço",
				detail: "Os últimos números da URL são a turma. Mude até abrir a turma destino."
			},
			{
				title: "Adicionar aluno",
				detail: "Adicionar usuário pelo código da ficha."
			},
			{
				title: "Confirme no botão verde",
				detail: "Sem o código da ficha, não cadastre por nome parecido."
			}
		]
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
			{
				title: "Abra a turma pelo mesmo caminho",
				detail: "Relatório de turmas e o link da turma, como na inclusão de aluno."
			},
			{
				title: "Some a data",
				detail: "O botão verde de mais cria a data da aula."
			},
			{
				title: "Marque um a um",
				detail: "Presença, falta ou afastado, de acordo com a lista."
			},
			{
				title: "Salve",
				detail: "Sem salvar, o empenho do dia sai errado."
			}
		]
	}),
	card({
		id: "ABA-110",
		title: "Encerrar grupo da turma",
		summary: "Mensagem de fim, alunos saem primeiro e a conta do CCPL é a última.",
		badge: "sistema",
		priority: 2,
		avatar: "blue",
		section: "Grupos e fotos",
		scripts: [{
			label: "Mensagem de encerramento",
			text: DESPEDIDA
		}],
		steps: [
			{
				title: "Envie a despedida",
				detail: "O texto do manual, com o telefone (11) 4382-8210 e a lista de cursos por idade."
			},
			{
				title: "Remova os alunos",
				detail: "Todos os alunos saem do grupo."
			},
			{
				title: "O CCPL sai por último",
				detail: "A conta da unidade é o último usuário removido."
			},
			{
				title: "Apague o grupo",
				detail: "Depois que a turma acabou, o grupo não fica aberto. Parcerias de Costura, Basquete e VidAtiva seguem a regra própria."
			}
		]
	}),
	card({
		id: "ABA-106",
		title: "Fotos da turma",
		summary: "Toda aula do CCPL entra no relatório. Parceiro, pelo menos uma vez no mês. Sete a treze fotos.",
		badge: "unidade",
		priority: 2,
		avatar: "amber",
		section: "Grupos e fotos",
		warnings: ["Horizontal, 4:3, bem iluminada. Não corte aluno nem professor.", "Ângulos variados. De 7 a 13 fotos."],
		scripts: [{
			label: "Nome do arquivo",
			text: "JF_NOME DO CURSO_DIA DA SEMANA_00H00 ÀS 00H00_DD.MM.AAAA"
		}],
		steps: [
			{
				title: "Fotografe a aula",
				detail: "Toda turma do CCPL, para o relatório. Turma parceira, no mínimo uma vez por mês."
			},
			{
				title: "Nomeie",
				detail: "Exemplo do manual: JF_DEPILAÇÃO PROFISSIONAL - DESIGN DE SOBRANCELHAS_SEGUNDA_18H00 ÀS 21H00_27.01.2025."
			},
			{
				title: "Poste no grupo da turma",
				detail: "Antes do arquivo, o nome do curso."
			},
			{
				title: "Baixe e compacte",
				detail: "O zip leva o nome da turma."
			},
			{
				title: "Extraia em JF_FOTOS",
				detail: "Pasta 00.PEDAGÓGICO / JF_FOTOS. Botão direito, extrair tudo, e apague o zip."
			}
		]
	}),
	card({
		id: "ABA-102",
		title: "Agendar psicologia",
		summary: "Na agenda do Google, só o horário verde. Fora dele, não marque.",
		badge: "unidade",
		priority: 2,
		avatar: "lavender",
		section: "Agenda",
		warnings: ["O material avisa “Não agendar busca espontânea” quando essa orientação está na própria agenda. Respeite o aviso da agenda."],
		steps: [
			{
				title: "Abra a agenda e olhe o verde",
				detail: "Horário livre é o bloco verde. Não marque fora dele."
			},
			{
				title: "Escolha o motivo",
				detail: "Busca espontânea, quando o aluno pede; solicitação da psicóloga ou assistente social; ou matrícula."
			},
			{
				title: "Troque a cor do evento",
				detail: "A cor identifica o tipo do agendamento."
			},
			{
				title: "Selecione RECEPÇÃO e a unidade",
				detail: "O fim do evento é o dia da consulta, não um intervalo aberto."
			}
		]
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
			{
				title: "Crie os horários sem aluno",
				detail: "Blocos de 10 minutos. Ainda sem nome."
			},
			{
				title: "Ajuste os horários se precisar",
				detail: "Edite o intervalo antes de oferecer para a lista de espera."
			},
			{
				title: "Chame pela planilha online",
				detail: "As pessoas estão na Lista de Espera Bioimpedância."
			}
		]
	}),
	card({
		id: "ABA-094",
		title: "Agendar bioimpedância",
		summary: "O evento leva código e nome completo, e muda de cor quando fica marcado.",
		badge: "unidade",
		priority: 2,
		avatar: "orange",
		section: "Agenda",
		scripts: [{
			label: "Nome do evento",
			text: "#COD DO ALUNO_NOME COMPLETO"
		}],
		steps: [
			{
				title: "Abra um horário vazio",
				detail: "Só um horário que ainda não tem aluno."
			},
			{
				title: "Nomeie",
				detail: "#COD DO ALUNO_NOME COMPLETO."
			},
			{
				title: "Mude a cor",
				detail: "A cor mostra que aquele horário deixou de estar livre."
			},
			{
				title: "Avise a pessoa",
				detail: "A chamada sai para quem está na lista de espera."
			}
		]
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
			{
				title: "Arquive no Drive",
				detail: "Pasta Bioimpedancia, dentro do mês da consulta."
			},
			{
				title: "Ache pelo código",
				detail: "Ctrl+F no código do aluno."
			},
			{
				title: "Envie no WhatsApp",
				detail: "A ficha daquela pessoa, não a pasta inteira."
			}
		]
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
			{
				title: "Abra a pasta do basquete",
				detail: "02.DIVERSOS SECRETARIA > BASQUETE: avaliação, ficha de anamnese e ficha de matrícula."
			},
			{
				title: "Preencha a anamnese na hora",
				detail: "Identificação, contato de emergência e CPF com calma. Não mande a pessoa levar a ficha para casa."
			},
			{
				title: "Passe o bloco de saúde",
				detail: "Deficiências que o formulário lista (autismo com suporte 1 a 3, TDAH, Down com raio-x cervical, intelectual, TOD, auditiva, visual, esquizofrenia e outras), medicamentos, quadro respiratório e asma."
			},
			{
				title: "Feche com PAR-Q e os termos",
				detail: "PAR-Q e os termos de responsabilidade assinados. O grupo de WhatsApp desta parceria permanece aberto para o aluno escrever."
			}
		]
	}),
	card({
		id: "ABA-082",
		title: "Matrícula de corte e costura",
		summary: "Núcleo de Moda. Ficha presencial, três autorizações e certificado só com protocolo assinado.",
		badge: "matricula",
		priority: 2,
		avatar: "lavender",
		section: "Parceiros",
		warnings: ["Nome em verde na planilha: concluiu todos os módulos e não refaz.", "Nem todo certificado está no Jardim Flórida."],
		steps: [
			{
				title: "Receba RG, comprovante e foto 3x4",
				detail: "A ficha é presencial, do Núcleo de Moda de Barueri."
			},
			{
				title: "Colha as autorizações",
				detail: "Grupo de WhatsApp, indicação para entrevista de emprego, fotos e vídeos, e a assinatura da aluna."
			},
			{
				title: "Lance na LISTAS DE COSTURA",
				detail: "Pré-inscrições: data, nome completo, WhatsApp, período e módulo. Desistentes: nome completo e data."
			},
			{
				title: "Olhe a aba de certificados",
				detail: "ALUNAS 2023-2024 controla quem já fechou os módulos. Verde não repete o curso."
			},
			{
				title: "Entregue com protocolo",
				detail: "Protocolo assinado antes. A própria aluna: nome e data. Terceiro: quem, parentesco e RG ou CPF. Os certificados físicos ficam na caixa preta, em ordem alfabética, na recepção."
			}
		]
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
			{
				title: "Abra o PDF e a impressão",
				detail: "Escolha o modo Livreto."
			},
			{
				title: "Frente e verso em subconjunto",
				detail: "Marque subconjunto frente e verso e o intervalo de folhas."
			},
			{
				title: "Encadernação à esquerda",
				detail: "Orientação retrato. Girar páginas automaticamente."
			},
			{
				title: "Formulários",
				detail: "Em formulários, Documento e marcações. Aí sim, Imprimir."
			}
		]
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
			{
				label: "Unidade",
				value: "CCPL Abade Gonzaga dos Santos · Jardim Flórida"
			},
			{
				label: "Endereço",
				value: "Rua das Orquídeas, 62"
			},
			{
				label: "WhatsApp da capa",
				value: "(11) 4382-4684"
			},
			{
				label: "WhatsApp da unidade",
				value: "(11) 4382-8210"
			},
			{
				label: "Kit lanche",
				value: "coordenacaoflorida@ccplbarueri.com.br"
			},
			{
				label: "Hortifruti · Carol",
				value: "canutri.marques@gmail.com"
			},
			{
				label: "Consultor Flórida",
				value: "consultorflorida@ccplbarueri.com.br"
			},
			{
				label: "Coordenação geral",
				value: "coordenacaogeral@ccplbarueri.com.br"
			},
			{
				label: "Financeiro",
				value: "financeiro@gruposemprevita.org.br"
			},
			{
				label: "ADM Geral",
				value: "admgeral@ccplbarueri.com.br"
			},
			{
				label: "Consultor Paraíso",
				value: "consultorparaiso@ccplbarueri.com.br"
			},
			{
				label: "Coordenação Paraíso",
				value: "coordenacaoparaiso@ccplbarueri.com.br"
			},
			{
				label: "Cozinheira · RHRB",
				value: "rbalimentacao.rh@gmail.com"
			},
			{
				label: "Contador",
				value: "adm.printsuporte@gmail.com"
			},
			{
				label: "Dani · RH",
				value: "rh2.semprevita@gmail.com"
			},
			{
				label: "Luana · RH",
				value: "rh@gruposemprevita.org.br"
			}
		],
		steps: [
			{
				title: "Kit lanche",
				detail: "Coordenação Flórida."
			},
			{
				title: "Hortifruti",
				detail: "Carol, nutricionista."
			},
			{
				title: "Cestas, frigorífico, água e gás",
				detail: "Financeiro."
			},
			{
				title: "Acompanhamento, atraso e empenho",
				detail: "Consultor Flórida e coordenação geral."
			},
			{
				title: "SAU",
				detail: "Digite SAU no Para. O manual também lista ADM Geral, Paraíso e Flórida."
			},
			{
				title: "Cozinha, contador e demais funcionários",
				detail: "RHRB para a cozinheira, o e-mail de TI para o contador, Dani e Luana para o restante da equipe."
			}
		]
	})
];
var KEY = "ccpl-guia-recepcao-v1";
var COLUMN_IDS = [
	"learn",
	"practice",
	"known"
];
function initialColumns() {
	const map = {};
	for (const process of PROCESSES) map[process.id] = process.defaultColumn ?? "off";
	return map;
}
function initialOrder() {
	const order = {
		learn: [],
		practice: [],
		known: []
	};
	for (const process of PROCESSES) if (process.defaultColumn) order[process.defaultColumn].push(process.id);
	return order;
}
function blank() {
	return {
		columnOf: initialColumns(),
		order: initialOrder(),
		checked: {},
		notes: {},
		overrides: {},
		custom: []
	};
}
function normalize(saved) {
	const base = blank();
	const columnOf = { ...base.columnOf };
	if (saved?.columnOf) {
		for (const [id, column] of Object.entries(saved.columnOf)) if (column === "learn" || column === "practice" || column === "known" || column === "off") columnOf[id] = column;
	}
	for (const process of saved?.custom ?? []) if (process?.id && columnOf[process.id] == null) columnOf[process.id] = "off";
	const order = {
		learn: [],
		practice: [],
		known: []
	};
	for (const column of COLUMN_IDS) order[column] = (saved?.order?.[column] ?? base.order[column]).filter((id) => columnOf[id] === column);
	for (const [id, column] of Object.entries(columnOf)) if (column !== "off" && !order[column].includes(id)) order[column].push(id);
	return {
		columnOf,
		order,
		checked: saved?.checked ?? {},
		notes: saved?.notes ?? {},
		overrides: saved?.overrides ?? {},
		custom: Array.isArray(saved?.custom) ? saved.custom : []
	};
}
function persist(state) {
	if (!state.hydrated || typeof localStorage === "undefined") return;
	const data = {
		columnOf: state.columnOf,
		order: state.order,
		checked: state.checked,
		notes: state.notes,
		overrides: state.overrides,
		custom: state.custom
	};
	try {
		localStorage.setItem(KEY, JSON.stringify({
			v: 1,
			...data
		}));
	} catch {}
}
function without(order, id) {
	return {
		learn: order.learn.filter((item) => item !== id),
		practice: order.practice.filter((item) => item !== id),
		known: order.known.filter((item) => item !== id)
	};
}
function applyOverride(process, overrides) {
	const patch = overrides[process.id];
	if (!patch) return process;
	return {
		...process,
		title: patch.title?.trim() ? patch.title : process.title,
		summary: patch.summary?.trim() ? patch.summary : process.summary
	};
}
var useGuide = create((set, get) => ({
	...blank(),
	hydrated: false,
	hydrate: () => {
		if (get().hydrated) return;
		try {
			const raw = localStorage.getItem(KEY);
			if (!raw) {
				set({ hydrated: true });
				return;
			}
			set({
				...normalize(JSON.parse(raw)),
				hydrated: true
			});
		} catch {
			set({ hydrated: true });
		}
	},
	move: (id, column, beforeId) => {
		const state = get();
		const order = without(state.order, id);
		if (column !== "off") {
			const list = order[column];
			const index = beforeId ? list.indexOf(beforeId) : -1;
			if (index >= 0) list.splice(index, 0, id);
			else list.push(id);
		}
		const next = {
			...state,
			columnOf: {
				...state.columnOf,
				[id]: column
			},
			order
		};
		set(next);
		persist({
			...get(),
			...next
		});
	},
	toggleStep: (id, index) => {
		const current = get().checked[id] ?? [];
		const checked = current.includes(index) ? current.filter((item) => item !== index) : [...current, index].sort((a, b) => a - b);
		set({ checked: {
			...get().checked,
			[id]: checked
		} });
		persist(get());
	},
	setNote: (id, note) => {
		set({ notes: {
			...get().notes,
			[id]: note
		} });
		persist(get());
	},
	setOverride: (id, patch) => {
		set({ overrides: {
			...get().overrides,
			[id]: {
				...get().overrides[id],
				...patch
			}
		} });
		persist(get());
	},
	clearOverride: (id) => {
		const overrides = { ...get().overrides };
		delete overrides[id];
		set({ overrides });
		persist(get());
	},
	addCustom: (input) => {
		const taken = new Set([...PROCESSES, ...get().custom].map((process) => process.id));
		let serial = 101;
		let id = `ABA-X${serial}`;
		while (taken.has(id)) {
			serial += 1;
			id = `ABA-X${serial}`;
		}
		const process = {
			id,
			title: input.title.trim(),
			summary: input.summary.trim() || "Processo combinado pela recepção.",
			badge: input.badge,
			priority: 2,
			avatar: "lavender",
			section: "Da recepção",
			custom: true,
			steps: input.steps.length ? input.steps : [{
				title: "Anotar o passo a passo",
				detail: ""
			}]
		};
		const order = without(get().order, id);
		order[input.column].push(id);
		set({
			custom: [...get().custom, process],
			columnOf: {
				...get().columnOf,
				[id]: input.column
			},
			order
		});
		persist(get());
		return id;
	},
	updateCustom: (id, patch) => {
		set({ custom: get().custom.map((process) => process.id === id ? {
			...process,
			...patch
		} : process) });
		persist(get());
	},
	removeCustom: (id) => {
		const columnOf = { ...get().columnOf };
		delete columnOf[id];
		const notes = { ...get().notes };
		delete notes[id];
		const checked = { ...get().checked };
		delete checked[id];
		const overrides = { ...get().overrides };
		delete overrides[id];
		set({
			custom: get().custom.filter((process) => process.id !== id),
			columnOf,
			order: without(get().order, id),
			notes,
			checked,
			overrides
		});
		persist(get());
	},
	resetAll: () => {
		set({
			...blank(),
			hydrated: true
		});
		persist(get());
	}
}));
var SLOTS = [...COLUMNS.map((column) => ({
	id: column.id,
	label: column.label
})), {
	id: "off",
	label: "Fora"
}];
function ProcessDrawer(props) {
	const { process, checked, column, overridden, onClose } = props;
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)(process.title);
	const [summary, setSummary] = (0, import_react.useState)(process.summary);
	const [stepsText, setStepsText] = (0, import_react.useState)(process.steps.map((step) => step.title).join("\n"));
	const [copied, setCopied] = (0, import_react.useState)("");
	const [confirmDelete, setConfirmDelete] = (0, import_react.useState)(false);
	const total = process.steps.length;
	const done = process.steps.filter((_, index) => checked.includes(index)).length;
	(0, import_react.useEffect)(() => {
		setEditing(false);
		setConfirmDelete(false);
		setTitle(process.title);
		setSummary(process.summary);
		setStepsText(process.steps.map((step) => step.title).join("\n"));
	}, [process]);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			if (event.key === "Escape") onClose();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	async function copy(text, key) {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(key);
		} catch {
			setCopied("erro");
		}
	}
	function saveEdit() {
		const nextTitle = title.trim();
		const nextSummary = summary.trim();
		if (process.custom) {
			const steps = stepsText.split("\n").map((line) => line.trim()).filter(Boolean).map((line) => ({
				title: line,
				detail: ""
			}));
			props.onUpdateCustom({
				title: nextTitle || process.title,
				summary: nextSummary || process.summary,
				steps: steps.length ? steps : process.steps
			});
		} else props.onOverride({
			title: nextTitle,
			summary: nextSummary
		});
		setEditing(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-40 flex justify-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/30",
			"aria-label": "Fechar passo a passo",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "process-title",
			className: "relative flex h-full w-full max-w-md flex-col bg-surface shadow-panel motion-reduce:transition-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 border-b border-line px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2 py-0.5 text-micro font-medium ${BADGE_CLASS[process.badge]}`,
								children: BADGE_LABEL[process.badge]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-micro text-faint",
								children: process.id
							})]
						}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: title,
							onChange: (event) => setTitle(event.target.value),
							className: "mt-2 h-11 w-full rounded-card border border-line px-3 text-base font-semibold text-ink",
							"aria-label": "Título"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "process-title",
							className: "mt-1 text-lg font-semibold leading-snug text-ink",
							children: process.title
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setEditing((value) => !value),
						className: "h-11 rounded-card px-3 text-card font-medium text-muted hover:bg-canvas hover:text-ink",
						children: editing ? "Cancelar" : "Editar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "grid size-11 place-items-center rounded-card text-muted hover:bg-canvas hover:text-ink",
						"aria-label": "Fechar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-4",
				children: [
					editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: summary,
						onChange: (event) => setSummary(event.target.value),
						rows: 3,
						"aria-label": "Resumo",
						className: "w-full rounded-card border border-line px-3 py-2 text-sm text-ink"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-ink",
						children: process.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-micro text-faint",
						children: [
							process.custom ? "Processo criado na recepção." : "Fonte: manual Processos da Recepção.",
							" ",
							process.section,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex items-center justify-between text-micro text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Passo a passo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							done,
							" de ",
							total
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 overflow-hidden rounded-full bg-canvas",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-done transition-[width] duration-200 motion-reduce:transition-none",
							style: { width: total ? `${done / total * 100}%` : "0%" }
						})
					})] }),
					editing && process.custom ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm text-muted",
						children: ["Um passo por linha", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: stepsText,
							onChange: (event) => setStepsText(event.target.value),
							rows: 6,
							className: "mt-1 w-full rounded-card border border-line px-3 py-2 text-sm text-ink"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-1",
						children: process.steps.map((step, index) => {
							const on = checked.includes(index);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => props.onToggle(index),
								className: "flex w-full gap-3 rounded-card px-1 py-2 text-left hover:bg-canvas",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border text-primary-ink transition-colors ${on ? "border-done bg-done" : "border-line-strong bg-surface"}`,
									"aria-hidden": true,
									children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-micro text-faint",
										children: index + 1
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `block text-sm font-medium ${on ? "text-muted line-through" : "text-ink"}`,
									children: step.title
								}), step.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-card leading-relaxed text-muted",
									children: step.detail
								}) : null] })]
							}) }, `${process.id}-${index}`);
						})
					}),
					done === total && total > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-card bg-canvas px-3 py-2 text-card text-ink",
						children: "Passo a passo conferido. Se isto já é rotina, deixe o cartão em Já sei."
					}) : null,
					process.warnings?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-card border border-warn-line bg-warn-bg px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-micro font-semibold text-warn-ink",
							children: "Atenção"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 space-y-1",
							children: process.warnings.map((warning) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-card leading-relaxed text-warn-ink",
								children: warning
							}, warning))
						})]
					}) : null,
					process.scripts?.map((script) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-card border border-line bg-canvas",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-micro font-semibold text-ink",
								children: script.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => copy(script.text, script.label),
								className: "inline-flex h-8 items-center gap-1 rounded-card bg-surface px-2 text-micro font-medium text-primary shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), copied === script.label ? "Copiado" : "Copiar"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "max-h-48 overflow-auto px-3 pb-3 font-sans text-card leading-relaxed whitespace-pre-wrap text-ink",
							children: script.text
						})]
					}, script.label)),
					copied === "erro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-micro text-danger",
						children: "Não foi possível copiar. Selecione o texto."
					}) : null,
					process.contacts?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: process.contacts.map((contact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-col rounded-card border border-line px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-micro text-faint",
								children: contact.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-card text-ink",
								children: contact.value
							})]
						}, contact.label))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-micro font-semibold text-muted",
							children: "Mover no quadro"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1 rounded-card bg-canvas p-1",
							children: SLOTS.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => props.onMove(slot.id),
								className: `h-9 rounded-md px-2.5 text-micro font-medium ${column === slot.id ? "bg-surface text-ink shadow-pop" : "text-muted"}`,
								children: slot.label
							}, slot.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-micro text-faint",
							children: "No celular, use estes botões. No computador, o cartão também arrasta."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-micro font-semibold text-muted",
							children: "Nota da recepção"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: props.note,
							onChange: (event) => props.onNote(event.target.value),
							rows: 3,
							placeholder: "Um lembrete só neste navegador.",
							className: "mt-1 w-full rounded-card border border-line px-3 py-2 text-sm text-ink placeholder:text-faint"
						})]
					}),
					editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: saveEdit,
						className: "h-11 w-full rounded-card bg-primary text-sm font-medium text-primary-ink",
						children: "Salvar ajuste"
					}) : null,
					!process.custom && overridden ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: props.onClearOverride,
						className: "text-card font-medium text-primary",
						children: "Voltar ao texto do manual"
					}) : null,
					process.custom ? confirmDelete ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: props.onDelete,
							className: "h-11 flex-1 rounded-card bg-danger text-sm font-medium text-primary-ink",
							children: "Excluir"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setConfirmDelete(false),
							className: "h-11 flex-1 rounded-card border border-line text-sm font-medium text-ink",
							children: "Manter"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setConfirmDelete(true),
						className: "text-card font-medium text-danger",
						children: "Excluir este processo"
					}) : null
				]
			})]
		})]
	});
}
var VIEWS = [
	{
		id: "board",
		label: "Quadro"
	},
	{
		id: "list",
		label: "Lista"
	},
	{
		id: "trail",
		label: "Trilha"
	}
];
function cn(...parts) {
	return parts.filter(Boolean).join(" ");
}
function Priority({ level }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-end gap-0.5",
		"aria-label": `Prioridade ${level} de 3`,
		children: [
			1,
			2,
			3
		].map((bar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("w-0.5 rounded-full", bar === 1 ? "h-1" : bar === 2 ? "h-1.5" : "h-2", bar <= level ? "bg-doing" : "bg-line-strong") }, bar))
	});
}
function ProcessCard({ process, done, total, dragging, onOpen, onDragStart, onDragEnd, onDropOn }) {
	const suppress = (0, import_react.useRef)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		role: "button",
		tabIndex: 0,
		draggable: true,
		"data-process": process.id,
		onDragStart: (event) => {
			suppress.current = true;
			event.dataTransfer.setData("text/plain", process.id);
			event.dataTransfer.effectAllowed = "move";
			onDragStart();
		},
		onDragEnd: () => {
			onDragEnd();
			window.setTimeout(() => {
				suppress.current = false;
			}, 40);
		},
		onDragOver: (event) => {
			event.preventDefault();
			event.stopPropagation();
		},
		onDrop: (event) => {
			event.preventDefault();
			event.stopPropagation();
			onDropOn();
		},
		onClick: () => {
			if (suppress.current) return;
			onOpen();
		},
		onKeyDown: (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				onOpen();
			}
		},
		className: cn("cursor-grab rounded-card border border-line bg-surface px-2.5 py-2 shadow-card transition-[transform,box-shadow,opacity] duration-150", "hover:-translate-y-px hover:shadow-pop active:cursor-grabbing", dragging && "opacity-40"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-card font-medium text-ink",
				children: process.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded-full px-1.5 py-0.5 text-micro font-medium", BADGE_CLASS[process.badge]),
						children: BADGE_LABEL[process.badge]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Priority, { level: process.priority }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto text-micro text-faint",
						children: process.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("size-5 shrink-0 rounded-full", AVATAR_CLASS[process.avatar]),
						"aria-hidden": true
					})
				]
			}),
			done > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block h-1 overflow-hidden rounded-full bg-canvas",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block h-full bg-done",
					style: { width: `${total ? done / total * 100 : 0}%` }
				})
			}) : null
		]
	});
}
function GuideApp() {
	const columnOf = useGuide((state) => state.columnOf);
	const order = useGuide((state) => state.order);
	const checked = useGuide((state) => state.checked);
	const notes = useGuide((state) => state.notes);
	const overrides = useGuide((state) => state.overrides);
	const custom = useGuide((state) => state.custom);
	const move = useGuide((state) => state.move);
	const toggleStep = useGuide((state) => state.toggleStep);
	const setNote = useGuide((state) => state.setNote);
	const setOverride = useGuide((state) => state.setOverride);
	const clearOverride = useGuide((state) => state.clearOverride);
	const addCustom = useGuide((state) => state.addCustom);
	const updateCustom = useGuide((state) => state.updateCustom);
	const removeCustom = useGuide((state) => state.removeCustom);
	const resetAll = useGuide((state) => state.resetAll);
	const [view, setView] = (0, import_react.useState)("board");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [addColumn, setAddColumn] = (0, import_react.useState)(null);
	const [dragId, setDragId] = (0, import_react.useState)(null);
	const [overColumn, setOverColumn] = (0, import_react.useState)(null);
	const [sectionFilter, setSectionFilter] = (0, import_react.useState)("Todas");
	const [confirmReset, setConfirmReset] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		useGuide.getState().hydrate();
	}, []);
	const catalog = (0, import_react.useMemo)(() => [...PROCESSES, ...custom].map((process) => applyOverride(process, overrides)), [custom, overrides]);
	const byId = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const process of catalog) map.set(process.id, process);
		return map;
	}, [catalog]);
	const open = openId ? byId.get(openId) ?? null : null;
	function idsIn(column) {
		return order[column].filter((id) => byId.has(id) && columnOf[id] === column);
	}
	function openProcess(id) {
		setSearchOpen(false);
		setAddColumn(null);
		setOpenId(id);
	}
	const needle = query.trim().toLowerCase();
	const results = needle ? catalog.filter((process) => {
		const blob = [
			process.title,
			process.summary,
			process.id,
			process.section,
			process.steps.map((step) => `${step.title} ${step.detail}`).join(" "),
			process.scripts?.map((script) => script.text).join(" ") ?? "",
			process.contacts?.map((contact) => contact.value).join(" ") ?? ""
		].join(" ").toLowerCase();
		return needle.split(/\s+/).every((word) => blob.includes(word));
	}) : catalog;
	const sections = [...SECTIONS, ...custom.length ? ["Da recepção"] : []];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-canvas px-3 py-3 sm:px-10 sm:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-panel border border-line bg-surface shadow-panel",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex flex-wrap items-center gap-3 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "flex items-center gap-1.5 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-muted",
									children: "CCPL Abade"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "size-3.5 text-faint",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-ink",
									children: "Recepção"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2 sm:gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex rounded-lg bg-canvas p-0.5",
									role: "tablist",
									"aria-label": "Visualização",
									children: VIEWS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										role: "tab",
										"aria-selected": view === item.id,
										onClick: () => setView(item.id),
										className: cn("h-11 rounded-md px-3 text-card font-medium md:h-8", view === item.id ? "bg-surface text-ink shadow-pop" : "text-muted"),
										children: item.label
									}, item.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden -space-x-2 sm:flex",
									"aria-hidden": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-7 rounded-full bg-avatar-orange ring-2 ring-surface" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-7 rounded-full bg-avatar-teal ring-2 ring-surface" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-7 rounded-full bg-avatar-lavender ring-2 ring-surface" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setSearchOpen(true);
										setQuery("");
									},
									className: "h-11 rounded-lg bg-primary px-3.5 text-card font-medium text-primary-ink shadow-card transition-transform duration-150 active:scale-[0.96] md:h-8",
									children: "Buscar"
								})
							]
						})]
					}),
					view === "board" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-h-0 flex-1 gap-4 overflow-x-auto px-4 pb-4",
						children: COLUMNS.map((column) => {
							const ids = idsIn(column.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								"data-column": column.id,
								onDragOver: (event) => {
									event.preventDefault();
									setOverColumn(column.id);
								},
								onDragLeave: () => setOverColumn((current) => current === column.id ? null : current),
								onDrop: (event) => {
									event.preventDefault();
									const id = dragId || event.dataTransfer.getData("text/plain");
									if (id) move(id, column.id);
									setDragId(null);
									setOverColumn(null);
								},
								className: cn("flex h-full w-72 shrink-0 flex-col rounded-card md:w-auto md:min-w-0 md:flex-1", overColumn === column.id && "bg-canvas"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2.5 flex items-center gap-2 px-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", column.dot) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-card font-medium text-ink",
											children: column.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-card text-faint",
											children: ids.length
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setAddColumn(column.id),
											className: "ml-auto grid size-11 place-items-center rounded-md text-faint hover:bg-canvas hover:text-ink md:size-7",
											"aria-label": `Adicionar processo em ${column.label}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto",
									children: [ids.map((id) => {
										const process = byId.get(id);
										if (!process) return null;
										const marks = checked[id] ?? [];
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessCard, {
											process,
											done: marks.length,
											total: process.steps.length,
											dragging: dragId === id,
											onOpen: () => openProcess(id),
											onDragStart: () => setDragId(id),
											onDragEnd: () => {
												setDragId(null);
												setOverColumn(null);
											},
											onDropOn: () => {
												const source = dragId;
												if (source && source !== id) move(source, column.id, id);
												setDragId(null);
												setOverColumn(null);
											}
										}, id);
									}), ids.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "rounded-card border border-dashed border-line px-3 py-6 text-center text-card text-faint",
										children: "Arraste um processo para cá"
									}) : null]
								})]
							}, column.id);
						})
					}) : null,
					view === "list" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-h-0 flex-1 overflow-y-auto px-4 pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-3 text-card text-muted",
								children: [catalog.length, " processos do manual da recepção. Toque para abrir o passo a passo."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex gap-1.5 overflow-x-auto pb-1",
								children: ["Todas", ...sections].map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSectionFilter(section),
									className: cn("h-9 shrink-0 rounded-full px-3 text-micro font-medium", sectionFilter === section ? "bg-ink text-primary-ink" : "bg-canvas text-muted"),
									children: section
								}, section))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: catalog.filter((process) => sectionFilter === "Todas" || process.section === sectionFilter).map((process) => {
									const slot = columnOf[process.id] ?? "off";
									const marks = checked[process.id]?.length ?? 0;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 rounded-card border border-line px-3 py-2 shadow-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => openProcess(process.id),
											className: "min-w-0 flex-1 text-left",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: cn("rounded-full px-1.5 py-0.5 text-micro font-medium", BADGE_CLASS[process.badge]),
															children: BADGE_LABEL[process.badge]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-micro text-faint",
															children: process.id
														}),
														marks > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-micro text-done",
															children: [
																marks,
																"/",
																process.steps.length
															]
														}) : null
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 block text-card font-medium text-ink",
													children: process.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-0.5 block truncate text-micro text-muted",
													children: process.summary
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => move(process.id, slot === "off" ? "learn" : "off"),
											className: "h-9 shrink-0 rounded-md px-2 text-micro font-medium text-primary hover:bg-canvas",
											children: slot === "off" ? "Fixar" : "Tirar"
										})]
									}, process.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: confirmReset ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											resetAll();
											setConfirmReset(false);
										},
										className: "h-10 rounded-card bg-danger px-3 text-card font-medium text-primary-ink",
										children: "Confirmar restauração"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setConfirmReset(false),
										className: "h-10 rounded-card border border-line px-3 text-card font-medium text-ink",
										children: "Cancelar"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setConfirmReset(true),
									className: "text-micro font-medium text-muted",
									children: "Restaurar quadro e progresso"
								})
							})
						]
					}) : null,
					view === "trail" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-h-0 flex-1 overflow-y-auto px-4 pb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-5 max-w-xl text-card leading-relaxed text-muted",
							children: "Trilha de integração do Jardim Flórida. Comece pela matrícula e avance no seu ritmo. Cada estação abre o passo a passo."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-8",
							children: sections.map((section, index) => {
								const items = catalog.filter((process) => process.section === section);
								if (!items.length) return null;
								const tone = BADGE_CLASS[items[0].badge];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rise",
									style: { animationDelay: `${index * 45}ms` },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("grid size-7 shrink-0 place-items-center rounded-full text-micro font-semibold", tone),
											children: index + 1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-semibold text-ink",
											children: section
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-card text-muted",
											children: SECTION_BLURB[section]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-2 pl-10 sm:grid-cols-2",
										children: items.map((process) => {
											const marks = checked[process.id]?.length ?? 0;
											const complete = marks > 0 && marks === process.steps.length;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => openProcess(process.id),
												className: "rounded-card border border-line bg-surface px-3 py-2.5 text-left shadow-card transition-transform duration-150 hover:-translate-y-px hover:shadow-pop",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", complete ? "bg-done" : AVATAR_CLASS[process.avatar]) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-card font-medium text-ink",
														children: process.title
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "mt-1 block text-micro text-muted",
													children: [
														process.steps.length,
														" passos",
														marks > 0 ? ` · ${marks} conferidos` : ""
													]
												})]
											}, process.id);
										})
									})]
								}, section);
							})
						})]
					}) : null
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessDrawer, {
				process: open,
				checked: checked[open.id] ?? [],
				note: notes[open.id] ?? "",
				column: columnOf[open.id] ?? "off",
				overridden: Boolean(overrides[open.id]),
				onClose: () => setOpenId(null),
				onToggle: (index) => toggleStep(open.id, index),
				onNote: (note) => setNote(open.id, note),
				onMove: (slot) => move(open.id, slot),
				onOverride: (patch) => setOverride(open.id, patch),
				onClearOverride: () => clearOverride(open.id),
				onUpdateCustom: (patch) => updateCustom(open.id, patch),
				onDelete: () => {
					removeCustom(open.id);
					setOpenId(null);
				}
			}) : null,
			searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-start justify-center bg-ink/30 px-4 pt-16",
				onMouseDown: () => setSearchOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "dialog",
					"aria-modal": "true",
					"aria-label": "Buscar processo",
					className: "w-full max-w-lg overflow-hidden rounded-panel border border-line bg-surface shadow-panel",
					onMouseDown: (event) => event.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-line px-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-faint" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							value: query,
							onChange: (event) => setQuery(event.target.value),
							onKeyDown: (event) => {
								if (event.key === "Escape") setSearchOpen(false);
								if (event.key === "Enter" && results[0]) openProcess(results[0].id);
							},
							placeholder: "Processo, e-mail ou passo",
							className: "h-12 w-full bg-transparent text-base text-ink outline-none placeholder:text-faint"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "max-h-80 overflow-y-auto py-1",
						children: [results.slice(0, 12).map((process) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => openProcess(process.id),
							className: "flex w-full flex-col px-3 py-2 text-left hover:bg-canvas",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-card font-medium text-ink",
								children: process.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-micro text-faint",
								children: [
									process.section,
									" · ",
									process.id
								]
							})]
						}) }, process.id)), results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "px-3 py-6 text-center text-card text-muted",
							children: "Nada com esse termo."
						}) : null]
					})]
				})
			}) : null,
			addColumn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddDialog, {
				column: addColumn,
				onClose: () => setAddColumn(null),
				onCreate: (id) => {
					setAddColumn(null);
					openProcess(id);
				},
				addCustom
			}) : null
		]
	});
}
function AddDialog({ column, onClose, onCreate, addCustom }) {
	const [title, setTitle] = (0, import_react.useState)("");
	const [summary, setSummary] = (0, import_react.useState)("");
	const [steps, setSteps] = (0, import_react.useState)("");
	const [badge, setBadge] = (0, import_react.useState)("unidade");
	const [error, setError] = (0, import_react.useState)("");
	const label = COLUMNS.find((item) => item.id === column)?.label ?? "";
	function submit() {
		if (!title.trim()) {
			setError("Dê um nome ao processo.");
			return;
		}
		const lines = steps.split("\n").map((line) => line.trim()).filter(Boolean).map((line) => ({
			title: line,
			detail: ""
		}));
		onCreate(addCustom({
			title,
			summary,
			badge,
			column,
			steps: lines.length ? lines : [{
				title: summary.trim() || "Descrever o passo",
				detail: ""
			}]
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-ink/30 px-4 pt-16",
		onMouseDown: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "add-title",
			className: "w-full max-w-md rounded-panel border border-line bg-surface p-4 shadow-panel",
			onMouseDown: (event) => event.stopPropagation(),
			onSubmit: (event) => {
				event.preventDefault();
				submit();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "add-title",
					className: "text-base font-semibold text-ink",
					children: ["Novo processo · ", label]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-3 block text-micro font-medium text-muted",
					children: ["Título", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: title,
						onChange: (event) => setTitle(event.target.value),
						className: "mt-1 h-11 w-full rounded-card border border-line px-3 text-base text-ink"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-3 block text-micro font-medium text-muted",
					children: ["Resumo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: summary,
						onChange: (event) => setSummary(event.target.value),
						rows: 2,
						className: "mt-1 w-full rounded-card border border-line px-3 py-2 text-sm text-ink"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-3 block text-micro font-medium text-muted",
					children: ["Passos, um por linha", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: steps,
						onChange: (event) => setSteps(event.target.value),
						rows: 4,
						className: "mt-1 w-full rounded-card border border-line px-3 py-2 text-sm text-ink"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-3 block text-micro font-medium text-muted",
					children: ["Selo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: badge,
						onChange: (event) => setBadge(event.target.value),
						className: "mt-1 h-11 w-full rounded-card border border-line bg-surface px-3 text-sm text-ink",
						children: Object.keys(BADGE_LABEL).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: key,
							children: BADGE_LABEL[key]
						}, key))
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-card text-danger",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "h-11 flex-1 rounded-card bg-primary text-sm font-medium text-primary-ink",
						children: "Adicionar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "h-11 flex-1 rounded-card border border-line text-sm font-medium text-ink",
						children: "Cancelar"
					})]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideApp, {});
}
//#endregion
export { Home as component };
