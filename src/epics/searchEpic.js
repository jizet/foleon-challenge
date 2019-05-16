import {
  PHOTOS_SEARCH_REQUEST,
  photosSearchSuccess,
  photosSearchFailure
} from '../actions/PhotosActions'
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs-compat/operator/mergeMap';
import { ajax } from 'rxjs/ajax';

export const fetchSearchPhotos = action$ => action$.pipe(
  ofType(PHOTOS_SEARCH_REQUEST),
  mergeMap((action) => ajax.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=083c0cbdd701e3b13dffe6324712eccb&tags=soccer&format=json&nojsoncallback=1').pipe(
      map(response => photosSearchSuccess(response))
    )
  )
)