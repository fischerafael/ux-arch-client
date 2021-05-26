import React from 'react'
import { NavBar } from '../../components/App/NavBar'
import { ContainerBlogMainSection } from '../../design/components/container'
import { TemplateBlogMainScrollSection } from '../../design/components/templates'

export const BlogPage = () => {
    return (
        <>
            <NavBar />
            <ContainerBlogMainSection>
                <TemplateBlogMainScrollSection>
                    oiTemplateBlogMainScrollSection
                </TemplateBlogMainScrollSection>
            </ContainerBlogMainSection>
        </>
    )
}
