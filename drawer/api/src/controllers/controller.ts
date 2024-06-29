interface ICountFavoritesByUserIdData {
    userId: string
}

export class Controller {
    public async countFavoritesByUserId(data: ICountFavoritesByUserIdData): Promise<number> {
        const count = 1
        return count
    }
}