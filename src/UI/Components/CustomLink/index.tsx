import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
    href: string
}

export const CustomLink = ({ children, href }: Props) => {
    return (
        <Link href={href}>
            <a style={{ textDecoration: 'none' }}>{children}</a>
        </Link>
    )
}
