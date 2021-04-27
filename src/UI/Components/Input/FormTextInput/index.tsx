import { colors } from '../../../design-system/styles/Theme'

import { Label } from '../../../design-system/components/display/Text'
import { TextInput } from '../../../design-system/components/input'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'

interface Props {
    label: string
    placeholder?: string
    error?: string
    [x: string]: any
}

export const FormTextInput = ({
    label,
    placeholder,
    error,
    ...rest
}: Props) => {
    return (
        <FlexContainer
            as="label"
            style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                margin: '.25rem 0'
            }}
        >
            <FlexContainer
                as="section"
                style={{ justifyContent: 'space-between' }}
            >
                <Label>{label}</Label>
                <Label style={{ color: colors.atention }}>{error}</Label>
            </FlexContainer>
            <TextInput placeholder={placeholder} {...rest} />
        </FlexContainer>
    )
}
