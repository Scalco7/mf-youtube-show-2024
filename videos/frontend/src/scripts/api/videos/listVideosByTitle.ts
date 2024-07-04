import axios from "axios";
import { IListVideosResponse } from "./interfaces";

const apiUrl = import.meta.env.VITE_API_URL

export async function listVideosByTitle(title: string, resultsQuantity: number, nextPageToken?: string): Promise<IListVideosResponse> {
    const url = `${apiUrl}/videos/list/?title=${title}&resultsQuantity=${resultsQuantity}${nextPageToken ? `&nextPageToken=${nextPageToken}` : ''}`
    const token = localStorage.getItem('token')

    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return response.data
}