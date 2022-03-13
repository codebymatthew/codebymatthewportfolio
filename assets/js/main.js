const aboutMeModal = document.querySelector('.aboutMeModal')
const aboutMeModalBtn = document.querySelector('.aboutMeModalBtn')
const closeAboutMe = document.querySelector('.closeAboutMe')

const codeModal = document.querySelector('.codeModal')
const codeModalBtn = document.querySelector('.codeModalBtn')
const closeCodeModal = document.querySelector('.closeCodeModal')

const contactModal = document.querySelector('.contactModal')
const contactModalBtn = document.querySelector('.contactModalBtn')
const closeContactModal = document.querySelector('.closeModalBtn')

function toggleContactModal() {
    contactModal.classList.toggle('showModal')
}
function closeContactModalOnWindowClick(e) {
    if(e.target === modal) {
        toggleContactModal()
    }
}

function toggleAboutMe() {
    aboutMeModal.classList.toggle('showModal')
}

function closeOnWindow(event) {
    if(event.target === aboutMeModal) {
        toggleAboutMe()
    }
}
function toggleCode() {
    codeModal.classList.toggle('showModal')
}

function closeCodeOnWindowClick(event) {
    if(event.target === codeModal) {
        toggleCode()
    }
}

aboutMeModalBtn.addEventListener('click', toggleAboutMe)
closeAboutMe.addEventListener('click', toggleAboutMe)

codeModalBtn.addEventListener('click', toggleCode)
closeCodeModal.addEventListener('click', toggleCode)

contactModalBtn.addEventListener('click', toggleContactModal)
closeContactModal.addEventListener('click', toggleContactModal)

window.addEventListener('click', closeOnWindow)
window.addEventListener('click', closeCodeOnWindowClick)
window.addEventListener('click', closeContactModalOnWindowClick)