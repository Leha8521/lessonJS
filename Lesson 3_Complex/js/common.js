var str = 'урок-3-был слишком легким'


function ucFirst() {
  console.log((str.charAt(0).toUpperCase()) + str.substring(1));
}

ucFirst();

var newStr = str.split('-').join(' ');
console.log(newStr);


var newStr2 = newStr.slice(-6);
document.write(newStr2.split('им').join('о'));
 