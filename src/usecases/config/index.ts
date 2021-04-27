import axios from 'axios'

const url = {
    dev: 'http://localhost:1337',
    production: 'https://ux-arch-strapi.herokuapp.com'
}

export const api = axios.create({
    baseURL: url.production
})
