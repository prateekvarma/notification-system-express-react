import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import SubmitMessage from './SubmitMessage';

test('it shows a dropdown, a textarea and a button', () => {
    render(<SubmitMessage />);

    const dropDown = screen.getByRole('combobox');
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    expect(dropDown).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
})