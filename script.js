//Elementos
const diasContainer = document.querySelector('#dias');
const horasContainer = document.querySelector('#horas');
const minutosContainer = document.querySelector('#minutos');
const segundosContainer = document.querySelector('#segundos');
const anoContainer = document.querySelector('#ano');
const gifLoad = document.querySelector('#loading');
const contentContainer = document.querySelector('#content')
const rodapeContainer = document.querySelector('.rodape')

//Variáveis
const proxAno = new Date().getFullYear() + 1;  //Armazena o próximo ano
const proxAnoTempo = new Date(`January 01 ${proxAno} 00:00:00`); //Armazena a primeira hora do próximo ano

//Exibe o próximo ano na tela
anoContainer.textContent = proxAno;

//Mantém os dados atualizados
const atualizarDados = () => {
    const horaAtual = new Date();
    const diferenca = proxAnoTempo - horaAtual;
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
    const minutos = Math.floor(diferenca / 1000 / 60) % 60;
    const segundos = Math.floor(diferenca / 1000) % 60;

    exibirDados({dias, horas, minutos, segundos}); //Chama a função para exibir os dados na tela
}

//Atualiza os dados na tela
const exibirDados = ({dias, horas, minutos, segundos}) => {
    diasContainer.textContent = dias < 10 ? '0' + dias : dias;
    horasContainer.textContent = horas < 10 ? '0' + horas : horas;
    minutosContainer.textContent = minutos < 10 ? '0' + minutos : minutos;
    segundosContainer.textContent = segundos < 10 ? '0' + segundos : segundos;
}

//Timer de 1 segundo para exibir um gif de loading enquanto os dados são carregados
setTimeout(() => {
    gifLoad.remove(); //Remove o gif

    //Exibe as divs
    contentContainer.style.display =  'block'; 
    rodapeContainer.style.display = 'block';

}, 1000);

//Atualiza os dados a todo segundo
setInterval(atualizarDados, 1000);