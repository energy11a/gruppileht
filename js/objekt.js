// Koodi autor on Rasmus Valk koos ChatGPT abiga

// Kuulaja -- töötab juhuslikul hetkel esimese 60s jooksul peale lehe laadimist
document.addEventListener("DOMContentLoaded", function () {
	const minute = 60000;

	setTimeout(function () {
		setRandomPosition();
	}, Math.random() * minute);
});

// Arvutab nurga kahe punkti vahelise sirge ja x-telje vahel
function angle(cx, cy, ex, ey) {
	var dy = ey - cy;
	var dx = ex - cx;
	var theta = Math.atan2(dy, dx);
	theta *= 180 / Math.PI; // rad -> deg
	return theta;
}

// Objekti loogika
function setRandomPosition() {
	// Pildi valimine
	const element = document.querySelector(".objekt");
	if (Math.random() < 0.5) {
		element.style.backgroundImage = `url("../media/images/rakett.png")`;
	} else {
		element.style.backgroundImage = `url("../media/images/asteroid.png")`;
	}

	// Akna piirid
	const maxX = window.innerWidth - element.clientWidth;
	const maxY = window.innerHeight - element.clientHeight;

	// Pildi suurus
	const spriteWidth = 50;
	const spriteHeight = 50;

	// Algus- ja lõppkoordinaadid
	let randomStartX = 0;
	let randomStartY = 0;
	let randomFinishX = 0;
	let randomFinishY = 0;
	// Nende juhuslik seadmine
	if (Math.random() < 0.5) {
		randomStartX = spriteWidth;
		randomStartY = Math.floor(Math.random() * maxY) - 500;
		randomFinishX = maxX;
		randomFinishY = Math.floor(Math.random() * maxY) - 500;
	} else {
		randomStartX = Math.floor(Math.random() * maxX);
		randomStartY = -500;
		randomFinishX = Math.floor(Math.random() * maxX);
		randomFinishY = maxY - 500;
	}
	if (Math.random() < 0.5) {
		[randomStartX, randomFinishX] = [randomFinishX, randomStartX];
	}

	// Nurga arvutamine
	const rotation =
		angle(randomStartX, randomStartY, randomFinishX, randomFinishY) + 45;

	// CSSi muutmine
	element.style.width = `${spriteWidth}px`;
	element.style.height = `${spriteHeight}px`;

	// Võtmekaadrite seadmine
	const styleTag = document.styleSheets[0];
	const keyframesRule = styleTag.insertRule(
		`@keyframes translateToEnd {
            0% {
                transform: translate(${randomStartX}px, ${randomStartY}px) rotate(${rotation}deg); filter: brightness(0%);
            }
            20%, 80% {
                filter: brightness(100%)
            }
            100% {
                transform: translate(${randomFinishX}px, ${randomFinishY}px) rotate(${rotation}deg); filter: brightness(0%);
            }
        }`,
		styleTag.cssRules.length
	);

	// CSSi muutmine
	element.style.animation = "translateToEnd 3s linear 1";

	// Objekti peitmine kõige lõpus
	element.addEventListener("animationend", function () {
		element.style.display = "none";
	});
}
