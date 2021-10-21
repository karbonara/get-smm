// const newModal = document.createElement('div')
// newModal.classList.add('modal')

// newModal.innerHTML = `
// <div class="modal__container">
//     <ul class="modal__list">
//         <li>
//             <a href="#">Coupon Packages</a>
//         </li>
//         <li>
//             <a href="#">Contact us</a>
//         </li>
//         <li>
//             <a href="#">Wat’s new</a>
//         </li>
//         <li>
//             <a href="#">Pricing</a>
//         </li>
//         <li>
//             <a href="#">News</a>
//         </li>
//         <li>
//             <a href="faq.html">Faq</a>
//         </li>
//         <li>
//             <a href="#">Blog</a>
//         </li>
//         <li>
//             <a href="#">Support</a>
//         </li>
//     </ul>
// </div>

// <div class="modal__footer">
//     <div class="footer__items footer__items-modal">
//         <h3>Our features</h3>
//         <ul class="footer__item">
//             <li>
//                 <a href="#">Automatic promotion</a>
//             </li>
//             <li>
//                 <a href="#">Drip-feed</a>
//             </li>
//             <li>
//                 <a href="#">Automatic promotion</a>
//             </li>
//         </ul>
//         <h3>Our services</h3>
//         <ul class="footer__item">
//             <li>
//                 <a href="#">YouTube Promotion</a>
//             </li>
//             <li>
//                 <a href="#">Instagram Promotion</a>
//             </li>
//             <li>
//                 <a href="#">TikTok Promotion</a>
//             </li>
//             <li>
//                 <a href="#">Twitch Promotion </a>
//             </li>
//             <li>
//                 <a href="#">Spotify Promotion </a>
//             </li>
//             <li>
//                 <a href="#">Other Networks </a>
//             </li>
//         </ul>
//     </div>
//     <div class="footer__items footer__items-modal">
//         <h3>Our company</h3>
//         <ul class="footer__item">
//             <li>
//                 <a href="#">About GetSMM</a>
//             </li>
//             <li>
//                 <a href="#">Our Team</a>
//             </li>
//             <li>
//                 <a href="#">Our traffic sources</a>
//             </li>
//         </ul>
//         <h3>For resellers</h3>
//         <ul class="footer__item">
//             <li>
//                 <a href="#">API Integration </a>
//             </li>
//             <li>
//                 <a href="#">White Label</a>
//             </li>
//         </ul>
//         <h3>Earn with GetSMM</h3>
//         <ul class="footer__item">
//             <li>
//                 <a href="#">Tasks</a>
//             </li>
//             <li>
//                 <a href="#">Referral Program</a>
//             </li>
//         </ul>
//     </div>
//     <div >
//        <div>
//         <p class="modal__footer-date">Mo-Fri 7AM - 4PM</p>
//         <p class="modal__footer-date">7:00 - 16:00 UTC</p>
//         <p class="modal__footer-text">The average response time is usually 5-10 minutes.</p>
//        </div>
//         <ul class="modal__footer-icons">
//             <li>
//                 <a href="#"><img src="img/icons/contact-skype.svg" alt="Иконка скайпа"> @get_smm</a>
//             </li>
//             <li>
//                 <a href="#"><img src="img/icons/contact-gmail.svg" alt="Иконка почты">get_smm</a>
//             </li>
//             <li>
//                 <a href="#"><img src="img/icons/contact-telegram.svg"
//                         alt="Иконка телеграма">support@get-smm.com</a>
//             </li>
//         </ul>
//     </div>
// </div>

// `


// const navMain = document.querySelectorAll('.modal-block')

// const navMain = document.querySelector('.nav__main')

// for (let index = 0; index < navMain.length; index++) {

//     const navsMain = navMain[index];

//     navsMain.appendChild(newModal)

// }

// navMain.appendChild(newModal)

const modal = document.querySelector('.modal')

const btnModal = document.querySelector('.btn__modal-mob')

const btnModalClose = document.querySelector('.btn__off-mob')

btnModal.addEventListener('click', () => {
    modal.classList.add('modal__on')
    btnModal.classList.add('btn__off')
    btnModalClose.classList.add('btn__on')

})

btnModalClose.addEventListener('click', () => {
    modal.classList.remove('modal__on')
    btnModal.classList.remove('btn__off')
    btnModalClose.classList.remove('btn__on')

})