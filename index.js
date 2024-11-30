
function getIp() {
    fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(data => {
            alert('Ну все Марина, пизда тебе, я тебя вычеслила по IP')
            alert('Твой IP адрес:' + ' ' + data.query);
            alert('Страна:' + ' ' + data.country);
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error);
        });
}

