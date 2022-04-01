var controller = new ScrollMagic.Controller();

// build scenes
var revealElements = document.getElementsByClassName("slide");
for (var i = 0; i < revealElements.length; i++) {
	new ScrollMagic.Scene({
		triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
		triggerHook: 0.9
	})
		.setClassToggle(revealElements[i], "visible") // add class toggle
		.addTo(controller);
}
var slide2Elements = document.getElementsByClassName("slide2");
for (var i = 0; i < slide2Elements.length; i++) {
	new ScrollMagic.Scene({
		triggerElement: slide2Elements[i], // y value not modified, so we can use element as trigger as well
		triggerHook: 0.9
	})
		.setClassToggle(slide2Elements[i], "visible") // add class toggle
		.addTo(controller);
}
var overlayElements = document.getElementsByClassName("bg-image-overlay");
for (var i = 0; i < overlayElements.length; i++) {
	new ScrollMagic.Scene({
		triggerElement: overlayElements[i], // y value not modified, so we can use element as trigger as well
		duration: "30%",
		triggerHook: 0.5
	})
		.setClassToggle(overlayElements[i], "show") // add class toggle
		.addTo(controller);
}

const pageLoad = document.getElementById('pageLoadSim');

function simulatePageLoad() {
	const switchBG = localStorage.getItem("bg-switch");
	console.log('current', switchBG);
	if (switchBG === 'true') {
		localStorage.setItem("bg-switch", 'false');
	} else {
		localStorage.setItem("bg-switch", 'true');
	}
	updateBG();
	console.log('new', localStorage.getItem("bg-switch"));
}

pageLoad.addEventListener('click', simulatePageLoad);

function updateBG() {
	const blues = document.querySelectorAll('.bg-blue');
	const reds = document.querySelectorAll('.bg-red');
	const gradients = document.querySelectorAll('.bg-gradient');
	
	blues.forEach(blue => {
		blue.classList.remove('bg-blue');
		blue.classList.add('bg-red');
	})
	reds.forEach(red => {
		red.classList.remove('bg-red');
		red.classList.add('bg-blue');
	})
	gradients.forEach(grad => {
		grad.classList.toggle('reverse');
	})
}