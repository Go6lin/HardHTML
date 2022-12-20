function  highlit () {
    document.body.addEventListener('click', function (event) {
        let classCharFirst = 'character__first';
        let classCharSecond = 'character__second';
        let classCharThird = 'character__third';
        let classCharForth = 'character__forth';
        let classElemToChange = '';
        let targ = event.target;
        if (targ.className.indexOf(classCharFirst)) {
            classElemToChange = classCharFirst;
            console.log(classElemToChange);
        }
        if (targ.className.indexOf(classCharSecond)) {
            classElemToChange = classCharSecond;
            console.log(classElemToChange);
        }
        if (targ.className.indexOf(classCharThird)) {
            classElemToChange = classCharThird;
            console.log(classElemToChange);
        }
        if (targ.className.indexOf(classCharForth)) {
            classElemToChange = classCharForth;
            console.log(classElemToChange);
        }
        let elemToChange = document.body.querySelector('.' + classElemToChange)
                elemToChange.style.backgroundColor = 'white';
                elemToChange.style.backgroundImage = 'url("images/stroke.svg")';
                elemToChange.style.backgroundSize = 'cover';
                elemToChange.style.backgroundPosition = 'bottom';
    });
}
//&& попробуй через логическое и
