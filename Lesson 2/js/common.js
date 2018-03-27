var money = prompt('Чему равен Ваш бюджет?');
var imya = prompt('Название вашего магазина?');

var mainList = {
  budget: money,
  shopName: imya,
  shopGoods: [],
  employers: {},
  open: true
};

// for (var i = 0; i < 5; i++) {
//     var a = prompt('Введите вид товара');
//     if ((typeof(a)) === 'string' && (typeof(a)) !== null  &&  a !== ''  && a.length < 10) {
//       console.log('Все верно!');
//       mainList.shopGoods[i] = a;

//     }  else {
//         if ((typeof(a)) !== null) {
//       alert('Вы ввели не правельное значение, пожалуйста введите');
//        i--;
//       }
//     }
// }

// let i = 0;
//  while (i < 5) {
//         var a = prompt('Введите вид товара');
//         if ((typeof(a)) === 'string' && (typeof(a)) !== null  &&  a !== ''  && a.length < 10) {
//         console.log('Все верно!');
//         mainList.shopGoods[i] = a;
//         i++;
//  } else {  if ((typeof(a)) !== null) {
//      alert('Вы ввели не правельное значение, пожалуйста введите');
//      if (i === 0) { i = 0 } else {i--}

//  }

//  }

// }


  let i = 0;
  do {
    let a = prompt('Введите вид товара');
    if ((typeof(a)) === 'string' && (typeof(a)) !== null  &&  a !== ''  && a.length < 10) {
      console.log('Все верно!');
      mainList.shopGoods[i] = a;
      i++;
    } else {
      if ((typeof(a)) !== null) {
        alert('Вы ввели не правельное значение, пожалуйста введите');
        if (i === 0) { i = 0 } else {i--}

     }
    }
  }
    while (i < 5);


console.log(mainList);