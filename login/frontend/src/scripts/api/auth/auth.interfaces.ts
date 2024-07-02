export interface ILoginRequest {
    email: string
    password: string
}

export interface IRegisterResquest {
    name: string
    email: string
    password: string
}

export interface IAuthResponse {
    token: string
}