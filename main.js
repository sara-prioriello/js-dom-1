//seleziono un elemento del dom quindo il bottone
const buttonEl = document.querySelector('button');

//seleziono l'immagine
const imageEl = document.getElementById('white_lamp');

/*//quando faccio cliock sul bottone deve apparire un messaccio per esser sicura di aver clickato
buttonEl.addEventListener('click', function() {
   console.log('tasto cliccato!') 
 });*/

 //cambio immagine quando faccio click sul bottone
buttonEl.addEventListener('click',function(){
    changeImg(imageEl);
    changeBut(buttonEl);
})


/////////////////////////////////////////////////////////
//accendo la lampadina
/*function changeImg(imageEl){
    imageEl.src = "assets/img/yellow_lamp.png"
}*/
/////////////////////////////////////////////////////////

//BONUS

//cambio immagine ad ogni click
let srcString = imageEl.src;
console.log(srcString);
function changeImg(imageEl){
    if(imageEl.src.includes('white_lamp')){
            imageEl.src = "assets/img/yellow_lamp.png"
            console.log(imageEl.src);
    } else  {
            imageEl.src = "assets/img/white_lamp.png"
            console.log(imageEl.src);
    } 
}

function changeBut(buttonEl){
    if (buttonEl.innerText === 'Accendi'){
        buttonEl.innerText = 'Spegni'
    } else if(buttonEl.innerText === 'Spegni'){
        buttonEl.innerText = 'Accendi'
    }
    console.log(buttonEl.innerText)
}

