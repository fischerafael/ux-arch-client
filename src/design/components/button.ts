import styled, { css } from 'styled-components'

interface PropsButton {
    disabled?: boolean
}

const Button = styled.button<PropsButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.15rem;
    font: inherit;
    font-size: 0.75rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    height: 2.5rem;
    padding: 0 2rem;
    width: 100%;
`
const disabledButton = css`
    cursor: not-allowed;
    background: ${(props) => props.theme.colors.grey};
    &:hover {
        background: ${(props) => props.theme.colors.grey};
    }
`

export const ButtonDefault = styled(Button)`
    background: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.contrast};
    &:hover {
        color: ${(props) => props.theme.colors.contrast};
        background: ${(props) => props.theme.colors.primary};
    }
    ${(props) => props.disabled && disabledButton}
`
export const ButtonDefaultContrast = styled(Button)`
    background: ${(props) => props.theme.colors.contrast};
    color: ${(props) => props.theme.colors.main};
    &:hover {
        color: ${(props) => props.theme.colors.contrast};
        background: ${(props) => props.theme.colors.primary};
    }
    ${(props) => props.disabled && disabledButton}
`
export const ButtonGhost = styled(Button)`
    background: transparent;
    color: ${(props) => props.theme.colors.contrast};
    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
    ${(props) => props.disabled && disabledButton}
`
