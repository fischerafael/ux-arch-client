import styled from 'styled-components'

const Button = styled.button`
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
export const ButtonDefault = styled(Button)`
    background: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.contrast};
    &:hover {
        color: ${(props) => props.theme.colors.contrast};
        background: ${(props) => props.theme.colors.primary};
    }
`
export const ButtonDefaultContrast = styled(Button)`
    background: ${(props) => props.theme.colors.contrast};
    color: ${(props) => props.theme.colors.main};
    &:hover {
        color: ${(props) => props.theme.colors.contrast};
        background: ${(props) => props.theme.colors.primary};
    }
`
export const ButtonGhost = styled(Button)`
    background: transparent;
    color: ${(props) => props.theme.colors.contrast};
    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
`
