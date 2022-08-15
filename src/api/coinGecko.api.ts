import { Exchange } from 'src/types'
import api from './api'

export const fetchExchanges = () => {
    return api.get<Exchange[]>('exchanges', {
        baseURL: 'https://api.coingecko.com/api/v3/'
    }).then(res => res.data)
}

export const fetchExchangeById = (id: string) => {
    return api.get<Exchange>(`exchanges/${id}`, {
        baseURL: 'https://api.coingecko.com/api/v3/'
    }).then(res => res.data)
}