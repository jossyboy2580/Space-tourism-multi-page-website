const menuBtn = document.querySelector('.mobile.nav-icon')
const closeBtn = document.querySelector('.mobile.nav-icon-close')
const mobileNav = document.querySelector('.mobile.nav')

menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    this.classList.remove('show')
    this.classList.add('hide')
    mobileNav.style.display = 'block'
})
closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    mobileNav.style.display = 'none'
    menuBtn.classList.remove('hide')
    menuBtn.classList.add('show')
})