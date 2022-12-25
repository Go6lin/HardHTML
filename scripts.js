document.querySelector('body').onclick = function (event) {
    let classes = ['character__first', 'character__second', 'character__third', 'character__forth'];
    let classElemToChange = '';
    let targetClass = event.target.className;
    let skillsToChange = '';
    let skillsToReturnOne = '';
    let skillsToReturnTwo = '';
    let skillsToReturnThree = '';
    let classToReturnOne = '';
    let classToReturnTwo = '';
    let classToReturnThree = '';
    let imgSetOne = 'char1';
    let imgSetTwo = 'char2';
    let imgSetThree = 'char3';
    let imgSetForth = 'char4';

    if (targetClass === '') {
        targetClass = event.target.parentElement.className
    }
    classes.forEach((characterClass) =>{
        if (targetClass.indexOf(characterClass) > -1) {
            if (classes.indexOf(characterClass) === 0) {
                skillsToChange = imgSetOne;
            } else if (classes.indexOf(characterClass) === 1) {
                skillsToChange = imgSetTwo;
            } else if (classes.indexOf(characterClass) === 2) {
                skillsToChange = imgSetThree;
            } else {
                skillsToChange = imgSetForth;
            }
            classElemToChange = characterClass;
        }
    });

    let id = classes.indexOf(classElemToChange);
    classes.splice(id, 1);
    classToReturnOne = classes[0];
    classToReturnTwo = classes[1];
    classToReturnThree = classes[2];
    if (classToReturnOne === 'character__first') {
        skillsToReturnOne = imgSetOne;
    } else {
        skillsToReturnOne = imgSetTwo;
    }
    if (classToReturnTwo === 'character__second') {
        skillsToReturnTwo = imgSetTwo;
    } else {
        skillsToReturnTwo = imgSetThree;
    }
    if (classToReturnThree === 'character__third') {
        skillsToReturnThree = imgSetThree;
    } else {
        skillsToReturnThree = imgSetForth;
    }

    let mainElemToChange = document.body.querySelector('.' + classElemToChange);
    let nameElemToChange = document.body.querySelector('.' + classElemToChange + '-info-name');

    let skillListElemToChange = document.body.querySelector('.skill-list__' + classElemToChange);

    let firstSkillToChange = document.body.querySelector('.skill-list__first__' + classElemToChange);
    let secondSkillToChange = document.body.querySelector('.skill-list__second__' + classElemToChange);
    let thirdSkillToChange = document.body.querySelector('.skill-list__third__' + classElemToChange);
    let forthSkillToChange = document.body.querySelector('.skill-list__forth__' + classElemToChange);

    let skillDetailLabelBoxOne = document.body.querySelector('.first-skill-label');
    let skillDetailLabelBoxTwo = document.body.querySelector('.second-skill-label');
    let skillDetailLabelBoxThree = document.body.querySelector('.third-skill-label');

    let nameElemToReturnOne = document.body.querySelector('.' + classToReturnOne + '-info-name');
    let nameElemToReturnTwo = document.body.querySelector('.' + classToReturnTwo + '-info-name');
    let nameElemToReturnThree = document.body.querySelector('.' + classToReturnThree + '-info-name');

    let elementToReturnOne = document.body.querySelector('.' + classToReturnOne);
    let elementToReturnTwo = document.body.querySelector('.' + classToReturnTwo);
    let elementToReturnThree = document.body.querySelector('.' + classToReturnThree);

    let skillListElemToReturnOne = document.body.querySelector('.skill-list__' + classToReturnOne);
    let skillListElemToReturnTwo = document.body.querySelector('.skill-list__' + classToReturnTwo);
    let skillListElemToReturnThree = document.body.querySelector('.skill-list__' + classToReturnThree);

    let firstSkillToReturnOne =  document.body.querySelector('.skill-list__first__' + classToReturnOne);
    let secondSkillToReturnOne =  document.body.querySelector('.skill-list__second__' + classToReturnOne);
    let thirdSkillToReturnOne =  document.body.querySelector('.skill-list__third__' + classToReturnOne);
    let forthSkillToReturnOne =  document.body.querySelector('.skill-list__forth__' + classToReturnOne);

    let firstSkillToReturnTwo = document.body.querySelector('.skill-list__first__' + classToReturnTwo);
    let secondSkillToReturnTwo = document.body.querySelector('.skill-list__second__' + classToReturnTwo);
    let thirdSkillToReturnTwo = document.body.querySelector('.skill-list__third__' + classToReturnTwo);
    let forthSkillToReturnTwo = document.body.querySelector('.skill-list__forth__' + classToReturnTwo);

    let firstSkillToReturnThree = document.body.querySelector('.skill-list__first__' + classToReturnThree);
    let secondSkillToReturnThree = document.body.querySelector('.skill-list__second__' + classToReturnThree);
    let thirdSkillToReturnThree = document.body.querySelector('.skill-list__third__' + classToReturnThree);
    let forthSkillToReturnThree = document.body.querySelector('.skill-list__forth__' + classToReturnThree);


    mainElemToChange.style.backgroundColor = 'white';
    mainElemToChange.style.backgroundImage = 'url("images/stroke.svg")';
    mainElemToChange.style.backgroundSize = 'cover';
    mainElemToChange.style.backgroundPosition = 'bottom';
    nameElemToChange.innerHTML = '<img src="images/'+ skillsToChange +'/charNameB.svg" width="29px">';
    skillListElemToChange.style.backgroundColor = 'white';
    skillListElemToChange.style.border = 'solid 1px black';
    firstSkillToChange.style.backgroundImage = 'url("images/'+skillsToChange+'/skill01b.svg")';
    secondSkillToChange.style.backgroundImage = 'url("images/'+skillsToChange+'/skill02b.svg")';
    thirdSkillToChange.style.backgroundImage = 'url("images/'+skillsToChange+'/skill03b.svg")';
    forthSkillToChange.style.backgroundImage = 'url("images/'+skillsToChange+'/skill04b.svg")';


    skillDetailLabelBoxOne.innerHTML = '<img src="images/'+skillsToChange+'/skill01b.svg" width="65px">';
    skillDetailLabelBoxTwo.innerHTML = '<img src="images/'+skillsToChange+'/skill03b.svg" width="65px">';
    skillDetailLabelBoxThree.innerHTML = '<img src="images/'+skillsToChange+'/skill04b.svg" width="65px">';

    skillListElemToReturnOne.style.backgroundColor = '#1F2326FF';
    skillListElemToReturnTwo.style.backgroundColor = '#1F2326FF';
    skillListElemToReturnThree.style.backgroundColor = '#1F2326FF';

    firstSkillToReturnOne.style.backgroundImage = 'url("images/'+skillsToReturnOne+'/skill01w.svg")';
    secondSkillToReturnOne.style.backgroundImage = 'url("images/'+skillsToReturnOne+'/skill02w.svg")';
    thirdSkillToReturnOne.style.backgroundImage = 'url("images/'+skillsToReturnOne+'/skill03w.svg")';
    forthSkillToReturnOne.style.backgroundImage = 'url("images/'+skillsToReturnOne+'/skill04w.svg")';

    firstSkillToReturnTwo.style.backgroundImage = 'url("images/'+skillsToReturnTwo+'/skill01w.svg")';
    secondSkillToReturnTwo.style.backgroundImage = 'url("images/'+skillsToReturnTwo+'/skill02w.svg")';
    thirdSkillToReturnTwo.style.backgroundImage = 'url("images/'+skillsToReturnTwo+'/skill03w.svg")';
    forthSkillToReturnTwo.style.backgroundImage = 'url("images/'+skillsToReturnTwo+'/skill04w.svg")';

    firstSkillToReturnThree.style.backgroundImage = 'url("images/'+skillsToReturnThree+'/skill01w.svg")';
    secondSkillToReturnThree.style.backgroundImage = 'url("images/'+skillsToReturnThree+'/skill02w.svg")';
    thirdSkillToReturnThree.style.backgroundImage = 'url("images/'+skillsToReturnThree+'/skill03w.svg")';
    forthSkillToReturnThree.style.backgroundImage = 'url("images/'+skillsToReturnThree+'/skill04w.svg")';

    nameElemToChange.innerHTML = '<img src="images/'+ skillsToChange +'/charNameB.svg" width="29px">';
    nameElemToChange.innerHTML = '<img src="images/'+ skillsToChange +'/charNameB.svg" width="29px">';
    nameElemToChange.innerHTML = '<img src="images/'+ skillsToChange +'/charNameB.svg" width="29px">';

    nameElemToReturnOne.innerHTML = '<img src="images/'+ skillsToReturnOne +'/charNameW.svg" width="29px">';
    nameElemToReturnTwo.innerHTML = '<img src="images/'+ skillsToReturnTwo +'/charNameW.svg" width="29px">';
    nameElemToReturnThree.innerHTML = '<img src="images/'+ skillsToReturnThree +'/charNameW.svg" width="29px">';

    elementToReturnOne.style.backgroundColor = '#1F2326FF';
    elementToReturnTwo.style.backgroundColor = '#1F2326FF';
    elementToReturnThree.style.backgroundColor = '#1F2326FF';


 };