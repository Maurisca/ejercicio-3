let input = document.querySelector('input')
let ciudad = "buenos%20aires";
let ciudadName = document.querySelector('#ciudad');
let temp = document.querySelector('#temperatura')
let wicon = document.querySelector('#wicon')
let descripcion = document.querySelector('#descripcion')
let button = document.querySelector('button')
let sc = document.querySelector('#sc')



function cargarCiudad(){
    $.getJSON(
        // `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=fdd533266e28101881f610f2b8f1ebe1`,
        // `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=1a9b3670ada3ece0551373f7325e028d`,
        `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=dcec7df661b1e6b0edab51d796b7339c`,

    function(data){
        ciudadName.textContent = data.name;
        temp.textContent = data.main.temp;
        // temp.innerHTML = data.main.temp;
        // sc.innerHTML = data.main.feels_like;
        let icon = data.weather[0].icon
        wicon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        descripcion.textContent = data.weather[0].descripcion;

        console.log(data.weather[0].descripcion);
    });
}

button.addEventListener('click', function(){
    document.querySelector('.container').style.visibility = 'visible'
    cargarCiudad();
});