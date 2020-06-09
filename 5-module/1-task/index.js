/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let attributes = table.querySelectorAll('[data-available]');
    console.log(attributes);
    for (let available of attributes) {
        console.log(available);
    if (available.dataset.available === 'true') {
        console.log('true');
        available.parentNode.classList.add('available');
    }
    else if (available.dataset.available === 'false' ) {
        console.log('false');
        available.parentNode.classList.add('unavailable');   
        }
    }

    let hiddens =table.querySelectorAll('tbody > tr');
    for (let hidden of hiddens) {
        if (!(hidden.classList.contains('available') || hidden.classList.contains('unavailable'))) {
            hidden.setAttribute('hidden','true');
        }
    }


    let genders = table.querySelectorAll('td');
    for (let gender of genders) {
        if (gender.innerHTML === "m") {
            gender.parentNode.classList.add('male');
        }
        if (gender.innerHTML === "f") {
            gender.parentNode.classList.add('female');
        }

    }

    for (let age of genders) {
        if(parseInt(age.innerHTML) < 18){
            age.parentNode.style.textDecoration = "line-through";
        }
    }

}
