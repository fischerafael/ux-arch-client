import { useState } from 'react'

export const useForm = function <T>(initialData: T) {
    const [data, setData] = useState(initialData)

    const handleDataChange = (e: any) => {
        setData({ ...data, [e.target.getAttribute('id')]: e.target.value })
    }

    return {
        data,
        handleDataChange
    }
}
