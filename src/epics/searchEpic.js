import {
  PHOTOS_SEARCH_REQUEST,
  photosSearchSuccess,
  photosSearchFailure
} from '../actions/PhotosActions'
import { ofType } from 'redux-observable';
import { map, mergeMap, tap } from 'rxjs/operators';

export const fetchSearchPhotos = (action$, state$, { getJSON }) => action$.pipe(
  ofType(PHOTOS_SEARCH_REQUEST),
  mergeMap(
    (action) => getJSON(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.KEY}&tags=${action.payload}&format=json&nojsoncallback=1`)
    .pipe(
      map(({photos}) => (photosSearchSuccess(photos.photo)))
    )
  )
)