import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'
import { colors } from '../../../design-system/styles/Theme'

interface Props {
    steps: number
    currentStep: number
}

export const ProgressBar = ({ steps, currentStep }: Props) => {
    const barPercentage = ((currentStep - 1) / steps) * 100

    return (
        <FlexContainer
            style={{
                background: colors.grey,
                height: '.125rem',
                justifyContent: 'flex-start'
            }}
        >
            <FlexContainer
                style={{
                    background: colors.primary,
                    width: `${barPercentage}%`
                }}
            />
        </FlexContainer>
    )
}
