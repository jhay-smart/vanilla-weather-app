let searchformElement = document.querySelector('#search-form');

function handleSubmitForm(event){
    event.preventDefault();
    let searchInputElement = document.querySelector('#search-form-input');
    let cityElement = document.querySelector('#city');
    cityElement.innerHTML = searchInputElement.value;

}

searchformElement.addEventListener('submit', handleSubmitForm);