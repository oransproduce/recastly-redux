import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';


// TODO:  Create your redux store, apply thunk as a middleware, and export it!
var sample = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
};
var store = createStore(
  rootReducer,
  sample,
  applyMiddleware(thunk)
);
export default store;