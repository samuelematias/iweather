import { act, renderHook, waitFor } from '@testing-library/react-native'

import { useCity } from '@hooks/useCity'
import { CityProvider } from '@contexts/CityContext';

describe('Context: cityContext', () => {
    test('should be change selected city', async () => {
        const { result } = renderHook(() => useCity(), { wrapper: CityProvider })

        await waitFor(() => act(() => result.current.handleChangeCity({
            id: '1',
            name: 'Recife',
            latitude: 123,
            longitude: 456
        })));

        expect(result.current.city?.name).toBe('Recife');
    });
});
