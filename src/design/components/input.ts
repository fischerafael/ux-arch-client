import styled from 'styled-components'

export const InputText = styled.input`
    display: flex;
    width: 100%;
    align-items: center;
    height: 2.5rem;
    font: inherit;
    font-size: 0.75rem;
    padding: 0 1rem;
    border: 1px solid ${(props) => props.theme.colors.grey};
    background: ${(props) => props.theme.colors.constrastSecondary};
`
