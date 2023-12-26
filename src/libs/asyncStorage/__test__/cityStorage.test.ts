import { getStorageCity, removeStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { mockCityStorage } from "@__tests__/mocks/storage/mockCityStorage";

describe('Storage: CityStorage', () => {
    test("should be return null when don't have a city storaged", async () => {
        const response = await getStorageCity();

        expect(response).toBeNull();
    });

    test('shoul be return city storaged', async () => {

        await saveStorageCity(mockCityStorage)

        const response = await getStorageCity()

        expect(response).toEqual(mockCityStorage)
    });

    test('should be remove city storage', async () => {
        await saveStorageCity(mockCityStorage)
        await removeStorageCity()

        const response = await getStorageCity()

        expect(response).toBeNull()
    })
})
