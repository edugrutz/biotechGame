//const username = prompt("Qual seu nome?");
const username = "Eduardo";
let money = 0;
let progressInterval = null;
let inventory = [];

updateStatus();

document.getElementById("teste").onclick= function(){
  if (money >= 2){
  inventory.push("Bolo");
  money -= 2;
  } else {
    window.alert("Você não tem dinheiro suficiente.")
  }
  updateStatus();
}



function startProgress() {
  if (progressInterval === null) {
    var progressBar = document.getElementById("myProgressBar");
    var width = 0;
    progressInterval = setInterval(function() {
      if (width >= 100) {
        progressBar.style.width = 0 + "%";
        clearInterval(progressInterval);
        progressInterval = null;
        if (money < 100) {
          money += 10;
        }
        updateStatus();
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }, 10);
  }
}

function travelTo(place){
  localStorage.setItem('dinheiro', money); 
  switch(place){

    case "casa":
      window.location.href = "casa.html";
    break;

    case "mercado":
      window.location.href = "mercado.html";
    break;

    default:
      window.alert("Não tem como ir pra aí.")
    break;

  }  
}

function changePlace(){
  money = parseInt(localStorage.getItem('dinheiro')) || 0; // Recupera o dinheiro do localStorage
  updateStatus();
}

function updateStatus(){
  document.getElementById("status").innerText = `Nome: ${username}\nProfissão: Biotecnologista\n\nDinheiro: ${money}`;
  document.getElementById("inv").innerHTML = showInventoryItems();
}

function showInventoryItems(){
    itens = "";
    for (item of inventory){
      itens += item;
    }

    return itens;
}

function voltar(){
  window.history.back();
}

