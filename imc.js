
let Username 
let peso 
let altura 
const botaoCalcular = document.querySelector('.btn-calcular');

botaoCalcular.addEventListener('click', ()=>{
    Username = document.querySelector('.name-input').value;
    peso = parseFloat(document.querySelector('.peso-input').value.replace(',','.'));
    altura = parseFloat(document.querySelector('.altura-input').value.replace(',','.'));
    calcular();
    document.querySelector('.resultado').innerHTML= mostrarmensagem();
})


function analisarImc(parametroImc){
    
        if(parametroImc<18.5) {
        return "Grau 0 - Nível Magreza";
    }
        else if(parametroImc<25) {
        return "Grau 0 - Nível Normal";
    }
        else if(parametroImc<30) {
        return "Grau 1 - Nível Sobrepeso";
    }
        else if(parametroImc<40) {
        return "Grau 2 - Nível Obesidade";
    }
        else{
        return "Grau 3 - Nível Obesidade Grave";
    }
}

function calcular() {

    let resultado = (peso / altura**2).toFixed(2); 
    let grauObesidade = analisarImc(resultado); 
}

function mostrarmensagem () {
    const mensagem = `${Username}, Seu IMC é:`;
    return mensagem;
}
   