// const questionItem = document.querySelectorAll('.questions__item-wrapper')
// const questionTitle = document.querySelectorAll('.questions__item-title')

// const questionIntro = document.querySelectorAll('.questions__item-intro')

// const questionImg = document.querySelectorAll('.questions__item-img-anim-off')

// for (let i = 0; i < questionTitle.length; i++) {
//     const title = questionTitle[i];
//     const item = questionItem[i]
//     const intro = questionIntro[i]
//     const img = questionImg[i]
//     item.addEventListener('click', () => {
//         item.classList.toggle('questions__item-wrapper-bg')
//         intro.classList.toggle('questions__item-show')
//         img.classList.toggle('questions__item-img-anim')

//     })
// }

let accordion = document.querySelector('.accordion-list');
let items = accordion.querySelectorAll('li');
let questions = accordion.querySelectorAll('.accordion-title');

questions.forEach(question => question.addEventListener('click', toggleAccordion));

function toggleAccordion() {

    thisItem = this.parentNode;

    items.forEach(item => {
        if (thisItem == item) {
            thisItem.classList.toggle('open');
            return;
        }

        item.classList.remove('open');
    })

}
