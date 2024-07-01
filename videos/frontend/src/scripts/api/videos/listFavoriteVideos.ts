import axios from "axios";
import { IListVideosResponse } from "./interfaces";

const apiUrl = import.meta.env.VITE_API_URL

export async function listFavoriteVideos(): Promise<IListVideosResponse> {
    const url = `${apiUrl}/videos/favorites`
    const token = localStorage.getItem('token')

    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return response.data
}