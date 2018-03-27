var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье' ];

for (let i = 0; i < (week.length); i++) {

   if ((week[i] === 'суббота') || (week[i] === 'воскресенье') ) {
        document.write('<strong>' + week[i] + '</strong>' + '<br />');
   }  else
      if (week[i] === 'вторник') {
        document.write('<i>' + week[i] + '</i>' + '<br />');
      }

    else { 
    
  document.write(week[i] + '<br />');
}
}

var arr = ['35', '55', '5868', '75', '88', '3698', '7895'];
    
   for (let i = 0; i < 7; i++) {
       if ((arr[i].charAt(0)) === '3' || (arr[i].charAt(0)) === '7') {
            console.log(arr[i]);
       }
      
   }

