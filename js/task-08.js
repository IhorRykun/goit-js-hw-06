const form = document.querySelector(".login-form");
form.addEventListener(`submit`, onClickForm);

function onClickForm(event) {
    event.preventDefault();

    const elementForm = event.currentTarget.elements;
    const mail = elementForm.email.value;
    const password = elementForm.password.value;
    if (mail === '') {
        alert('warning mail');
    } else if (password === '') {
          alert('warning password');
    } event.currentTarget.reset();
    const formDataEl = {
        mail,
        password,
    };
    console.log(formDataEl);

}
