//validação nome
const formularioVoluntario = document.getElementById("formulario");
const nomeValidar = document.getElementById("nome");
const mensagem = document.getElementById("mensagemN");

formularioVoluntario.addEventListener("submit", function(event){
    event.preventDefault();
    const nomeValidar = nome.value;
    if (nomeValidar){
        if(/^[a-zA-Z][a-zA-Z0-9_-]{2,10}$/.test(nomeValidar) && nomeValidar.length >=3 && nomeValidar.length<=10){
            mensagem.textContent="Nome válido!";
            mensagem.style.color="green";
        } else{
            mensagem.textContent="Nome inválido. Por favor, digite seu nome.";
            mensagem.style.color="red";
        }
    } else{ 
        mensagem.textContent="Por favor, insira seu nome.";
        mensagem.style.color="red";
    }
});   
//fim validação nome 
//validação email
const formularioE = document.getElementById("formulario");
const emailValidar = document.getElementById("email");
const mensagemEmail = document.getElementById("mensagemE");

formularioVoluntario.addEventListener("submit", function(event){
    event.preventDefault();
    const emailValidar = email.value;
    if (emailValidar){
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValidar) && emailValidar.length >=10 && emailValidar.length<=25){
            mensagemEmail.textContent="Email válido!";
            mensagemEmail.style.color="green";
        } else{
            mensagemEmail.textContent="Nome inválido. Por favor, digite seu email.";
            mensagemEmail.style.color="red";
        }
    } else{ 
        mensagemE.textContent="Por favor, insira um email.";
        mensagemE.style.color="red";
    }
});
//fim da validação do email

const formularioC = document.getElementById("formulario");
const celularValidar = document.getElementById("celular");
const mensagemC = document.getElementById("mensagemC"); 

formularioVoluntario.addEventListener("submit", function(event) {
    event.preventDefault();
    const telefoneValidar = celular.value;
    if (telefoneValidar) {
        // Expressão regular para validar o formato de telefone (pode ser ajustado conforme necessário)
        if (/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(telefoneValidar)) {
            mensagemC.textContent = "Número de telefone válido!";
            mensagemC.style.color = "green";
        } else {
            mensagemC.textContent = "Número de telefone inválido. Formato esperado: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.";
            mensagemC.style.color = "red";
        }
    } else {
        mensagemC.textContent = "Por favor, insira um número de telefone.";
        mensagemC.style.color = "red";
    }
});
