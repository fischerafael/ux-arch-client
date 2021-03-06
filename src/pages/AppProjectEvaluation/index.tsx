import React, { useState } from 'react'
import Router from 'next/router'
import { IProjects } from '../../entities/Projects'
import { useCredentials } from '../../context/CredentialsContext'
import { api } from '../../services/config/api'
import {
    LayoutFlex,
    LayoutGridAlternatives
} from '../../design/components/layout'
import { Theme } from '../../design/theme'
import { DisplayImage } from '../../design/components/display'
import { Status } from './components/Status'
import { TextParagraph } from '../../design/components/text'
import { evaluationOptions } from '../../entities/Evaluation'
import { EvaluationOptions } from './components/EvaluationOptions'
import { ButtonDefault } from '../../design/components/button'
import { ProjectContext } from './components/ProjectContext'

interface Props {
    project: IProjects
}

export const AppProjectEvaluation = ({ project }: Props) => {
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
        version: 'VERSION 2 - 8 Options'
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
            alert('Avalia????o finalizada com sucesso!')
            console.log('SUCESS CREATING EVALUATION', data)
        } catch (error) {
            alert(
                'Ops, aconteceu algum erro durante a avalia????o. Tente novamente'
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
                <Status current={screen} total={totalScreens} />
                <LayoutFlex
                    style={{ flexDirection: 'column', position: 'relative' }}
                >
                    <DisplayImage
                        src={project.thumbnail}
                        alt={project.name}
                        style={{ width: '100%', height: '40vh' }}
                    />
                    <ProjectContext
                        description="??rea externa em frente ao museu"
                        name="MASP"
                        location="S??o Paulo, Brasil"
                    />
                </LayoutFlex>

                {screen === 1 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como seria a experi??ncia de DESCANSAR nesse
                            ambiente?
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
                            Como seria a experi??ncia de ESTUDAR nesse ambiente?
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
                            Como seria a experi??ncia de realizar alguma
                            atividade LAZER nesse ambiente?
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
                            Como seria a experi??ncia de TRABALHAR nesse
                            ambiente?
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
                            Como seria a experi??ncia de ser OBRIGADO a ir nesse
                            ambiente?
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
                            Voc?? j?? esteve nesse ambiente?
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
                                <TextParagraph>N??o</TextParagraph>
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
                                Enviar avalia????o
                            </ButtonDefault>
                        </LayoutFlex>
                    </>
                )}
            </LayoutFlex>
        </LayoutFlex>
    )
}
