import { Text } from '../../../design-system/components/display/Text'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'

interface Props {
    cardTitle: string
    cardDescription: string
    img?: string
    url?: string
}

export const CardTextImage = ({
    cardTitle,
    cardDescription,
    img,
    url
}: Props) => {
    return (
        <FlexContainer
            as="li"
            style={{
                borderRadius: '.5rem',
                background: 'white',
                padding: '2rem',
                alignItems: 'flex-start',
                flexDirection: 'column',
                cursor: 'pointer'
            }}
        >
            {img && (
                <img
                    src={img}
                    alt={cardTitle}
                    style={{ alignSelf: 'center', padding: '2rem 0' }}
                />
            )}
            <Text
                as="h2"
                style={{
                    fontSize: '1rem',
                    lineHeight: '1.5rem'
                }}
            >
                {cardTitle}
            </Text>
            <Text
                as="p"
                style={{
                    marginTop: '1rem',
                    fontSize: '0.75rem',
                    lineHeight: '1.25rem'
                }}
            >
                {cardDescription}
            </Text>
        </FlexContainer>
    )
}
