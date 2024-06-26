var botaoAdicionar = document.querySelector("#adicionar-pacientes");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPaciente(form);

    pacienteTr = montaTr(paciente);

    // var erros = validaPacientes(paciente);

    // if(erros.length > 0){
    //     var mensagemErro = document.querySelector("#mensagem-erro");
    //     mensagemErro.textContent = erros;
    //     return;
    // }

    adicionaPacienteNaTabela(paciente);

    form.reset();
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    pacienteTr.classList.add("text-center");
    tabela.appendChild(pacienteTr);
}

function obtemPaciente(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    
    if(!validaPeso(paciente.peso)) erros.push("Peso inválido")

    if(!validaAltura(paciente.altura)) erros.push("Altura inválida")

    return erros; 
}