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
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
