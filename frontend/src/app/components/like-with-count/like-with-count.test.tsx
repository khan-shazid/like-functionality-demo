import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LikeWithCount from './like-with-count';

afterEach(() => {
    cleanup();
});

const renderComponent = (isActive, totalLikes, toggle) =>
    render(<LikeWithCount isActive={isActive} totalLikes={totalLikes} toggle={toggle} />);

describe('Like With Count Component Test Suite', () => {
    it('Test 01 - Check if like button click works', async () => {
        let isClicked = false;
        const onClick = () => {
            isClicked = true;
        };
        const { getByTestId } = renderComponent(false, 899, onClick);

        const button = getByTestId('like-count-container');
        fireEvent.click(button);
        expect(isClicked).toBe(true);
    });

    it('Test 02 - Check if like count shows in proper format', async () => {
        const { getByTestId } = renderComponent(false, 1899, () => {});
        const count = getByTestId('total-like-count');
        expect(count).toHaveTextContent('1.9k');
    });
});
