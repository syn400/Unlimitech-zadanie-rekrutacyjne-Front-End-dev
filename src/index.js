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