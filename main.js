//seleziono un elemento del dom quindo il bottone
const buttonEl = document.querySelector('button');

//seleziono l'immagine
let imageEl = document.getElementById('white_lamp');

/*//quando faccio cliock sul bottone deve apparire un messaccio per esser sicura di aver clickato
buttonEl.addEventListener('click', function() {
   console.log('tasto cliccato!') 
 });*/

 //cambio immagine quando faccio click sul bottone
buttonEl.addEventListener('click',function(){
    changeImg(imageEl);
})

//accendo la lampadina
function changeImg(imageEl){
    imageEl.src = "assets/img/yellow_lamp.png"
}

