function  highlit () {
    document.body.addEventListener('click', function (event) {
        let targ = event.target;
        console.log(targ.className)

            targ.style.backgroundColor = 'white';
            targ.style.backgroundImage = 'url("images/stroke.svg")';
            targ.style.backgroundSize = 'cover';
            targ.style.backgroundPosition = 'bottom';


    });
}
