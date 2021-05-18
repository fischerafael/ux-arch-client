import React from 'react'
import styled from 'styled-components'
import { DisplayImage } from '../../design/components/display'
import {
    ButtonDefaultContrast,
    ButtonGhost
} from '../../design/components/button'
import { LayoutFlex } from '../../design/components/layout'
import { TextSubTitle, TextTitle } from '../../design/components/text'

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
                <TextTitleHomePage>UX ARCH</TextTitleHomePage>
                <TextSubTitleHomePage>
                    Projete experiências e atmosferas arquitetônicas pensadas
                    específicamente em seus usuários com o auxílio de
                    inteligência artificial.
                </TextSubTitleHomePage>
                <ButtonDefaultContrast style={{ maxWidth: '10rem' }}>
                    PROJETAR
                </ButtonDefaultContrast>
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
const InputGhostButtonNavBar = styled(ButtonGhost)`
    padding: 0rem;
    max-width: 5rem;
    justify-content: flex-end;
`
const LayoutMain = styled(LayoutFlex)`
    width: 100%;
    min-height: 80vh;
    flex-direction: column;
    padding: 0 1rem;
`
const TextTitleHomePage = styled(TextTitle)`
    color: ${(props) => props.theme.colors.contrast};
    font-size: 5rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
`
const TextSubTitleHomePage = styled(TextSubTitle)`
    text-align: center;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.contrast};
    max-width: ${(props) => props.theme.width.small};
`
