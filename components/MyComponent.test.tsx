import { expect, test } from 'vitest'
import React from 'react';
import { render } from '@testing-library/react';
import ButtonPrimary from './Form/ButtonPrimary';

interface ButtonPrimaryProps {
    type?: "submit" | "reset" | "button";
    onClick: () => void;
    children: React.ReactNode;
    buttonStyle: React.CSSProperties,
}
const buttonProps: ButtonPrimaryProps = {
    onClick: () => { },
    children: 'Click Me', 
    buttonStyle:{}, 
};

test('renders ButtonPrimary', () => {
    render(<ButtonPrimary {...buttonProps} />);
    // Add assertions or expectations here as needed
});
