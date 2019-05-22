import {
  PHOTOS_SEARCH_FAILURE,
  PHOTOS_SEARCH_REQUEST,
  PHOTOS_SEARCH_SUCCESS
} from '../actions/PhotosActions'

const initialState = {
  photos: [],
  loading: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTOS_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    
      case PHOTOS_SEARCH_SUCCESS:
        return {
          ...state,
          photos: [...action.payload],
          loading: false,
          error: null
        }
      
        case PHOTOS_SEARCH_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload
          }
        
        default: {
          return state;
        }
  }
}