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

email.addEventListener('focusout', e => {
    let value = e.target.value;
    value.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) === null ? e.target.classList.add('active') : e.target.classList.remove('active')
})

phone.addEventListener('focusout', e => {
    let value = e.target.value;
    value.toLowerCase()
    .match('^[0-9]*$') === null || value === '' ? e.target.classList.add('active') : e.target.classList.remove('active')
})