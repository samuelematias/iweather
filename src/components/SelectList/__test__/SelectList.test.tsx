import { render } from '@testing-library/react-native';

import { SelectList } from '@components/SelectList';

describe('Component: SelectList', () => {
    test('should be return city details selected.', () => {

        const data = [
            { id: '1', name: 'Recife', latitude: 123, longitude: 456 },
            { id: '2', name: 'Maria Farinha', latitude: 789, longitude: 987 }
        ]

        const { getByText } = render(
            <SelectList
                data={data}
                onChange={() => {}}
                onPress={() => {}}
            />
        );

        expect(getByText(/maria/i)).toBeTruthy();
    });
});
