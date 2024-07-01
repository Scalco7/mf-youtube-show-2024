import axios from "axios"

const apiUrl = import.meta.env.VITE_API_URL

export async function unfavoriteVideo(videoId: string): Promise<void> {
    const url = `${apiUrl}/favorites/remove`
    const token = localStorage.getItem('token')
    const body = { videoId: videoId }

    try {
        await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: body
        })
    }
    catch (error) {
        throw error
    }
}