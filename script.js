var api_url = 'https://randomuser.me/api';
var button = document.getElementById('button');
var request_status = document.getElementById('status');

function display(data) {
    
    // Виокремимо лише корисні дані
    useful = data['results'][0];

    // Створимо div для зберігання інфомрації про людей
    profile = document.createElement('div');
    profile.setAttribute('id', 'profile');

    // Додамо картинку
    let pic = document.createElement('img');
    pic.src= useful['picture']['large'];
    pic.alt = 'Profile picture';
    profile.appendChild(pic);

    // Додамо поштовий індекс
    let postcode = document.createElement('p');
    postcode.innerText = `Postcode: ${useful['location']['postcode']}`;
    profile.appendChild(postcode);

    // Додамо координати
    let coords = document.createElement('p');
    coords.innerText = `Coordinates: ${useful['location']['coordinates']['latitude']}, ${useful['location']['coordinates']['longitude']}`;
    profile.appendChild(coords);

    // Додамо E-mail
    let email = document.createElement('p');
    email.innerText = `E-mail: ${useful['location']['postcode']}`;
    profile.appendChild(email);

    // Додамо поштовий індекс
    let city = document.createElement('p')
    city.innerText = `City: ${useful['location']['city']}`;
    profile.appendChild(city);

    // Додамо профіль людини на сторінку
    document.getElementById('results').appendChild(profile);
    request_status.innerText = 'Success!'
};

// Додаємо людину при натисканні на кнопку
button.addEventListener('click', () => {
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => display(data)).catch(error => request_status.innerText = error);
});