"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var estoque = [];
console.clear();
console.log(" ---- Menu de Op\u00E7\u00F5es ---\n");
console.log(" 1- Armazenar");
console.log(" 2- Remover dados");
console.log(" 3- Atualizar dados");
console.log(" 4- Apresentar os dados");
var option = prompt("Escolha sua op\u00E7\u00E3o\n");
switch (option) {
    case 1:
        estoque.push();
        break;
    case 2:
        estoque.pop();
        break;
    case 3:
        estoque.splice();
        estoque.push();
        break;
    case 4:
        estoque.forEach(function (item) {
            console.log(item);
        });
        break;
}
