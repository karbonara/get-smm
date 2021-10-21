const themeButton = document.querySelectorAll('.nav__link-theme')
const page = document.querySelector('.page')

for (let i = 0; i < themeButton.length; i++) {
    themeButton[i].addEventListener('click', () => {
        page.classList.toggle('dark-theme')
    })

}

