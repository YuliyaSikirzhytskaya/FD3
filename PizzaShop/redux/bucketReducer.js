import { BUCKET_LOADING, BUCKET_ERROR, BUCKET_SET } from './bucketAC';

const initState={

  status: 0,
  data: null,

}

function bucketReducer(state=initState,action) {
  switch (action.type) {

    case BUCKET_LOADING: {
      let newState={
        status:1,
        data:null,
      };
      return newState;
    }

    case BUCKET_ERROR: {
      let newState={
        status:2,
        data:null,
      };
      return newState;
    }

    case BUCKET_SET: {
      let newState={
        status:3,
        data:action.bucket,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default bucketReducer;
