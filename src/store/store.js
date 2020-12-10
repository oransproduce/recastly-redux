import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';


// TODO:  Create your redux store, apply thunk as a middleware, and export it!
var sample = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
};
export default function configureStore(initialState = sample) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}