//const username = prompt("Qual seu nome?");
const username = "Eduardo";
let money = 0;
let progressInterval = null;

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

function goToHome(){
  localStorage.setItem('dinheiro', money); // Define o dinheiro no localStorage
  window.location.href = "casa.html"; // Redireciona para a página "casa.html"
}

function changePlace(){
  money = parseInt(localStorage.getItem('dinheiro')) || 0; // Recupera o dinheiro do localStorage
  updateStatus();
}
 
  updateStatus();

function updateStatus(){
  document.getElementById("status").innerText = `Nome: ${username}\nProfissão: Biotecnologista\n\nDinheiro: ${money}`;
}

