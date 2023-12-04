document.addEventListener("DOMContentLoaded", function () {
	const minute = 60000;//1 minut millisekundites

	setTimeout(function () {//ootab kuni minuti et käivitada, käivitub juhusliku valiku põhjal ka varem
		setRandomPosition();
	}, Math.random() * minute);
});

function angle(cx, cy, ex, ey) {//arvutab nurga kui palju on pööratud
	var dy = ey - cy;
	var dx = ex - cx;
	var theta = Math.atan2(dy, dx); // range (-PI, PI]
	theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
	//if (theta < 0) theta = 360 + theta; // range [0, 360)
	return theta;
}

function setRandomPosition() {//paneb juhusiku positsiooni ja pildi ja liigutab pilti
	const element = document.querySelector(".objekt");
	if (Math.random() < 0.5) {
		element.style.backgroundImage = `url("../media/images/rakett.png")`;
	} else {
		element.style.backgroundImage = `url("../media/images/asteroid.png")`;
	}

	const maxX = window.innerWidth - element.clientWidth;
	const maxY = window.innerHeight - element.clientHeight;

	const spriteWidth = 50;//alguslaius
	const spriteHeight = 50;//algus kõrgus

	let randomStartX = 0;
	let randomStartY = 0;
	let randomFinishX = 0;
	let randomFinishY = 0;
	if (Math.random() < 0.5) {//juhuslikud alguspositsioonid
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
	if (Math.random() < 0.5) {//vahetab muutujad juhuslikult omavahel ära
		[randomStartX, randomFinishX] = [randomFinishX, randomStartX];
	}

	const rotation =//pööramise arvutus
		angle(randomStartX, randomStartY, randomFinishX, randomFinishY) + 45;

	element.style.width = `${spriteWidth}px`;
	element.style.height = `${spriteHeight}px`;

	// Create the ending keyframe dynamically
	const styleTag = document.styleSheets[0];
	const keyframesRule = styleTag.insertRule(//tekitab animatsiooni
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

	// Apply the translation using the dynamically created keyframe
	element.style.animation = "translateToEnd 3s linear 1";//paneb elemendile animatsiooni

	// Hide the element after the animation completes
	element.addEventListener("animationend", function () {//peidab elemendi
		element.style.display = "none";
	});
}
