import renderAuthPage from "./auth.page"
import renderHomePage from "./home.page"
import { getRoute, navigateTo } from "./navigation"
import { validateToken } from "./token-utils"

const route = getRoute()
const token = localStorage.getItem('token')

export default function guardRoutes() {
    if (!token || !validateToken(token)) {
        if (route == '/auth') {
            renderAuthPage()
        } else {
            navigateTo('/auth')
        }
    } else {
        if (route == '/auth') {
            renderAuthPage()
        }
        else if (route == '/videos' || route == '/favoritos') {
            renderHomePage(token, route)
        }
        else {
            navigateTo('/videos')
        }
    }
}
