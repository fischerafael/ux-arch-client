import { BlogPostCard } from '../../../Components/Card/BlogPostCard'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'
import { ResponsiveGrid } from '../../../design-system/components/layout/GridContainer/ResponsiveGridContainer'

export const BlogSection = () => {
    return (
        <FlexContainer
            as="main"
            style={{
                marginTop: '10vh',
                background: '#fff'
            }}
        >
            <FlexContainer
                as="ul"
                style={{
                    maxWidth: '900px',
                    minHeight: '90vh',
                    justifyContent: 'flex-start',
                    padding: '1rem',
                    flexDirection: 'column'
                }}
            >
                <ResponsiveGrid columns="2">
                    <BlogPostCard
                        url="/"
                        cardTitle="Por que projetar atmosferas?"
                        cardDescription="Atmosferas são importantes blabla lba s hdf us huhfuash dfhs ufhasudh fusah ufhasu dhfusad hfusahd usdhufd"
                    />
                    <BlogPostCard
                        url="/"
                        cardTitle="Por que projetar atmosferas?"
                        cardDescription="Atmosferas são importantes blabla lba s hdf us huhfuash dfhs ufhasudh fusah ufhasu dhfusad hfusahd usdhufd"
                    />
                    <BlogPostCard
                        url="/"
                        cardTitle="Por que projetar atmosferas?"
                        cardDescription="Atmosferas são importantes blabla lba s hdf us huhfuash dfhs ufhasudh fusah ufhasu dhfusad hfusahd usdhufd"
                    />
                </ResponsiveGrid>
            </FlexContainer>
        </FlexContainer>
    )
}
