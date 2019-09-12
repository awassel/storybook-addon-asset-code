import React from 'react';
import { styled } from '@storybook/theming';

const StyledButton = styled.button({
    height: '100%',
    overflow: 'auto',
    width: '100%',
});

const button = () => {
    return (<StyledButton>Hello Button</StyledButton>)
};

export default button;