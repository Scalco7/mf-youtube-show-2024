import './styles/reset.css'
import './styles/style.css'

let isRegister = false

const inputsParent = document.getElementById('inputs-box')
const formButton = document.getElementById('form-button')
const textNavigationButton = document.getElementById('text-navigation-button')

renderElements()

textNavigationButton?.addEventListener('click', () => handleOnNavigationButtonClicked())

formButton?.addEventListener('click', () => handleOnButtonClicked())

function handleOnNavigationButtonClicked(): void {
    isRegister = !isRegister
    renderElements()
}

function handleOnButtonClicked(): void {
    if (!isRegister)
        console.log('entrou')
    else
        console.log('registrou')
}

function renderElements(): void {
    if (isRegister) {
        inputsParent?.classList.add('register')

        inputsParent!.innerHTML = `
            <input id="nameInput" type="text" placeholder="Nome" />
            <input id="emailInput" type="text" placeholder="Email" />
            <input id="passwordInput" type="password" placeholder="Senha" />
        `

        textNavigationButton!.innerHTML = `Já tem uma conta? <span>Entre agora</span>`
        formButton!.innerHTML = 'registrar'
    } else {
        inputsParent?.classList.add('login')

        inputsParent!.innerHTML = `
            <input id="emailInput" type="text" placeholder="Email" />
            <input id="passwordInput" type="password" placeholder="Senha" />
        `

        textNavigationButton!.innerHTML = `Não tem uma conta? <span>Registre-se</span>`
        formButton!.innerHTML = 'entrar'
    }
}
