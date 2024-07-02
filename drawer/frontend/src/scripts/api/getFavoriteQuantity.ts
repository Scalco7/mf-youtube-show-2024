import axios from "axios"

const apiUrl = import.meta.env.VITE_API_URL

export default async function getFavoriteQuantity(): Promise<number> {
    try {
        const url = `${apiUrl}/count-favorites`
        const token: string = localStorage.getItem('token') ?? ''
        const response = await axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        return response.data.favoritesQuantity
    } catch (error) {
        throw (error)
    }
}