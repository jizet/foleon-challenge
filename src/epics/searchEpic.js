import { Observable } from 'rxjs'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import PhotosActions from '../reducers/PhotoReducer'

export const fetchSearchPhotos = (action$) => {
  return action$.ofType(PhotosActions.getPhotosRequest)
          .switchMap((action) => {
            console.log(action)
            return ajax.getJSON(url)
                    .map(data => {
                      console.log(data)
                      return data.results
                    })
                    .map(data => PhotosActions.getPhotosSuccess(data))
                    .catch(error => Observable.of(PhotosActions.getPhotosFailure(error.message)))
          })
}
