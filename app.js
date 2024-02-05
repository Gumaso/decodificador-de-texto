
function funcaoCriptografar() {
    var texto_saida = ''
    var texto_entrada = document.getElementById("entrada_texto").value
    var x = 0;
    while(x < texto_entrada.length){
        if (texto_entrada[x] == "a"){
            texto_saida += texto_entrada[x].replace('a', 'ai');
            x++
        }else if(texto_entrada[x] == "e"){
            texto_saida += texto_entrada[x].replace("e", 'enter');
            x++
        }else if(texto_entrada[x] == "i"){
            texto_saida += texto_entrada[x].replace("i", 'imes');
            x++
        }else if(texto_entrada[x] == "o"){
            texto_saida += texto_entrada[x].replace("o", 'ober');
            x++
        }else if(texto_entrada[x] == "u"){
            texto_saida += texto_entrada[x].replace("u", 'ufat');
            x++
        }
        else{
            texto_saida += texto_entrada[x]
            x++
        }
    }
    return texto_saida;
}

function funcaoDescriptografar() {
    var texto_criptografado ="";
    var texto_criptografado = document.getElementById("entrada_texto").value
    let regexEnter = /enter/gi;
    let regexImes = /imes/gi;
    let regexAi = /ai/gi;
    let regexOber = /ober/gi;
    let regexUfat = /ufat/gi;
    while(texto_criptografado.includes('enter') || texto_criptografado.includes('imes') || texto_criptografado.includes('ai') || texto_criptografado.includes('ober') || texto_criptografado.includes('ufat')){
        texto_criptografado = texto_criptografado.replace(regexEnter, "e")
        texto_criptografado = texto_criptografado.replace(regexImes, "i")
        texto_criptografado = texto_criptografado.replace(regexAi, "a")
        texto_criptografado = texto_criptografado.replace(regexOber, "o")
        texto_criptografado = texto_criptografado.replace(regexUfat, "u")
    }
    return texto_criptografado
}


function mostrarTextoCriptografado(){
    var str = document.getElementById("entrada_texto").value
    var possuiCaracterEspecial = /[^\w\s]/gi.test(str);
    var possuiLetraMaiuscula = /[A-Z]/.test(str);
    var possuiNumero = /\d/.test(str);
    if (document.getElementById("entrada_texto").value.trim() === ""){
        document.getElementById("conteudo_direita").style.display = "flex";
        document.getElementById("conteudo_direita2").style.display = "none";
        document.getElementById("rotulo").style.visibility = "visible";



    }else if(possuiLetraMaiuscula == true || possuiCaracterEspecial == true || possuiNumero == true ){
        mudarCor()
        document.getElementById("conteudo_direita").style.display = "flex";
        document.getElementById("conteudo_direita2").style.display = "none";
        document.getElementById("rotulo").style.visibility = "visible";

    }
    
    
    else{
        document.getElementById("saida_texto").value = funcaoCriptografar();
        document.getElementById("conteudo_direita").style.display = "none";
        document.getElementById("conteudo_direita2").style.display = "flex";
        document.getElementById("rotulo").style.visibility = "hidden";

    }
}

function mostrarTextoDescriptografado(){
    var str = document.getElementById("entrada_texto").value
    var possuiCaracterEspecial = /[^\w\s]/gi.test(str);
    var possuiLetraMaiuscula = /[A-Z]/.test(str);
    var possuiNumero = /\d/.test(str);
    if (document.getElementById("entrada_texto").value.trim() ===""){
        document.getElementById("conteudo_direita").style.display = "flex";
        document.getElementById("conteudo_direita2").style.display = "none";
        document.getElementById("rotulo").style.visibility = "visible";

        

    }else if(possuiLetraMaiuscula == true || possuiCaracterEspecial == true || possuiNumero == true){
        mudarCor()
        document.getElementById("conteudo_direita").style.display = "flex";
        document.getElementById("conteudo_direita2").style.display = "none";
        document.getElementById("rotulo").style.visibility = "visible";

    }
    else{
        document.getElementById("saida_texto").value = funcaoDescriptografar();
        document.getElementById("conteudo_direita").style.display = "none";
        document.getElementById("conteudo_direita2").style.display = "flex";
        document.getElementById("rotulo").style.visibility = "hidden";


    }
    

}

function Copiar(){
    let copyText = document.querySelector("#saida_texto");
    copyText.select();
    document.execCommand("copy");
}
document.getElementById("botao1").addEventListener("click", Copiar)


function mudarCor(){
   var fraseatencao = document.getElementById('frase_atencao');
   fraseatencao.style.color = "red";
   fraseatencao.style.fontSize = "1.5rem";
   var simboloex = document.getElementById('simbolo')
   simboloex.style.width = "1.5rem";
   setTimeout(function() {
    fraseatencao.style.color = "black";
    fraseatencao.style.fontSize = "1rem";
    simboloex.style.width = "1rem";
}, 2000); // 2000ms = 2s
}
/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
*/
/*DESCRIPGRAFAR */




