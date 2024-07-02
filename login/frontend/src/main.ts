import './styles/reset.css'
import './styles/toast.style.css'
import './styles/style.css'
import { AuthController } from './scripts/auth.controller'

const authController = new AuthController()

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

async function handleOnButtonClicked(): Promise<void> {
    if (isRegister) {
        const name = (document.getElementById('name-input') as HTMLInputElement).value
        const email = (document.getElementById('email-input') as HTMLInputElement).value
        const password = (document.getElementById('password-input') as HTMLInputElement).value

        await authController.registerUser(name, email, password)
    }
    else {
        //add loading

        const email = (document.getElementById('email-input') as HTMLInputElement).value
        const password = (document.getElementById('password-input') as HTMLInputElement).value

        await authController.loginUser(email, password)
    }
}

function renderElements(): void {
    if (isRegister) {
        inputsParent?.classList.add('register')

        inputsParent!.innerHTML = `
            <input id="name-input" type="text" placeholder="Nome" />
            <input id="email-input" type="text" placeholder="Email" />
            <input id="password-input" type="password" placeholder="Senha" />
        `

        textNavigationButton!.innerHTML = `Já tem uma conta? <span>Entre agora</span>`
        formButton!.innerHTML = 'registrar'
    } else {
        inputsParent?.classList.add('login')

        inputsParent!.innerHTML = `
            <input id="email-input" type="text" placeholder="Email" />
            <input id="password-input" type="password" placeholder="Senha" />
        `

        textNavigationButton!.innerHTML = `Não tem uma conta? <span>Registre-se</span>`
        formButton!.innerHTML = 'entrar'
    }
}
