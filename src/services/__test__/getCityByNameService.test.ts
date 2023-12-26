import { api } from '../api'
import { getCityByNameService } from '../getCityByNameService'
import { mockCityAPIResponse } from '@__tests__/mocks/services/mockCityAPIResponse'

describe("Service: getCityByNameService", () => {
    test('should return city details', async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })

        const response = await getCityByNameService('São Paulo')

        expect(response.length).toBeGreaterThan(0)
    });
})
