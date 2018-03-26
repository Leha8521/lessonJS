var Budget = prompt('Чему равен Ваш бюджет?');
var nameShop = prompt('Название Вашего магазина?');

  alert('Спасибо за ответы. Бюджет Вашего магазина ' + nameShop + 
  	     ' равен ' + Budget);



var goods1, goods2, goods3;
var string1;

    goods1 = prompt('Какой тип товаров будем продавать?');
    goods2 = prompt('Какой тип товаров будем продавать?');
    goods3 = prompt('Какой тип товаров будем продавать?');

var mainList = {
		mBudjet: 15000,
		nameShop: 'Перделер',
		shopGoods: [goods1, goods2, goods3],
		employers: {
			director: 'Вася',
			secretary: 'Оля',
            manager: 'Петя'
		},
		open: true

    };

    if (mainList.open) {string1 = ' магазин открыт'
      }
     else  { string1 = ' магазин закрыт' }; 


    alert('Бюджет - ' + mainList.mBudjet + ' Название магазина - ' + 
    	mainList.nameShop + ', Товар №1 - ' + mainList.shopGoods[0] + ' Товар №2 - ' + mainList.shopGoods[1] + 
    	' Товар №3 - ' + mainList.shopGoods[2] + '  ' + ' Наши сотрудники - ' + 'Директор: ' + mainList.employers.director + 
    	'; Секретарша: ' + mainList.employers.secretary + '; Менеджер: ' + mainList.employers.manager);

    alert('Бюджет одного дня составляет - ' + mainList.mBudjet/30 + ' руб.');
    alert('В данный момент - ' + string1);



    