// ------------------ INICIALIZAÇÃO --------------------
const form = document.getElementById("form-pre-atendimento"); // Seleciona o formulário
const botaoEnviar = document.getElementById("botao-enviar");   // Seleciona o botão ENVIAR
const inputs = form.querySelectorAll("input[required]");       // Seleciona todos os inputs obrigatórios
const cpfInput = document.getElementById("cpf");               // Seleciona o campo de CPF
const telInput = document.getElementById("telefone");          // Seleciona o campo de telefone

// Lista dos nomes de grupos de radio para validação dinâmica
const radioGroups = [
  "sexualidade",
  "dificuldade_celular",
  "dificuldade_leitura",
  "tem_auxilio"
];


// ------------------ MÁSCARA CPF --------------------
cpfInput.addEventListener("input", () => {
  let value = cpfInput.value.replace(/\D/g, "");         // Remove tudo que não for número
  if (value.length > 11) value = value.slice(0, 11);     // Limita a 11 dígitos
  value = value.replace(/(\d{3})(\d)/, "$1.$2");          // Aplica ponto depois de 3 dígitos
  value = value.replace(/(\d{3})(\d)/, "$1.$2");          // Aplica segundo ponto
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");    // Aplica traço nos dois últimos
  cpfInput.value = value;                                // Atualiza o campo formatado
});

// ------------------ MÁSCARA TELEFONE --------------------
telInput.addEventListener("input", () => {
  let value = telInput.value.replace(/\D/g, "");        // Remove não dígitos
  if (value.length > 11) value = value.slice(0, 11);    // Limita a 11 dígitos
  if (value.length <= 10) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3"); // Fixo
  } else {
    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3"); // Celular
  }
  telInput.value = value;
});