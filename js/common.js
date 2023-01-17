var moon = document.getElementsByClassName('moon');
var cloud1 = document.getElementsByClassName('cloud1');
var cloud2 = document.getElementsByClassName('cloud2');

window.onload = function(){
  moon[0].classList.add('fade-in--moon');
  setTimeout(function(){
    cloud1[0].classList.add('fade-in--cloud1');
    cloud2[0].classList.add('fade-in--cloud2');
  }, 300 );
}

let once = false;
	window.addEventListener('scroll', function () {
		taeget_position = document.querySelector('#point').getBoundingClientRect().top;
			if (taeget_position <= window.innerHeight && once !== true) {
				once = true;
        moon[1].classList.add('fade-in--moon');
        setTimeout(function(){
          cloud1[1].classList.add('fade-in--cloud1');
          cloud2[1].classList.add('fade-in--cloud2');
        }, 300 );
			}
	});