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
    if (isRegister) {
        const name = (document.getElementById('name-input') as HTMLInputElement).value
        const email = (document.getElementById('email-input') as HTMLInputElement).value
        const password = (document.getElementById('password-input') as HTMLInputElement).value

        if (!name) {
            alert('Digite um nome')
            return
        }
        if (!email) {
            alert('Digite um email')
            return
        }
        if (!password) {
            alert('Digite uma senha')
            return
        }
        if (password.length < 6) {
            alert('A senha deve ter mais de 6 caracteres')
            return
        }

        console.log("Resgistrando - ", name, ' / ', email, ' / ', password)
    }
    else {
        const email = (document.getElementById('email-input') as HTMLInputElement).value
        const password = (document.getElementById('password-input') as HTMLInputElement).value

        if (!email) {
            alert('Digite um email')
            return
        }
        if (!password) {
            alert('Digite uma senha')
            return
        }
        if (password.length < 6) {
            alert('A senha deve ter mais de 6 caracteres')
            return
        }

        console.log("Entrando - ", email, ' / ', password)
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
