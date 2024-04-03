let searchformElement = document.querySelector('#search-form');

function updateWeatherData(response){
    let data = response.data;
    let temp = document.querySelector('#weather-app-temp-value');
    temp.innerHTML = Math.floor(data.temperature.current);
    let cityElement = document.querySelector('#city');
    cityElement.innerHTML = response.data.city;
}

function searchCity(city){

    let apiKey = '9c7baebb34449o5b60fb55e3c8fata34';
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
   axios.get(apiUrl).then(updateWeatherData);
}

function handleSubmitForm(event){
    event.preventDefault();
    let searchInputElement = document.querySelector('#search-form-input');
    
    searchCity(searchInputElement.value);
    

}

searchformElement.addEventListener('submit', handleSubmitForm);

searchCity('Nigeria')