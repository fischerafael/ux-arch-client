import React from 'react'
import { NavCard } from '../../../../components/NavCard'

import {
    LayoutFlex,
    LayoutGridResponsive
} from '../../../../design/components/layout'
import { TextSubTitle } from '../../../../design/components/text'

export const MainScreen = () => {
    return (
        <LayoutFlex
            as="section"
            style={{
                height: '100%',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                overflowY: 'scroll',
                padding: '1rem'
            }}
        >
            <TextSubTitle
                style={{
                    padding: '1rem 0',
                    letterSpacing: '.1rem'
                }}
            >
                REFERÊNCIAS
            </TextSubTitle>
            <LayoutGridResponsive>
                <NavCard
                    cardTitle="Avaliar"
                    cardDescription="Auxilie o algoritmo do Ux Arch a ser mais preciso avaliando
                    projetos."
                    cardIcon="/assets/icons/evaluate.svg"
                    onClick={(e) => console.log('clicou')}
                />
                <NavCard
                    cardTitle="Consultar"
                    cardDescription="Confira como os usuários do Ux Arch avaliaram outros
                    projetos."
                    cardIcon="/assets/icons/evaluate.svg"
                    onClick={() => alert('oi')}
                />
            </LayoutGridResponsive>
            <TextSubTitle
                style={{
                    padding: '1rem 0',
                    letterSpacing: '.1rem'
                }}
            >
                PROJETOS
            </TextSubTitle>
            <LayoutGridResponsive>
                <NavCard
                    cardTitle="Criar Projeto"
                    cardDescription="(em breve)"
                    cardIcon="/assets/icons/evaluate.svg"
                    onClick={(e) => console.log('clicou')}
                />
            </LayoutGridResponsive>
        </LayoutFlex>
    )
}