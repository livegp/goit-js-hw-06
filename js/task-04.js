const counter = document.getElementById('counter');
const counterValue = document.getElementById('value');
let value = 0;

counter.addEventListener('click', event => {
	if (event.target.dataset.action === 'decrement') {
		value--;
	} else if (event.target.dataset.action === 'increment') {
		value++;
	}

	counterValue.textContent = value;
});
