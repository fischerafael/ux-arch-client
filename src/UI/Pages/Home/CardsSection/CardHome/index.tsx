import { Text } from '../../../../design-system/components/display/Text'
import { FlexContainer } from '../../../../design-system/components/layout/FlexContainer'

export const CardHome = ({ img, cardTitle, cardDescription }) => {
    return (
        <FlexContainer
            as="li"
            style={{
                borderRadius: '.5rem',
                background: 'white',
                padding: '2rem',
                alignItems: 'flex-start',
                flexDirection: 'column'
            }}
        >
            <img
                src={img}
                alt={cardTitle}
                style={{ alignSelf: 'center', padding: '2rem 0' }}
            />
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
