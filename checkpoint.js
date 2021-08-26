
//Grupo: 05
//Integrantes: Belicio Cardoso, Marcio Silva, Fabio Augusto, Amanda Jesus, Lucas Bernardo e Felipe Cabuto
// 1. Pipoca – 10 segundos (padrão);
// 2. Macarrão – 8 segundos (padrão);
// 3. Carne – 15 segundos (padrão);
// 4. Feijão – 12 segundos (padrão);
// 5. Brigadeiro – 8 segundos (padrão);


function micro(prato,tempo){
    let resultado = 0;
    let tempoPadrao = 0;
    switch(prato){
        case "1":
            tempoPadrao = 10;
            if ((tempo >= 2*tempoPadrao) && (tempo < 3*tempoPadrao)){
                resultado = console.log("Sua comida queimou.")
            } else if ((tempo < tempoPadrao)){
                resultado = console.log("Tempo insuficiente.")
            } else if (tempo >= 3*tempoPadrao){
                resultado = console.log("kabumm")
            } else {
                resultado = console.log("Prato pronto, bom apetite!!!")
            }
            break;
        case "2":
            tempoPadrao = 8;
            if ((tempo >= 2*tempoPadrao) && (tempo < 3*tempoPadrao)){
                resultado = console.log("Sua comida queimou.")
            } else if ((tempo < tempoPadrao)){
                resultado = console.log("Tempo insuficiente.")
            } else if (tempo >= 3*tempoPadrao){
                resultado = console.log("kabumm")
            } else {
                resultado = console.log("Prato pronto, bom apetite!!!")
            }
            break;
        case "3":
            tempoPadrao = 15;
            if ((tempo >= 2*tempoPadrao) && (tempo < 3*tempoPadrao)){
                resultado = console.log("Sua comida queimou.")
            } else if ((tempo < tempoPadrao)){
                resultado = console.log("Tempo insuficiente.")
            } else if (tempo >= 3*tempoPadrao){
                resultado = console.log("kabumm")
            } else {
                resultado = console.log("Prato pronto, bom apetite!!!")
            }
            break;
        case "4":
            tempoPadrao = 12;
            if ((tempo >= 2*tempoPadrao) && (tempo < 3*tempoPadrao)){
                resultado = console.log("Sua comida queimou.")
            } else if ((tempo < tempoPadrao)){
                resultado = console.log("Tempo insuficiente.")
            } else if (tempo >= 3*tempoPadrao){
                resultado = console.log("kabumm")
            } else {
                resultado = console.log("Prato pronto, bom apetite!!!")
            }
            break;
        case "5":
            tempoPadrao = 8;
            if ((tempo >= 2*tempoPadrao) && (tempo < 3*tempoPadrao)){
                resultado = console.log("Sua comida queimou.")
            } else if ((tempo < tempoPadrao)){
                resultado = console.log("Tempo insuficiente..")
            } else if (tempo >= 3*tempoPadrao){
                resultado = console.log("kabumm")
            } else {
                resultado = console.log("Prato pronto, bom apetite!!!")
            }
            break;    
        default:
                console.log("Prato Inexistente")
        }
return resultado;
}

micro("1",10);
micro("2",8);
micro("3",15);
micro("4",12);
micro("5",8);

// Lucas Bernardo Soares

