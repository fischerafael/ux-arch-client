import { CardHome } from './CardHome'

import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'
import { ResponsiveGrid } from '../../../design-system/components/layout/GridContainer/ResponsiveGridContainer'

export const CardsSection = () => {
    return (
        <FlexContainer
            as="section"
            style={{
                minHeight: '45vh',
                background: '#f0f0f0'
            }}
        >
            <ResponsiveGrid
                as="ul"
                style={{
                    maxWidth: '900px',
                    padding: '1rem',
                    paddingTop: '0'
                }}
            >
                <CardHome
                    img="/assets/icons/users.svg"
                    cardTitle="Usuários"
                    cardDescription="Os usuários avaliam atmosferas e experiências de projetos arquitetônicos e espaços existentes."
                />
                <CardHome
                    img="/assets/icons/architects-design.svg"
                    cardTitle="Arquitetos"
                    cardDescription="Arquitetos projetam novos espaços e cadastram suas propostas no UX Arch."
                />
                <CardHome
                    img="/assets/icons/ia.svg"
                    cardTitle="Inteligência artificial "
                    cardDescription="A inteligência artificial do UX Arch prevê as atmosferas dos projetos dos arquitetos com base na avaliação dos usuários."
                />
            </ResponsiveGrid>
        </FlexContainer>
    )
}
