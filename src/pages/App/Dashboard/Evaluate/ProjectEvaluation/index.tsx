import React, { useState } from 'react'
import Router from 'next/router'

import { useCredentials } from '../../../../../context/CredentialsContext'
import { ButtonDefault } from '../../../../../design/components/button'

import { DisplayImage } from '../../../../../design/components/display'
import {
    LayoutFlex,
    LayoutGridAlternatives
} from '../../../../../design/components/layout'
import { TextParagraph } from '../../../../../design/components/text'
import { Theme } from '../../../../../design/theme'
import { evaluationOptions } from '../../../../../entities/Evaluation'
import { IProjects } from '../../../../../entities/Projects'
import { api } from '../../../../../services/config/api'

import { EvaluationOptions } from './Components/EvaluationOptions'
import { Status } from './Components/Status'

interface Props {
    project: IProjects
}

export const ProjectEvaluation = ({ project }: Props) => {
    console.log('PROJECT TO BE EVALUATED INFO', project.name)

    const totalScreens = 7
    const [screen, setScreen] = useState(1)

    console.log('SCREEN', screen)

    const [evaluations, setEvaluations] = useState({
        rest: 0.5,
        study: 0.5,
        leisure: 0.5,
        work: 0.5,
        mandatory: 0.5,
        have_been: false
    })

    console.log('EVALUATIONS', evaluations)

    const handleNextEvaluation = (
        key: string,
        optionValue: number | boolean
    ) => {
        setEvaluations({
            ...evaluations,
            [key]: optionValue
        })
        if (screen < 7) setScreen((prevState) => prevState + 1)
    }

    const { credentials } = useCredentials()

    console.log('USER CREDENTIALS', credentials.id)

    const evaluationData = {
        ...evaluations,
        user: credentials.id,
        project: project.id,
        version: 'VERSION 1 - All emojis'
    }

    console.log('EVALUATION DATA', evaluationData)

    const handleSubmitEvaluation = async () => {
        try {
            const { data } = await api.post('/evaluations', evaluationData, {
                headers: {
                    Authorization: `Bearer ${credentials.jwt}`
                }
            })
            Router.push('/app/dashboard/evaluate')
            alert('Avaliação finalizada com sucesso!')
            console.log('SUCESS CREATING EVALUATION', data)
        } catch (error) {
            alert(
                'Ops, aconteceu algum erro durante a avaliação. Tente novamente'
            )
            console.log('ERROR CREATING EVALUATION', error)
        }
    }

    return (
        <LayoutFlex
            style={{
                minHeight: '100vh',
                width: '100%',
                alignItems: 'flex-start'
            }}
        >
            <LayoutFlex
                style={{
                    height: '100%',
                    width: '100%',
                    maxWidth: `${Theme.width.small}`,
                    padding: '1rem',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}
            >
                <DisplayImage
                    src={project.thumbnail}
                    alt={project.name}
                    style={{ width: '100%', height: '40vh' }}
                />

                <Status current={screen} total={totalScreens} />

                {screen === 1 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como seria a experiência de DESCANSAR nesse local?
                        </TextParagraph>
                        <LayoutGridAlternatives>
                            {evaluationOptions.map((option) => (
                                <EvaluationOptions
                                    key={option.id}
                                    option={option}
                                    onClick={() =>
                                        handleNextEvaluation(
                                            'rest',
                                            option.value
                                        )
                                    }
                                />
                            ))}
                        </LayoutGridAlternatives>
                    </>
                )}
                {screen === 2 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como seria a experiência de ESTUDAR nesse local?
                        </TextParagraph>
                        <LayoutGridAlternatives>
                            {evaluationOptions.map((option) => (
                                <EvaluationOptions
                                    key={option.id}
                                    option={option}
                                    onClick={() =>
                                        handleNextEvaluation(
                                            'study',
                                            option.value
                                        )
                                    }
                                />
                            ))}
                        </LayoutGridAlternatives>
                    </>
                )}
                {screen === 3 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como seria a experiência de realizar alguma
                            atividade LAZER nesse local?
                        </TextParagraph>
                        <LayoutGridAlternatives>
                            {evaluationOptions.map((option) => (
                                <EvaluationOptions
                                    key={option.id}
                                    option={option}
                                    onClick={() =>
                                        handleNextEvaluation(
                                            'leisure',
                                            option.value
                                        )
                                    }
                                />
                            ))}
                        </LayoutGridAlternatives>
                    </>
                )}
                {screen === 4 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como seria a experiência de TRABALHAR nesse local?
                        </TextParagraph>
                        <LayoutGridAlternatives>
                            {evaluationOptions.map((option) => (
                                <EvaluationOptions
                                    key={option.id}
                                    option={option}
                                    onClick={() =>
                                        handleNextEvaluation(
                                            'work',
                                            option.value
                                        )
                                    }
                                />
                            ))}
                        </LayoutGridAlternatives>
                    </>
                )}
                {screen === 5 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como seria a experiência de ser OBRIGADO a ir nesse
                            local?
                        </TextParagraph>
                        <LayoutGridAlternatives>
                            {evaluationOptions.map((option) => (
                                <EvaluationOptions
                                    key={option.id}
                                    option={option}
                                    onClick={() =>
                                        handleNextEvaluation(
                                            'mandatory',
                                            option.value
                                        )
                                    }
                                />
                            ))}
                        </LayoutGridAlternatives>
                    </>
                )}
                {screen === 6 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Você já esteve nesse local?
                        </TextParagraph>
                        <LayoutFlex style={{ width: '100%', gap: '1rem' }}>
                            <LayoutFlex
                                style={{
                                    flexDirection: 'column',
                                    background: `${Theme.colors.constrastSecondary}`,
                                    padding: '1rem',
                                    cursor: 'pointer',
                                    width: '100%'
                                }}
                                onClick={() =>
                                    handleNextEvaluation('have_been', true)
                                }
                            >
                                <TextParagraph>Sim</TextParagraph>
                            </LayoutFlex>
                            <LayoutFlex
                                style={{
                                    flexDirection: 'column',
                                    background: `${Theme.colors.constrastSecondary}`,
                                    padding: '1rem',
                                    cursor: 'pointer',
                                    width: '100%'
                                }}
                                onClick={() => {
                                    handleNextEvaluation('have_been', false)
                                }}
                            >
                                <TextParagraph>Não</TextParagraph>
                            </LayoutFlex>
                        </LayoutFlex>
                    </>
                )}
                {screen === 7 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Prontinho!
                        </TextParagraph>
                        <LayoutFlex style={{ width: '100%', gap: '1rem' }}>
                            <ButtonDefault onClick={handleSubmitEvaluation}>
                                Enviar avaliação
                            </ButtonDefault>
                        </LayoutFlex>
                    </>
                )}
            </LayoutFlex>
        </LayoutFlex>
    )
}
