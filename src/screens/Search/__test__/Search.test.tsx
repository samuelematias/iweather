import { render, screen, fireEvent, waitFor } from "@__tests__/utils/customRender"
import { mockCityAPIResponse } from "@__tests__/mocks/services/mockCityAPIResponse"
import { Search } from "@screens/Search"
import { api } from "@services/api"

describe('Screen: Search', () => {
    test('should be show city option', async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })

        render(<Search />);

        const searchInput = screen.getByTestId('search-input');
        fireEvent.changeText(searchInput, "Recife");

        const option = await waitFor(() => screen.findByText(/recife/i));

        expect(option).toBeTruthy()
    })
})
