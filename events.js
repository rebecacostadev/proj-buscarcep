function buscarCEP() {

    fetch (`https://viacep.com.br/ws/${cep.value}/json`)
        .then (res => res.json())
        .then(conteudo => {
            logradouro.value = conteudo.logradouro;
            bairro.value = conteudo.bairro;
            cidade.value = conteudo.localidade;
            estado.value = conteudo.uf;
        });
    }



//     fetch(`http://viacep.com.br/ws/${cep.value}/json`)
//         .then(function (resposta) {
//             return resposta.json();
//         })
//         .then(function (conteudo) {
//             logradouro.value = conteudo.logradouro;
//             bairro.value = conteudo.bairro
//             cidade.value = conteudo.localidade
//             estado.value = conteudo.uf

//         })
        
// }

// function welcome(nome) {
//     return "Bem vinda " + nome;
// }

// const welcome = (nome) => {
//     return "Bem vinda" + nome;
// }

// welcome('Samantha');

