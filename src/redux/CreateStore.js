import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import { ajax } from 'rxjs/ajax';

export default (rootReducer, rootEpic) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = []
  const enhancers = []
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  /* ------------- RxJS Middleware ------------- */
  const epicMiddleware = createEpicMiddleware({
    dependencies: { getJSON: ajax.getJSON }
  })
  middleware.push(epicMiddleware)

  /* ------------- Logger Middleware ------------- */
  const logger = createLogger({
    predicate: (getState, { type }) => true
  })
  middleware.push(logger)

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, composeEnhancers(...enhancers))

  epicMiddleware.run(rootEpic)

  return {store}
}