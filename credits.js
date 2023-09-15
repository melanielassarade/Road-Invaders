// body
let pseudoPlayer = sessionStorage.getItem("pseudo")
let score = sessionStorage.getItem("score")
let body = document.querySelector("body")
body.style.height = "100vh"
body.style.display = "flex";
body.style.alignItems = "center";
body.style.backgroundImage = "url(images/maxbg.jpg)";
body.style.backgroundRepeat = "repeat-x";
body.style.backgroundColor = "#c87857";

// div root
let root = document.querySelector('#root');
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.width ="50%";
root.style.margin ="auto";
root.style.fontFamily = "monospace";
root.style.textAlign = "center";
root.style.fontSize = "1.2rem";
root.style.color = "#6c0c04";
root.style.padding = "2rem";
root.style.backgroundColor = "rgba(255,255,255,0.5)";
root.style.border = "5px dashed #6c0c04";

//déclaration de l'audio
let audio = document.createElement("audio")
root.appendChild(audio)
audio.id = "monAudio"
audio.src = "sons/gameOver.mp3"
audio.autoplay = true;
audio.volume = 0.4;

//////////Affichage des crédits////////////
let credits = document.createElement("div");
credits.id = "credits"
root.appendChild(credits);

let creditGame = document.createElement("div");
creditGame.id = "creditGame";
creditGame.innerText = "Jeu conçu et réalisé par :";
credits.appendChild(creditGame);

    let creditGameName = document.createElement("p");
    creditGameName.id = "creditGameName";
    creditGameName.innerText = "Mélanie, Romain et Youssef"
    creditGame.appendChild(creditGameName);
    creditGameName.style.fontWeight = "bold";

let creditSpirit = document.createElement("div");
creditSpirit.id = "creditSpirit";
creditSpirit.innerText = "Inspiré de :";
credits.appendChild(creditSpirit);

    let creditSpiritName = document.createElement("p");
    creditSpiritName.id = "creditSpiritName";
    creditSpiritName.innerText = "Mad Max Fury Road";
    creditSpirit.appendChild(creditSpiritName);
    creditSpiritName.style.fontWeight = "bold";
  
let creditDesignCars = document.createElement("div");
creditDesignCars.id = "creditDesignCars";
creditDesignCars.innerText = "Design des véhicules :";
credits.appendChild(creditDesignCars);

    let creditDesignCarsName = document.createElement("p");
    creditDesignCarsName.id = "creditDesignCarsName";
    creditDesignCarsName.innerText = "Illustration par Evgeniy Yudin et animation par Misha Petrick";
    creditDesignCars.appendChild(creditDesignCarsName);
    creditDesignCarsName.style.fontWeight = "bold";

let creditOST = document.createElement("div");
creditOST.id = "creditOST";
creditOST.innerText = "Bande Son Originale :";
credits.appendChild(creditOST);

    let creditOSTName = document.createElement("p");
    creditOSTName.id = "creditOSTName";
    creditOSTName.innerText = "Brocas Helm - Cry of the Banshee";
    creditOST.appendChild(creditOSTName);
    creditOSTName.style.fontWeight = "bold";

let creditTools = document.createElement("div");
creditTools.id = "creditTools";
creditTools.innerText = "Sources et outils :";
credits.appendChild(creditTools);

    let creditToolsName = document.createElement("p");
    creditToolsName.id = "creditToolsName";
    creditToolsName.innerText = "Behance - Google - Spotify - Google Fonts - Clideo - Universal SoundJay - Game Theme Songs";
    creditTools.appendChild(creditToolsName);
    creditToolsName.style.fontWeight = "bold";

let closeCredit = document.createElement("button")
root.appendChild(closeCredit);

closeCredit.style.margin = "auto";
closeCredit.style.marginTop = "1rem";
closeCredit.style.padding = "0.5rem";
closeCredit.innerText = "Retour";
closeCredit.style.width = "12rem";
closeCredit.style.fontFamily = "monospace";
closeCredit.style.textAlign = "center";
closeCredit.style.fontSize = "1rem";
closeCredit.style.fontWeight = "bold";
closeCredit.style.color = "#6c0c04";
closeCredit.style.backgroundColor = "rgba(0,0,0,0)";
closeCredit.style.border = "5px dashed #6c0c04";
closeCredit.style.transition = "0.5s";

closeCredit.addEventListener('mouseover', function(){
    closeCredit.style.backgroundColor = "#6c0c04";
    closeCredit.style.color = "yellow"; 
});

closeCredit.addEventListener('mouseleave', function(){
    closeCredit.style.color = "#6c0c04";
    closeCredit.style.backgroundColor = "rgba(0,0,0,0)";
});
  
closeCredit.addEventListener("click" , function(){
    window.location.replace("gameOver.html");
});

