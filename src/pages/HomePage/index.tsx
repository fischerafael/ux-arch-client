import React from 'react'
import styled from 'styled-components'
import { DisplayImage } from '../../design/components/display'
import {
    InputDefaultButtonContrast,
    InputGhostButton
} from '../../design/components/input'
import { LayoutFlex } from '../../design/components/layout'
import { SubTitle, Title } from '../../design/components/text'

export const HomePage = () => {
    return (
        <LayoutHeroSection>
            <LayoutNavBar>
                <LayoutNavBarContent>
                    <DisplayImageLogo
                        src="/assets/logo-white.svg"
                        alt="Logo UX Arch"
                    />
                    <InputGhostButtonNavBar>ENTRAR</InputGhostButtonNavBar>
                </LayoutNavBarContent>
            </LayoutNavBar>
            <LayoutMain>
                <TextTitle>UX ARCH</TextTitle>
                <TextSubTitle>
                    Projete experiências e atmosferas arquitetônicas pensadas
                    específicamente em seus usuários com o auxílio de
                    inteligência artificial.
                </TextSubTitle>
                <InputDefaultButtonContrast>
                    PROJETAR
                </InputDefaultButtonContrast>
            </LayoutMain>
        </LayoutHeroSection>
    )
}

const LayoutHeroSection = styled(LayoutFlex)`
    width: 100%;
    min-height: 100vh;
    background-image: url('/images/home-page-background.png');
    background-repeat: no-repeat;
    background-position: center;
    flex-direction: column;
    justify-content: flex-start;
`
const LayoutNavBar = styled(LayoutFlex)`
    width: 100%;
    height: 20vh;
    padding: 0 1rem;
`
const LayoutNavBarContent = styled(LayoutFlex)`
    width: 100%;
    max-width: ${(props) => props.theme.width.large};
    height: 100%;
    justify-content: space-between;
`
const DisplayImageLogo = styled(DisplayImage)`
    height: 1rem;
`
const InputGhostButtonNavBar = styled(InputGhostButton)`
    padding: 0rem;
`
const LayoutMain = styled(LayoutFlex)`
    width: 100%;
    min-height: 80vh;
    flex-direction: column;
    padding: 0 1rem;
`
const TextTitle = styled(Title)`
    color: ${(props) => props.theme.colors.contrast};
    font-size: 5rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
`
const TextSubTitle = styled(SubTitle)`
    text-align: center;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.contrast};
    max-width: ${(props) => props.theme.width.small};
`
