function form() {
	 let message = new Object();
 message.loading = "Загрузка...";
 message.success = "Спасибо! Скоро мы с вами свяжемся";
 message.failure = "Что-то пошло не так...";

 let form = document.getElementsByClassName('main-form')[0],
     input = form.getElementsByTagName('input'),
     statusMessage = document.createElement('div');

     statusMessage.classList.add('status');

     form.addEventListener('submit', function(event) {
       event.preventDefault();
       form.appendChild(statusMessage);

    // AJAX
      let request = new XMLHttpRequest();
      request.open("POST", 'server.php')

      //Указываем кодировку данных
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      let formData = new FormData(form);

      request.send(formData);

      request.onreadystatechange = function() {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        }  else if (request.readyState === 4) {
             if (request.status == 200 && request.status < 300) {
                  statusMessage.innerHTML =  message.success;  //Добавляем контент на страницу
             }
             else {
                   statusMessage.innerHTML =  message.failure;
             }
        }
      }
          // Очищаем поля ввода
         for (let i = 0; i < input.length; i++) {
            input[i].value = '';
         }

     });


      let form2 = document.getElementById('form'),
     input2 = form2.getElementsByTagName('input'),
     statusMessage2 = document.createElement('div');

     statusMessage2.classList.add('status');

     form2.addEventListener('submit', function(event) {
       event.preventDefault();
       form2.appendChild(statusMessage2);

    // AJAX
      let request = new XMLHttpRequest();
      request.open("POST", 'server.php')

      //Указываем кодировку данных
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      let formData = new FormData(form2);

      request.send(formData);

      request.onreadystatechange = function() {
        if (request.readyState < 4) {
            statusMessage2.innerHTML = message.loading;
        }  else if (request.readyState === 4) {
             if (request.status == 200 && request.status < 300) {
                  statusMessage2.innerHTML =  message.success;  //Добавляем контент на страницу
             }
             else {
                   statusMessage2.innerHTML =  message.failure;
             }
        }
      }
          // Очищаем поля ввода
         for (let i = 0; i < input2.length; i++) {
            input2[i].value = '';
         }

     });
}

module.exports = form;