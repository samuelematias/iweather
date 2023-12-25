import { render } from '@testing-library/react-native';

import { Input } from '@components/Input';

describe('Component: Input', () => {
    test('should be render without activity indicator if isLoading prop is undefined.', () => {
        const { queryByTestId } = render(<Input />);

        expect(queryByTestId('activity-indicator')).toBeNull();
    });

    test('should be render with activity indicator if isLoading prop is true.', () => {
        const { getByTestId } = render(<Input isLoading />);

        expect(getByTestId('activity-indicator')).toBeTruthy();
    });
});
