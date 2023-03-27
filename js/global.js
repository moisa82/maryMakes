const Uls = document.querySelectorAll('nav ul')
let HideShow = false

const hideAndShowMenu = () => {
    if(HideShow === false){
        Uls[0].style.animation = 'enterMenu .8s forwards ease-in-out';
        Uls[1].style.animation = 'enterMenu .8s forwards ease-in-out';
        HideShow = true;
    }else if(HideShow === true){
        Uls[0].style.animation = 'exitMenu .0s forwards ease-in-out'
        Uls[1].style.animation = 'exitMenu .0s forwards ease-in-out'
        HideShow = false;
    }
}


const btnMenu = document.querySelector('.fa-solid', '.fa-bars')

btnMenu.addEventListener('click', hideAndShowMenu)
