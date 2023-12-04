let slideIndex = 1;
showSlides(slideIndex);//näitab slaidi

function plusSlides(n) {//annab järgmise slaidi
	showSlides((slideIndex += n));
}

function currentSlide(n) {//annab praeguse slaidi
	showSlides((slideIndex = n));
}

function showSlides(n) {//funktsiooni slaidi vahetamiseks
	let i;
	let slides = document.getElementsByClassName("mySlides");//otsib slaidid
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {//keerutab tagasi algusesse kui lõpus
	}
	if (n < 1) {//keerutab lõppu kui alguses
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {//peida teised slaidid
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {//näita õiget slaidi
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";//näitamine on klassinimega ja block on paigutuse jaoks
	dots[slideIndex - 1].className += " active";
}
