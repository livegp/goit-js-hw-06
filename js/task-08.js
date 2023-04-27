const forms = document.querySelector('.login-form');

forms.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const {
		elements: {email, password},
	} = event.currentTarget;

	if (email.value === '' || password.value === '') {
		return alert('Будь-ласка заповніть усі поля!');
	}

	const formData = {
		email: email.value,
		password: password.value,
	};
	console.log(formData);
	event.currentTarget.reset();
	return formData;
}
