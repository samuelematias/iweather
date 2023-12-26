import { render, screen, fireEvent } from '@testing-library/react-native';

import { SelectList } from '@components/SelectList';

describe('Component: SelectList', () => {
    test('should be return city details selected.', () => {

        const data = [
            { id: '1', name: 'Recife', latitude: 123, longitude: 456 },
            { id: '2', name: 'Maria Farinha', latitude: 789, longitude: 987 }
        ]

        const onPress = jest.fn();

        render(
            <SelectList
                data={data}
                onChange={() => {}}
                onPress={onPress}
            />
        );

        const selectedCity = screen.getByText(/maria/i);
        fireEvent.press(selectedCity);

        expect(onPress).toHaveBeenCalled();
    });
});
