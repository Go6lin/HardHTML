document.querySelector('body').onclick = function (event) {
    let classes = ['character__first', 'character__second', 'character__third', 'character__forth'];
    let classElemToChange = '';
    let targetClass = event.target.className;

    if (targetClass === '') {
        targetClass = event.target.parentElement.className
    }

    classes.forEach((characterClass) =>{
        if (targetClass.indexOf(characterClass) > -1) {
            classElemToChange = characterClass;
        }
    });

    let elemToChange = document.body.querySelector('.' + classElemToChange)
    elemToChange.style.backgroundColor = 'white';
    elemToChange.style.backgroundImage = 'url("images/stroke.svg")';
    elemToChange.style.backgroundSize = 'cover';
    elemToChange.style.backgroundPosition = 'bottom';
};