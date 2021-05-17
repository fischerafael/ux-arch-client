import styled from 'styled-components'

const InputButton = styled.button`
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
    height: 3rem;
    padding: 0 2rem;
`
export const InputDefaultButtonContrast = styled(InputButton)`
    background: ${(props) => props.theme.colors.contrast};
    color: ${(props) => props.theme.colors.main};
    &:hover {
        color: ${(props) => props.theme.colors.contrast};
        background: ${(props) => props.theme.colors.primary};
    }
`
export const InputGhostButton = styled(InputButton)`
    background: transparent;
    color: ${(props) => props.theme.colors.contrast};
    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
`
