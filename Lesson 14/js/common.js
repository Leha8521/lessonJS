let user = ( function() {
    
   let privat = function() {
      console.log('Hello, i am privat!')
   };

   let sayHello = function() {
        console.log('Hello!')
      };


   return { a: sayHello
   }

}());

console.log(user.a());