let playButton;
let media;
let stopButton;
let width = "80%";
function introEnded(){
  let casinoB=document.createElement('button');
  let operaB=document.createElement('button');
  let casinoA=document.createElement('a');
  let operaA=document.createElement('a');
  let divBut = document.createElement('div');
  casinoB.innerText="Aller au casino";
  operaB.innerText="Aller à l'opera";
  divBut.style.width = width;
  divBut.classList = "buttons";
  operaA.href = "opera.html";
  casinoA.href = "casino.html";

  media = document.querySelector("video");


  let body=document.querySelector('.body');
  casinoA.appendChild(casinoB);
  operaA.appendChild(operaB);
  divBut.appendChild(casinoA);
  divBut.appendChild(operaA);
  body.appendChild(divBut);

}

function playerStart(){
  let body=document.querySelector('.body');
  let bar = document.createElement('div');
  playButton = document.createElement("button");
  stopButton = document.createElement("button");
  media = document.querySelector("video");
  media.style.width= width;
  media.removeAttribute("controls");


  stopButton.innerHTML = "Passer a l'etape suivant";
  playButton.innerHTML ="Play";
  media.muted = true;
  media.play();
  media.muted = false;
  media.volume =1.0;
  playButton.addEventListener('click',pausePlay);
  stopButton.addEventListener('click',finishVideo);

  bar.classList.add("controls");
  bar.appendChild(playButton);
  bar.appendChild(stopButton);
  bar.style.width = media.style.width;
  body.appendChild(bar);
}

function pausePlay(){
  if(media.paused)media.play();
  else media.pause();
}

function finishVideo(){
  media.currentTime = 600;
}


function finCasino() {
  let div = document.createElement("div");
  div.innerHTML='<a href="opera.html" id="opera"><button>Aller à l\'opera</button></a><a href="code.html" id="finRech"><button>Recherche fini</button></a>';
  div.style.width = width;
  div.classList = "buttons";
  document.querySelector('.body').appendChild(div);

}

function fin(){
  let div = document.createElement("div");
  div.id='finDiv';
  div.innerHTML='<h3 id="fin">Merci pour votre participation dans notre web-documentaire</h3>';
  document.querySelector('.body').appendChild(div);
}
function verifCode(){
  let el = document.querySelector('#code');
  console.log(el.value);
  if (el.value === '6338'){
    window.location.href = "conclusion.html";
  }else{
    console.log("Wrong code,try again");
  }
}
