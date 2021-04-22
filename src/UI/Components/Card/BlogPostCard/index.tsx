import { Text } from '../../../design-system/components/display/Text'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'

interface Props {
    cardTitle: string
    cardDescription: string
    url: string
}

export const BlogPostCard = ({ cardTitle, cardDescription, url }: Props) => {
    return (
        <FlexContainer
            as="li"
            style={{
                borderRadius: '.5rem',
                background: '#fafafa',
                padding: '2rem',
                alignItems: 'flex-start',
                flexDirection: 'column',
                cursor: 'pointer'
            }}
        >
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
            <Text
                as="p"
                style={{
                    marginTop: '1rem',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    lineHeight: '1.25rem',
                    color: '#009AD9'
                }}
            >
                Continue lendo
            </Text>
        </FlexContainer>
    )
}
