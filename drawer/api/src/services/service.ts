import axios from "axios"

export class Service {
    public async countFavoritesByUserId(userId: string): Promise<number> {
        try {
            const apiUrl = `${process.env.API_URL}/favorites/${userId}`
            const request = await axios.get(apiUrl, {
                headers: {
                    'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4NWQ1NzllLTQxYjktNDM3Ni04NzU3LTZlN2IwMmJlYTFjMyIsIm5hbWUiOiJyYWZhZWwiLCJpYXQiOjE3MTk3MDU1MjgsImV4cCI6MTcxOTcxMjcyOH0.-DR6rZlNfYGNQscWe15C49hCHBUEkb5LKbq6KZZ2kbM"
                }
            })

            return request.data.favorites.length
        } catch (error) {
            throw (error)
        }
    }
}