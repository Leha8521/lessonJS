let textMenu = document.getElementsByTagName('li');

    textMenu[1].innerHTML = 'Второй пункт';
    textMenu[2].innerHTML = 'Третий пункт';
    

let newLi = document.createElement('li'),
    ul = document.getElementsByTagName('ul');

	   newLi.classList.add('menu-item');
	   newLi.innerHTML = 'Пятый пункт';
	   ul[0].appendChild(newLi);


let oneBody = document.querySelector('body');

       oneBody.style.background = 'url(img/apple_true.jpg)';


var divText = document.getElementsByTagName('div');
let string = divText[2].innerHTML;
let string2 = ' подлинную '; 
let textStyle = document.getElementById('title')

  divText[2].innerHTML = string.substring(0,27) + string2 + string.substring(28);
  textStyle.style.fontSize = '30px';

  divText[1].removeChild(divText[3]);

  function chooseApple() {
  	
          for (let i = 0; i < 1; i++) {
          	let srt = prompt('Как Вы относитесь к технике Apple?','');
  	      if ((typeof(srt)) === 'string' && (typeof(srt)) !== null  &&  srt !== '') {
  	        let stylePrompt = document.querySelectorAll('.prompt');
                //stylePrompt.style.fontSize = '40px';
  	        document.getElementById("prompt").textContent = srt;
  	        document.getElementById("prompt").style.fontSize = '20px';
  	        document.getElementById("prompt").style.lineHeight = '150px';

               // console.log(stylePrompt);

  	    }

  	          else { if ((typeof(srt)) !== null){ 	          	  
  	          	alert('Вы не ответили на вопрос');
  	          	i--;
  	          }
  	      }
  
       
   


    }
  };

  chooseApple();
  



