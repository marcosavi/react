import styled, {css} from "styled-components"

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;

}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 150px;
    height: 50px;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    boorder-radius:40px;
    margin: 8px;
`
