var num    = 33721,
    output = [],
    sNum   = num.toString(),
    summa;
    

    output.push(+sNum.charAt(0));
    output.push(+sNum.charAt(1));
    output.push(+sNum.charAt(2));
    output.push(+sNum.charAt(3));
    output.push(+sNum.charAt(4));

   
   summa = output[0] + output[1] + output[2] + output[3] + output[4];
   

    console.log('Сумма числа 33721 = ' + summa, 'Число ' + summa + ' в третий степени = ' + summa**3);

