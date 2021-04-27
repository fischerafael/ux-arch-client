import { useState } from 'react'

import { width } from '../../../design-system/styles/Theme'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'

import { ProgressBar } from '../../../Components/Display/ProgressBar'
import { UserPersonalData } from './UserPersonalData'
import { DescriptiveStep } from './DescriptiveStep'
import { DefaultButton } from '../../../design-system/components/input'

export const Evaluate = () => {
    const totalSteps = 4
    const [step, setStep] = useState(1)

    const handleNextStep = (e: any) => {
        e.preventDefault()
        if (step < totalSteps) {
            setStep((prevStep) => prevStep + 1)
        }
    }

    const handleMoveToEvaluation = (e: any) => {
        e.preventDefault()
    }

    return (
        <FlexContainer as="main">
            <FlexContainer
                as="section"
                style={{
                    maxWidth: `${width.xs}`,
                    flexDirection: 'column',
                    minHeight: '100vh',
                    justifyContent: 'space-between',
                    padding: '1rem'
                }}
            >
                <ProgressBar steps={totalSteps} currentStep={step} />
                <br />
                {step === 1 && <UserPersonalData />}
                {step === 2 && (
                    <DescriptiveStep
                        firstLine="O que é o"
                        secondLine="UX Arch"
                        description={[
                            'O UX Arch é um projeto de doutorado desenvolvido na Universidade Federal do Paraná pelo pesquisador / professor / desenvolvedor Rafael Fischer.',
                            'O objetivo do UX Arch é auxiliar estudantes e profissionais de arquitetura e design de interiores a projetarem atmosferas e experiências arquitetônicas marcantes para seus usuários.'
                        ]}
                    />
                )}
                {step === 3 && (
                    <DescriptiveStep
                        firstLine="Como funciona o"
                        secondLine="UX Arch"
                        description={[
                            'O UX Arch utiliza inteligência artificial para aprender mais sobre os usuários.',
                            'Desta forma, é possível prever, ainda na prancheta, quais serão as atmosferas e experiências resultantes de um espaço projetado por estudantes ou profissionais de arquitetura / design de interiores.'
                        ]}
                    />
                )}
                {step === 4 && (
                    <DescriptiveStep
                        firstLine="Como você está ajudando o"
                        secondLine="UX Arch"
                        description={[
                            'Você está prestes a avaliar as atmosferas e experiências arquitetônicas de alguns projetos existentes.',
                            'Sua avaliação irá auxiliar a Inteligência Artificial do UX Arch a prever atmosferas e experiências espaciais de projetos futuros.'
                        ]}
                    />
                )}
                <DefaultButton
                    style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
                    onClick={handleNextStep}
                >
                    {step === totalSteps ? 'Concluir' : 'Continuar'}
                </DefaultButton>
            </FlexContainer>
        </FlexContainer>
    )
}
