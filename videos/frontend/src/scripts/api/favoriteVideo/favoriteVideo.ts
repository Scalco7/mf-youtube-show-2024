import axios from "axios"

const apiUrl = import.meta.env.VITE_API_URL

export async function favoriteVideo(videoId: string): Promise<void> {
    const url = `${apiUrl}/favorites/add`
    const token = localStorage.getItem('token')
    const body = { videoId: videoId }

    try {
        await axios.post(url, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }
    catch (error) {
        throw error
    }
}