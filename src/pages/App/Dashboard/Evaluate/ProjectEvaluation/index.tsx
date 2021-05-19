import React, { useState } from 'react'

import { DisplayImage } from '../../../../../design/components/display'
import {
    LayoutFlex,
    LayoutGridAlternatives
} from '../../../../../design/components/layout'
import { TextParagraph } from '../../../../../design/components/text'
import { Theme } from '../../../../../design/theme'
import {
    evaluationOptions,
    IEvaluationOptions
} from '../../../../../entities/Evaluation'
import { IProjects } from '../../../../../entities/Projects'

import { EvaluationOptions } from './Components/EvaluationOptions'
import { Status } from './Components/Status'

interface Props {
    project: IProjects
}

export const ProjectEvaluation = ({ project }: Props) => {
    console.log('PROJECT TO BE EVALUATED INFO', project)

    const totalScreens = 5
    const [screen, setScreen] = useState(1)

    console.log('SCREEN', screen)

    const [evaluations, setEvaluations] = useState({
        rest: 0.5,
        study: 0.5,
        leisure: 0.5,
        work: 0.5,
        mandatory: 0.5
    })

    console.log('EVALUATIONS', evaluations)

    const handleNextEvaluation = (key: string, option: IEvaluationOptions) => {
        setEvaluations({
            ...evaluations,
            [key]: option.value
        })
        if (screen < 5) setScreen((prevState) => prevState + 1)
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

                <DisplayImage
                    src={project.thumbnail}
                    alt={project.name}
                    style={{ width: '100%', height: '40vh' }}
                />

                {screen === 1 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como você se sentiria DESCANSANDO nesse lugar?
                        </TextParagraph>
                        <LayoutGridAlternatives>
                            {evaluationOptions.map((option) => (
                                <EvaluationOptions
                                    key={option.id}
                                    option={option}
                                    onClick={() =>
                                        handleNextEvaluation('rest', option)
                                    }
                                />
                            ))}
                        </LayoutGridAlternatives>
                    </>
                )}
                {screen === 2 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como você se sentiria ESTUDANDO nesse lugar?
                        </TextParagraph>
                        <LayoutGridAlternatives>
                            {evaluationOptions.map((option) => (
                                <EvaluationOptions
                                    key={option.id}
                                    option={option}
                                    onClick={() =>
                                        handleNextEvaluation('study', option)
                                    }
                                />
                            ))}
                        </LayoutGridAlternatives>
                    </>
                )}
                {screen === 3 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como você se sentiria realizando uma atividade de
                            LAZER nesse lugar?
                        </TextParagraph>
                        <LayoutGridAlternatives>
                            {evaluationOptions.map((option) => (
                                <EvaluationOptions
                                    key={option.id}
                                    option={option}
                                    onClick={() =>
                                        handleNextEvaluation('leisure', option)
                                    }
                                />
                            ))}
                        </LayoutGridAlternatives>
                    </>
                )}
                {screen === 4 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como você se sentiria TRABALHANDO nesse lugar?
                        </TextParagraph>
                        <LayoutGridAlternatives>
                            {evaluationOptions.map((option) => (
                                <EvaluationOptions
                                    key={option.id}
                                    option={option}
                                    onClick={() =>
                                        handleNextEvaluation('work', option)
                                    }
                                />
                            ))}
                        </LayoutGridAlternatives>
                    </>
                )}
                {screen === 5 && (
                    <>
                        <TextParagraph style={{ padding: '1rem 0' }}>
                            Como você se sentiria sendo OBRIGADO a estar nesse
                            lugar?
                        </TextParagraph>
                        <LayoutGridAlternatives>
                            {evaluationOptions.map((option) => (
                                <EvaluationOptions
                                    key={option.id}
                                    option={option}
                                    onClick={() =>
                                        handleNextEvaluation(
                                            'mandatory',
                                            option
                                        )
                                    }
                                />
                            ))}
                        </LayoutGridAlternatives>
                    </>
                )}
            </LayoutFlex>
        </LayoutFlex>
    )
}
