
// Header Telegram link 

const link = document.querySelector('.header_container_lower_link')
const closeBtn = document.querySelector('.closeBtn')

closeBtn.addEventListener('click' , e => {
    e.preventDefault()
    link.classList.add('activeLink')
})