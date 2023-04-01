const mobileMenuOpt = document.querySelector('.mobileMenuOpt')

const enterMenuMobile = () => {
        mobileMenuOpt.style.animation = 'enterMenu .8s forwards ease-in-out';
}

const exitMenuMobile = () => {
    mobileMenuOpt.style.animation = 'exitMenu .8s forwards ease-in-out'
}

const btnMenu = document.querySelector('.mobileMenuBar')
const btnOpenMenu= document.querySelector('.closeMenuOpt')

btnMenu.addEventListener('click', enterMenuMobile)
btnOpenMenu.addEventListener('click', exitMenuMobile)

