import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SetUser from './set-user';

afterEach(() => {
    cleanup();
});

const renderComponent = (user, updateUser) => render(<SetUser user={user} updateUser={updateUser} />);

describe('Set User Component Test Suite', () => {
    it('Test 01 - Check if button click updates user value', async () => {
        let user = '';
        const onClick = (val) => {
            user = val;
        };
        const { getByTestId } = renderComponent(user, onClick);

        const input = getByTestId('set-user-input');
        fireEvent.change(input, { target: { value: 'test' } });
        const button = getByTestId('set-user-button');
        fireEvent.click(button);
        expect(user).toBe('test');
    });
});
