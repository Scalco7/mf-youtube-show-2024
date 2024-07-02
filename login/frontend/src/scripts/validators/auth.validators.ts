export function validateRegisterData(name: string, email: string, password: string) {
    if (!name)
        throw 'Digite um nome'
    if (!email)
        throw 'Digite um email'
    if (!password)
        throw 'Digite uma senha'
    if (password.length < 6)
        throw 'A senha deve ter pelo menos 6 caracteres'
}

export function validateLoginData(email: string, password: string) {
    if (!email)
        throw 'Digite um email'
    if (!password)
        throw 'Digite uma senha'
    if (password.length < 6)
        throw 'A senha deve ter pelo menos 6 caracteres'
}