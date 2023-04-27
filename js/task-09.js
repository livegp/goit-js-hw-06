const refs = {
	btn: document.querySelector('.change-color'),
	body: document.querySelector('body'),
	span: document.querySelector('.color'),
};

refs.btn.addEventListener('click', changeColor);

function changeColor() {
	refs.body.style.backgroundColor = getRandomHexColor();
	refs.span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
