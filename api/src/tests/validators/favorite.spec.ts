import { favoriteDataValidator, listFavoritesDataValidator } from "../../validators/favorite.validators";

describe("Favorite Validators", () => {
    describe("favoriteDataValidator", () => {
        it("should validate valid favorite data", () => {
            const validData = { userId: "c6da23fe-9b99-488c-92d2-859b79ab7513", videoId: "KUF0IyODR9k" };
            const { error } = favoriteDataValidator.validate(validData);
            expect(error).toBeUndefined();
        });

        it("should invalidate invalid favorite data", () => {
            const invalidData = { userId: "c6da23fe-9b99-488c-92d2-859b79ab7513", videoId: 3434 };
            const { error } = favoriteDataValidator.validate(invalidData);
            expect(error).toBeDefined();
        });
    });

    describe("listFavoritesDataValidator", () => {
        it("should validate valid list favorite data", () => {
            const validData = { userId: "c6da23fe-9b99-488c-92d2-859b79ab7513" };
            const { error } = listFavoritesDataValidator.validate(validData);
            expect(error).toBeUndefined();
        });

        it("should invalidate invalid list favorite data", () => {
            const invalidData = { userId: "" };
            const { error } = listFavoritesDataValidator.validate(invalidData);
            expect(error).toBeDefined();
        });
    });
});
