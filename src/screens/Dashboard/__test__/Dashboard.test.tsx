import { api } from "@services/api"
import { Dashboard } from "@screens/Dashboard"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { mockWeatherAPIResponse } from "@__tests__/mocks/services/mockWeatherAPIResponse"
import { render, screen, waitFor } from "@__tests__/utils/customRender"

describe("Screen: Dashboard", () => {
    test('should be show city weather', async () => {
        jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

        const city = {
            id: '1',
            name: 'Paulista, BR',
            latitude: 123,
            longitude: 456
        }

        await saveStorageCity(city)

        render(<Dashboard />)

        const cityName = await waitFor(() => screen.findByText(city.name));
        expect(cityName).toBeTruthy()
    })
})
