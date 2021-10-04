
// Header Telegram link 

const link = document.querySelector('.header_container_lower_link')

link.addEventListener('click' , e => {
    e.preventDefault()
    link.classList.add('activeLink')
})