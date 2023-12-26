import { getStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService";

describe('Storage: CityStorage', () => {
    test("should be return null when don't have a city storaged", async () => {
        const response = await getStorageCity();

        expect(response).toBeNull();
    });

    test('shoul be return city storaged', async () => {
        const newCity: CityProps = {
            id: '1',
            name: 'Recife',
            latitude: 123,
            longitude: 456
        }

        await saveStorageCity(newCity)

        const response = await getStorageCity()

        expect(response).toEqual(newCity)
    });
})
