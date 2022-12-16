let playButton;
let media;
let stopButton;

function introEnded(){
  let casinoB=document.createElement('button');
  let operaB=document.createElement('button');
  let casinoA=document.createElement('a');
  let operaA=document.createElement('a');
  casinoB.innerText="Aller au casino";
  operaB.innerText="Aller a l'opera";
  casinoA.style.top = "40%";
  casinoA.style.left = "60%";
  operaA.style.top = "40%";
  operaA.style.left = "20%";
  operaA.href = "opera.html";
  casinoA.href = "casino.html";

  media = document.querySelector("video");
  casinoB.style.width=media.style.width;
  operaB.style.width=media.style.width;

  let body=document.querySelector('.body');
  casinoA.appendChild(casinoB);
  operaA.appendChild(operaB);
  body.appendChild(casinoA);
  body.appendChild(operaA);
}

function playerStart(){
  let body=document.querySelector('.body');
  let bar = document.createElement('div');
  playButton = document.createElement("button");
  stopButton = document.createElement("button");
  media = document.querySelector("video");
  media.style.width= '80%';
  media.removeAttribute("controls");
  //body.addEventListener('click',pausePlay);

  stopButton.innerHTML = "passer a l'etape suivant";
  playButton.innerHTML ="P";

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


function finOpera() {
  let div = document.createElement("div");
  div.innerHTML='<a href="casino.html" id="casino"><button>Aller au casino</button></a><a href="fin.html" id="finRech"><button>Recherche fini</button></a>';
  document.querySelector('.body').appendChild(div);

}

function fin(){
  let div = document.createElement("div");
  div.innerHTML='<a href="casino.html" id="casino"><button>Aller au casino</button></a><a href="opera.html" id="opera"><button>Aller a l\'opera</button></a><a  id="fin"><button>Saisir le code</button></a>';
  document.querySelector('.body').appendChild(div);
}
