import apisauce from 'apisauce'

const create = (baseURL = '') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'X-Auth-Token': process.env.SECRET_KEY
    },
    timeout: 10000
  })

  return {
  }
}

export default {
  create
}