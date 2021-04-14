import { Text } from '../../../design-system/components/display/Text'
import { DefaultButton } from '../../../design-system/components/layout/Button'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'

export const HeroSection = () => {
    return (
        <FlexContainer
            as="main"
            style={{
                height: '90vh',
                background: '#fcfcfc',
                backgroundImage: 'url("/assets/hero/hero-img.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative'
            }}
        >
            <FlexContainer
                as="section"
                style={{
                    maxWidth: '900px',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: '0 1rem',
                    flexDirection: 'column'
                }}
            >
                <Text as="h1" style={{ fontSize: '5rem', margin: '2rem 0' }}>
                    UX Arch
                </Text>
                <Text
                    as="h2"
                    style={{
                        fontSize: '1rem',
                        maxWidth: '450px',
                        lineHeight: '1.5rem'
                    }}
                >
                    Projete experiências e atmosferas arquitetônicas pensadas em
                    seus usuários.
                </Text>
                <DefaultButton
                    as="button"
                    style={{
                        height: '3rem',
                        margin: '2rem 0',
                        maxWidth: '15rem'
                    }}
                >
                    Comece a projetar
                </DefaultButton>
            </FlexContainer>
            <FlexContainer
                as="div"
                style={{
                    height: '5rem',
                    background:
                        'linear-gradient(360deg, #f0f0f0 0%, rgba(240, 240, 240, 0) 100%);',
                    position: 'absolute',
                    bottom: '0'
                }}
            />
        </FlexContainer>
    )
}
