import Redux from 'redux';
// let sampleData = {
//   videoList: [],
//   currentVideo: {}
// };
let sampleData = [];
var videoListReducer = (state = sampleData, action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  }
  return state;
};

export default videoListReducer;
