// let colors = [
//     'rgb(240, 14, 128)',
//     'rgb(200, 29, 100)',
//     'rgb(30, 100, 158)',
//     'rgb(50, 230, 18)',
//     'rgb(47, 10, 198)',
//     'rgb(10, 55, 258)',
// ]

let nivel = 6;
let colors = generateRandomColors(nivel);
let cuadraditos = document.querySelectorAll('.square')

// let span = document.querySelector('#colorDisplay')
let pickedColor = pickColor();
// span.textContent = pickedColor

let h1 = document.querySelector('h1')
let h2 = document.querySelector('#h12')
let body = document.querySelector('body')

let easyButton = document.querySelector('#easyButton')
let hardButton = document.querySelector('#hardButton')
let reset = document.querySelector('#reset')
let colorDisplay = document.querySelector('#colorDisplay')
let mensaje = document.querySelector('#messages')

easyButton.addEventListener('click', function(){
    hardButton.classList.remove('selected');
    easyButton.classList.add('selected');
    nivel = 3;
    colors = generateRandomColors(nivel);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < cuadraditos.length; i++) {
        if (colors[i]){
            cuadraditos[i].style.backgroundColor = colors[i];
        } else {
            cuadraditos[i].style.display = 'none';
        }
    }
})

hardButton.addEventListener('click', function(){
    easyButton.classList.remove('selected');
    hardButton.classList.add('selected');
    nivel = 6;
    colors = generateRandomColors(nivel);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < cuadraditos.length; i++) {
        cuadraditos[i].style.background = colors[i];
        cuadraditos[i].style.display = 'block';
    }
})

reset.addEventListener('click', function(){
    colors =  generateRandomColors(nivel);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = 'nuevo color';
    mensaje.textContent = '';
    for (let i = 0; i < cuadraditos.length; i++) {
        cuadraditos[i].style.background = colors[i];
    }
    h1.style.background = 'steelblue';
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < colors.length; i++) {
    cuadraditos[i].style.backgroundColor = colors[i]

    cuadraditos[i].addEventListener('click', function (){
        let clickedColor = this.style.background;
        if (clickedColor === pickedColor){
            mensaje.textContent = 'GANASTE';
            reset.textContent = 'JUGAR DE NUEVO?';
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            h2.style.background = clickedColor;
            colorDisplay.style.background = clickedColor;
        } else {
            this.style.background = '#232323';
            mensaje.textContent = 'PRUEBA DE NUEVO';
        }
    })
}


function changeColors(color){
    for (let i = 0; i < cuadraditos.length; i++) {
        cuadraditos[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let colorRandom = Math.floor(Math.random() * colors.length)
    return colors[colorRandom]
}

function generateRandomColors(arr) {
    let colo = [];
    for (let i = 0; i < arr; i++) {
      colo.push(randomColor());
    }
    return colo;
  }

function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}



