
// Header Telegram link 

const link = document.querySelector('.header_container_lower_link')
const closeBtn = document.querySelector('.closeBtn')

closeBtn.addEventListener('click' , e => {
    e.preventDefault()
    link.classList.add('activeLink')
})

// login

const login = document.querySelector('.login')
const login_show = document.querySelector('.login_show')

login.addEventListener('click' , e => {
    e.preventDefault()

    login_show.classList.toggle('activeSpan')
})

login_show.addEventListener('click' , e => {
    e.preventDefault()

    window.open('login.html')
})