import { IPost } from '../../../../entities/post'
import { BlogPostCard } from '../../../Components/Card/BlogPostCard'
import { FlexContainer } from '../../../design-system/components/layout/FlexContainer'
import { ResponsiveGrid } from '../../../design-system/components/layout/GridContainer/ResponsiveGridContainer'

export const BlogSection = ({ posts }: { posts: IPost[] }) => {
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
                    {posts.map((post) => (
                        <BlogPostCard
                            key={post.id}
                            url={`/blog/${post.slug}`}
                            cardTitle={post.title}
                            cardDescription={post.short_description}
                        />
                    ))}
                </ResponsiveGrid>
            </FlexContainer>
        </FlexContainer>
    )
}
