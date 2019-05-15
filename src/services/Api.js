import apisauce from 'apisauce'
import { environment } from './environment'

const create = (baseURL = 'https://www.flickr.com/services/api/render/?') => {
  const api = apisauce.create({
    baseURL,
    headers: {
    },
    timeout: 10000
  })

  const getPhotos = (tag) => api.get(`method=${environment.methods.search}&api_key=${process.env.KEY}&tags=${tag}${environment.constants.format}`)

  return {
    getPhotos
  }
}

export default {
  create
}