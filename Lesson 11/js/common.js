let request = new XMLHttpRequest();
// 1) Создаем объект запроса

request.open("GET", 'server.php', true, login, password);

// 2) Настройка запроса

request.send()

// 3) Отправка запроса 