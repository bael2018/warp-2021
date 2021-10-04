
// Email

const emailValue = document.querySelector('.email_value')
const emailLabel = document.querySelector('.email_label')

emailValue.addEventListener('focus' , () => {
    emailLabel.classList.add('activeLabel')
})

emailValue.addEventListener('blur' , e => {
    if(!e.target.value) emailLabel.classList.remove('activeLabel')
})

emailValue.addEventListener('input' , e => {
    const value = e.target.value

    if(value !== ''){
        emailLabel.classList.add('activeLabel')
    }else{
        emailLabel.classList.remove('activeLabel')
    }
})

// Password

const passwordValue = document.querySelector('.password_value')
const password_label = document.querySelector('.password_label')

passwordValue.addEventListener('focus' , () => {
    password_label.classList.add('activeLabel')
})

passwordValue.addEventListener('blur' , e => {
    if(!e.target.value) password_label.classList.remove('activeLabel')
})

passwordValue.addEventListener('input' , e => {
    const value = e.target.value

    if(value !== ''){
        password_label.classList.add('activeLabel')
    }else{
        password_label.classList.remove('activeLabel')
    }
})

// show_value

const show = document.querySelector('.show_value')
let coin = false

show.addEventListener('click' , e => {
    e.preventDefault()
    coin = !coin

    if(coin){
        passwordValue.type = 'text'
    }else{
        passwordValue.type = 'password'
    }
})


// handleForm

const handleForm = document.querySelector('.handleForm')

handleForm.addEventListener('click' , e => {
    e.preventDefault()
})