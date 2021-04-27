import { ICreateUser } from '../../../entities/user'
import { api } from '../../config'

class User {
    async create(formData: ICreateUser) {
        const data = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            status: 'client'
        }

        const response = await api.post('/auth/local/register', data)
        return response
    }
}

export const userServices = new User()
