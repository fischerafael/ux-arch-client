import styled from 'styled-components'
import { LayoutFlex } from './layout'

export const TemplateDashboardMainScrollSection = styled(LayoutFlex)`
    height: 100%;
    width: 100%;
    max-width: ${(props) => props.theme.width.large};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: scroll;
    padding-right: 0.25rem;
`

export const TemplateBlogMainScrollSection = styled(LayoutFlex)`
    height: 100%;
    width: 100%;
    max-width: ${(props) => props.theme.width.large};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: scroll;
    padding-right: 0.25rem;
`

export const TemplateDashboardSection = styled(LayoutFlex)`
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
`

export const TemplateAppLoginRegisterSection = styled(LayoutFlex)`
    width: 100%;
    min-height: 100vh;
`
