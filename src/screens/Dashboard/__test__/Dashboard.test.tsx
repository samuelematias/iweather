import { mockWeatherAPIResponse } from "@__tests__/mocks/services/mockWeatherAPIResponse"
import { render, screen, waitFor } from "@__tests__/utils/customRender"
import { api } from "@services/api"
import { Dashboard } from "@screens/Dashboard"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"

describe("Screen: Dashboard", () => {

    beforeAll(async () => {
        const city = {
            id: '1',
            name: 'Rio de Janeiro, BR',
            latitude: 123,
            longitude: 456
        }

        await saveStorageCity(city)
    })

    it('should be show city weather', async () => {
        jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

        render(<Dashboard />)

        const cityName = await waitFor(() => screen.findByText(/rio de janeiro/i));
        expect(cityName).toBeTruthy()
    })
})
