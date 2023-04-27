const refs = {
	controls: document.querySelector('#controls'),
	input: document.querySelector('#controls input'),
	boxes: document.querySelector('#boxes'),
	createBtn: document.querySelector('[data-create]'),
	destroyBtn: document.querySelector('[data-destroy]'),
};

refs.createBtn.addEventListener('click', createClick);
refs.destroyBtn.addEventListener('click', destroyBoxes);
refs.input.addEventListener('input', inputChange);

let amount = 0;
const size = 30;
const step = 10;
const boxes = [];

function createClick() {
	amount = refs.input.value;
	createBoxes(amount);
}

function destroyBoxes() {
	refs.boxes.innerHTML = '';
}

function inputChange() {
	amount = refs.input.value;
}

function createBoxes(amount) {
	for (let i = 0; i < amount; i += 1) {
		const box = document.createElement('div');
		box.style.width = `${size + step * i}px`;
		box.style.height = `${size + step * i}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxes.push(box);
	}

	refs.boxes.append(...boxes);
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
