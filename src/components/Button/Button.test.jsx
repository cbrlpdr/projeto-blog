import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
    it('should render with text "Load more"', () => {
        render(<Button text="Load more" />);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });
    it('should call function', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />);
        const button = screen.getByRole('button', { name: /load more/i });

        userEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
