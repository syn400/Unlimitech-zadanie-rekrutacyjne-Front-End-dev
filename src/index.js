// timer

let btnList = document.querySelectorAll('.like-btn');
btnList.forEach(e => e.addEventListener('click', t => {
    let element = t.target.classList;
    console.log(element.value)
    if(element.value.includes('active')) {
        element.remove('active');
    } else {
        element.add('active')
    }
}))


// form validation
let email = document.getElementById('nl-email');
let phone = document.getElementById('nl-phone');
let submitNewsletter = document.getElementById('nl-submit');

submitNewsletter.addEventListener('click', e => {
    e.preventDefault();
    email.value.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) === null ? email.classList.add('active') : email.classList.remove('active');
    phone.value.match('^[0-9]*$') === null || phone.value === '' ? phone.classList.add('active') : phone.classList.remove('active');
})