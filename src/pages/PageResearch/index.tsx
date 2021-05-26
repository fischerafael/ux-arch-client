import React from 'react'
import Router from 'next/router'
import { NavBar } from '../../components/App/NavBar'
import { ButtonDefault } from '../../design/components/button'
import { ContainerBlogMainSection } from '../../design/components/container'

import { TemplateBlogMainScrollSection } from '../../design/components/templates'
import { TextParagraph, TextSubTitle } from '../../design/components/text'
import { useWakeUpAPI } from '../../hooks/useWakeUpAPI'

export const ResearchPage = () => {
    useWakeUpAPI()

    return (
        <>
            <NavBar />
            <ContainerBlogMainSection>
                <TemplateBlogMainScrollSection style={{ gap: '1rem' }}>
                    <TextSubTitle style={{ fontWeight: 'bold' }}>
                        UX ARCH
                    </TextSubTitle>
                    <TextSubTitle style={{ fontWeight: 'bold' }}>
                        O que é?
                    </TextSubTitle>
                    <TextParagraph style={{ fontSize: '0.75rem' }}>
                        O Ux Arch é um projeto que faz parte da tese de
                        doutorado de Rafael Fischer, pesquisador no Programa de
                        Pós-Gradução em Engenharia de Construção Civil da
                        Universidade Federal do Paraná.
                    </TextParagraph>
                    <TextParagraph style={{ fontSize: '0.75rem' }}>
                        Seu objetivo é auxiliar arquitetos, designers e
                        estudantes de arquitetura a projetarem não somente
                        espaços, mas experiências arquitetônicas.
                    </TextParagraph>

                    <TextSubTitle style={{ fontWeight: 'bold' }}>
                        Como funciona?
                    </TextSubTitle>
                    <TextParagraph style={{ fontSize: '0.75rem' }}>
                        O Ux Arch utiliza um algoritmo de inteligência
                        artificial que prevê como usuários irão experenciar
                        projetos de arquitetura ainda em estágios iniciais
                        (croquis, partido, conceito).
                    </TextParagraph>

                    <TextSubTitle style={{ fontWeight: 'bold' }}>
                        Como posso ajudar?
                    </TextSubTitle>
                    <TextParagraph style={{ fontSize: '0.75rem' }}>
                        O algoritmo de Inteligência Artificial aprende com base
                        na experiência de usuários em projetos existentes. Para
                        ajudar, bastar responder um simples questionário
                        avaliando sua experiência em alguns projetos disponível
                        na plataforma. É rápido e fácil!
                    </TextParagraph>
                    <ButtonDefault
                        onClick={() => Router.push('/app?state=register')}
                        style={{ minHeight: '3rem' }}
                    >
                        Ajudar no Ux Arch
                    </ButtonDefault>
                </TemplateBlogMainScrollSection>
            </ContainerBlogMainSection>
        </>
    )
}
