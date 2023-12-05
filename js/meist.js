// Koodi autor on Rasmus Valk koos ChatGPT abiga

// Pilt mida esmalt näidatakse
let slideIndex = 1;
showSlides(slideIndex);

// Järgmine/eelmine pilt
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// N-is pilt
function currentSlide(n) {
	showSlides((slideIndex = n));
}

// Piltide näitamis loogika
function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	// Ringiga edasi esimesele salidile
	if (n > slides.length) {
		slideIndex = 1;
	}
	// Ringiga tagasi viimasele slaidile
	if (n < 1) {
		slideIndex = slides.length;
	}
	// Muuda kõik pildid nähtamatuks
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// Muuda kõik täpid tumedaks
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	// Muuda õige pilt nähtavaks ja õige täpp heledaks
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
