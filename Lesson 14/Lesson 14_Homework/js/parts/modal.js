function modal() {
	let more = document.querySelector('.more'),
     moreDetailed = document.querySelector('.description-btn'),
     overlay = document.querySelector('.overlay'),
     close = document.querySelector('.popup-close');



function moreOpen() {
    this.classList.add('more-splash');
    overlay.style.display = "block";
    document.body.style.overflow = 'hidden';
};

more.addEventListener('click', moreOpen);
moreDetailed.addEventListener('click', moreOpen);

close.addEventListener('click', function(){
   overlay.style.display = "none";
   more.classList.remove('more-splash');
   document.body.style.overflow = '';
});
   
moreDetailed.addEventListener('click', moreOpen);
}

module.exports = modal;