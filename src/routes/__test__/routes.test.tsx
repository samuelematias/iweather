import { render, screen, waitFor, act } from "@__tests__/utils/customRender"
import { Routes } from "@routes/index"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { api } from "@services/api"
import { mockWeatherAPIResponse } from "@__tests__/mocks/services/mockWeatherAPIResponse"

describe("Routes", () => {
    it('should be render Search screen when not city selecte', async () => {
        render(
            <Routes />
        )

        const title = await waitFor(() => screen.findByText(/^escolha um local/i))

        expect(title).toBeTruthy()
    })

    it('shoul be render Dashboard screen when has city selected', async () => {
        jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

        const city = {
            id: '1',
            name: 'Recife',
            latitude: 123,
            longitude: 456
        }

        await saveStorageCity(city)

        await act(() => waitFor(() => render(<Routes />)))

        const title = screen.getByText(city.name)

        expect(title).toBeTruthy()
    })
})
