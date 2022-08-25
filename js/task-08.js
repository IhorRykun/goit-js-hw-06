const form = document.querySelector(".login-form");
form.addEventListener(`submit`, onClickForm);

function onClickForm(event) {
    event.preventDefault();

    const elementForm = event.currentTarget.elements;
    const mail = elementForm.email.value;
    const password = elementForm.password.value;
    if (mail === '' || password === '') {
        event.currentTarget.reset();
        return alert(`warning: correct maill and password`);
    }
    console.log(`email:${mail}, password ${password}`);
    }
