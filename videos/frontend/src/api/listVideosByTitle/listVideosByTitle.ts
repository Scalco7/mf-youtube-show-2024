import axios from "axios";
import { IListVideosByTitleResponse } from "./listVideosByTitle.interface";

const apiUrl = import.meta.env.VITE_API_URL

export async function listVideosByTitle(title: string): Promise<IListVideosByTitleResponse> {
    const url = `${apiUrl}/videos/list/?title=${title}`
    const token = localStorage.getItem('token')

    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return response.data
}