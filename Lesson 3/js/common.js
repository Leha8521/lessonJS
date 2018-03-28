var money,
    imya,
    time,
    price
    


function start() {
    money = prompt('Чему равен Ваш бюджет?');
   
    while (isNaN(money) || money === "" || money === null) {
      alert("Вы ввели не правильное значение");
      money = prompt('Чему равен Ваш бюджет?');
    }

    imya = prompt('Название вашего магазина?').toUpperCase();
    time = 10;
}

start();

var mainList = {
  budget: money,
  shopName: imya,
  shopGoods: [],
  employers: {},
  open: false,
  discount: true
};


function chooseGoods() {
  for (var i = 0; i < 5; i++) {
      var a = prompt('Введите вид товара');
      if ((typeof(a)) === 'string' && (typeof(a)) !== null  &&  a !== ''  && a.length < 10) {
        console.log('Все верно!');
        mainList.shopGoods[i] = a;

      }  else {
          if ((typeof(a)) !== null) {
        alert('Вы ввели не правельное значение, пожалуйста введите');
         i--;
        }
      }
   }
}

chooseGoods();


function workTime(time) {
     if (time < 0) {
        console.log('Такого не может быть!');
     }  else if (time > 8 && time < 20) {
          console.log('Время работать!')
     } else if (time < 24) {
             console.log('Уже слишком поздно!')
     } else  {
                console.log('В сутках только 24 часа');
     }
  }
 
 workTime(18);

function calcBudget() {
 alert('Ежедневный бюджет = ' + mainList.budget / 30);
}

calcBudget();

function calcPrice(price) {
  if (mainList.discount === true) {
    price = (price * 80) / 100;
    console.log('Цена по дисконтной карте = ' + price);
  } else {
    console.log('У вас нет скидки');
  }
}

calcPrice(5000);

//Функция по найму сотрудников


  for (let i = 0; i < 3; i++) {
      var b = prompt('Введите имя ' + (i+1) + ' - го сотрудника');
       if ((typeof(b)) === 'string' && (typeof(b)) !== null  &&  b !== ''  && b.length < 10) {
          mainList.employers[i] = (i + 1) + '-' + b;

      }  else  if ((typeof(b)) !== null) {
        alert('Вы ввели не правельное значение, пожалуйста введите');
         i--;
        }
      



}


console.log(mainList);





