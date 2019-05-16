export const PHOTOS_SEARCH_REQUEST = 'PHOTOS_SEARCH_REQUEST'
export const PHOTOS_SEARCH_SUCCESS = 'PHOTOS_SEARCH_SUCCESS'
export const PHOTOS_SEARCH_FAILURE = 'PHOTOS_SEARCH_FAILURE'

export const photosSearchRequest = () => ({
  type: PHOTOS_SEARCH_REQUEST
});

export const photosSearchSuccess = (photos) => ({
  type: PHOTOS_SEARCH_SUCCESS,
  payload: photos
})

export const photosSearchFailure = (message) => ({
  type: PHOTOS_SEARCH_FAILURE,
  payload: message
})