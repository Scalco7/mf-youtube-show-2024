export function validateRegisterData(name: string, email: string, password: string) {
    if (!name)
        throw new Error('Digite um nome');
    if (!email)
        throw new Error('Digite um email')
    if (!password)
    throw new Error('Digite uma senha')
    if (password.length < 6)
    throw new Error('A senha deve ter pelo menos 6 caracteres')
}

export function validateLoginData(email: string, password: string) {
    if (!email)
        throw new Error('Digite um email')
    if (!password)
         throw new Error('Digite uma senha')
    if (password.length < 6)
         throw new Error('A senha deve ter pelo menos 6 caracteres')
}

