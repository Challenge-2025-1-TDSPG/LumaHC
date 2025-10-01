import {
  abrindoApp,
  aceitandoTermo,
  aceitandoTermoDesk,
  acessandoApp,
  acessandoMenu,
  acessandoTele,
  acessandoWeb,
  acessoPortal,
  appstore,
  autorizandoAudio,
  autorizandoAudioDesk,
  cadastrando,
  cadastrandoMobile,
  cadastroSenha,
  cadastroSenhaDesk,
  confirmacaoAno,
  confirmacaoAnoDesk,
  confirmacaoNomeMae,
  dadosContato,
  dadosContatoDesk,
  detalhesTeleconsulta,
  detalhesTeleconsultaDesk,
  direcionamentoTermo,
  direcionamentoTermoDesk,
  entrandoApp,
  finalTeleconsulta,
  finalTeleconsultaDesk,
  liberandoCamera,
  liberandoCameraDesk,
  opcoesCamera,
  opcoesCameraDesk,
  permissaoCamera,
  playstore,
  preenchendoCpf,
  preenchendoCpfDesk,
  selecNavegador,
  senhaCadastro,
  senhaCadastroDesk,
  teleconsulta,
  verificacaoDados,
  verificacaoDadosDesk,
} from '@/assets/images';
import type { TutorialStepData } from '../types/tutorialStep';

/**
 * Constantes de passos dos tutoriais (cadastro e teleconsulta)
 * Usadas para exibir passo a passo ilustrado para o usuário
 */

export const MOBILE_SIGNUP_STEPS: TutorialStepData[] = [
  { title: 'Clique em Acessar Portal', img: acessandoApp, alt: 'Acessando app' },
  { title: 'Clique em Cadastrar Senha', img: cadastrandoMobile, alt: 'Cadastrando no app' },
  { title: 'Informe seu CPF', img: preenchendoCpf, alt: 'Campo CPF' },
  { title: 'Verifique seus dados', img: verificacaoDados, alt: 'Verificação' },
  { title: 'Dados de contato', img: dadosContato, alt: 'E-mail e celular' },
  { title: 'Confirme o nome da mãe', img: confirmacaoNomeMae, alt: 'Nome da mãe' },
  { title: 'Selecione o ano de nasc.', img: confirmacaoAno, alt: 'Ano de nascimento' },
  { title: 'Crie sua senha', img: cadastroSenha, alt: 'Criação de senha' },
  { title: 'Cadastro concluído', img: senhaCadastro, alt: 'Sucesso' },
];

export const DESKTOP_SIGNUP_STEPS: TutorialStepData[] = [
  { title: 'Acesse o portal', img: acessoPortal, alt: 'Portal' },
  { title: "Escolha 'Cadastrar Senha'", img: cadastrando, alt: 'Início do cadastro' },
  { title: 'Informe seu CPF', img: preenchendoCpfDesk, alt: 'Campo CPF' },
  { title: 'Verifique seus dados', img: verificacaoDadosDesk, alt: 'Verificação' },
  { title: 'Dados de contato', img: dadosContatoDesk, alt: 'E-mail e celular' },
  { title: 'Confirme dados', img: confirmacaoAnoDesk, alt: 'Confirmações' },
  { title: 'Crie sua senha', img: cadastroSenhaDesk, alt: 'Criação de senha' },
  { title: 'Tudo certo!', img: senhaCadastroDesk, alt: 'Sucesso' },
];

export const MOBILE_TELECONSULT_STEPS: TutorialStepData[] = [
  { title: 'Abra o App do Portal', img: abrindoApp, alt: 'Tela do app aberto' },
  { title: 'Clique em Acessar Portal', img: acessandoApp, alt: 'Tela inicial do app' },
  { title: 'Digite seu CPF e sua Senha', img: entrandoApp, alt: 'Formulário de login' },
  { title: 'Abra o Menu → Teleconsulta', img: acessandoMenu, alt: 'Menu do app' },
  { title: 'Toque em Teleconsulta', img: teleconsulta, alt: 'Opção Teleconsulta no app' },
  { title: 'Termo de consentimento', img: direcionamentoTermo, alt: 'Aviso do termo' },
  { title: 'Aceite o termo', img: aceitandoTermo, alt: 'Tela do termo' },
  { title: 'Entrar na teleconsulta', img: detalhesTeleconsulta, alt: 'Botão entrar' },
  { title: 'Escolha o Chrome (uma vez)', img: selecNavegador, alt: 'Escolha de navegador' },
  { title: 'Somente ouvir', img: autorizandoAudio, alt: 'Permissão de áudio' },
  { title: 'Ative a câmera', img: liberandoCamera, alt: 'Ativar câmera' },
  { title: 'Permitir câmera', img: permissaoCamera, alt: 'Permissão para câmera' },
  { title: 'Iniciar compartilhamento', img: opcoesCamera, alt: 'Seleção de câmera' },
  { title: 'Boa teleconsulta!', img: finalTeleconsulta, alt: 'Consulta em andamento' },
];

export const DESKTOP_TELECONSULT_STEPS: TutorialStepData[] = [
  {
    title: 'Clique em: ',
    actionButton: {
      href: 'https://portaldopaciente.hc.fm.usp.br/',
      label: 'Acessar Portal',
      external: true,
    },
    img: acessoPortal,
    alt: 'Portal do paciente (web)',
  },
  { title: 'Digite seu CPF e sua Senha', img: acessandoWeb, alt: 'Formulário de login' },
  { title: 'Teleconsulta', img: acessandoTele, alt: 'Menu web' },
  { title: 'Termo de consentimento', img: direcionamentoTermoDesk, alt: 'Aviso do termo' },
  { title: 'Aceite o termo', img: aceitandoTermoDesk, alt: 'Tela do termo' },
  { title: 'Entrar na teleconsulta', img: detalhesTeleconsultaDesk, alt: 'Botão entrar' },
  { title: 'Permissão de áudio', img: autorizandoAudioDesk, alt: 'Permissão de áudio' },
  { title: 'Ativar e permitir câmera', img: liberandoCameraDesk, alt: 'Ativar câmera' },
  { title: 'Iniciar compartilhamento', img: opcoesCameraDesk, alt: 'Seleção de câmera' },
  { title: 'Boa teleconsulta!', img: finalTeleconsultaDesk, alt: 'Consulta em andamento' },
];

export const STORE_LINKS = {
  play: {
    href: 'https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente',
    icon: playstore,
    alt: 'Play Store',
  },
  app: {
    href: 'https://apps.apple.com/br/app/portal-do-paciente-hc/id1572694502',
    icon: appstore,
    alt: 'App Store',
  },
} as const;
