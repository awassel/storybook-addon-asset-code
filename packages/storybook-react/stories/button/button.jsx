import React from 'react';
import { styled } from '@storybook/theming';
import './button.css';

const StyledButton = styled.button({
    height: '100%',
    overflow: 'auto',
});

const button = () => {
    return (<StyledButton className="button">Hello Button</StyledButton>)
};

export default button;