import PromptSync = require ('prompt-sync');

const prompt = PromptSync();

let estoque = [];

    console.clear();
    console.log(` ---- Menu de Opções ---\n`);
    console.log(` 1- Armazenar`);
    console.log(` 2- Remover dados`);
    console.log(` 3- Atualizar dados`);
    console.log(` 4- Apresentar os dados`);
    const option = prompt(`Escolha sua opção\n`)

    switch (option) {
        case 1:
            estoque.push();
            break;
        case 2:
            estoque.pop();
            break
        case 3:
            estoque.splice();
            estoque.push();
            break
        case 4:
            estoque.forEach((item) => {
                console.log(item);
            });
            break;
    }
