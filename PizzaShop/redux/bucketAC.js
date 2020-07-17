const BUCKET_LOADING='BUCKET_LOADING';
const BUCKET_ERROR='BUCKET_ERROR';
const BUCKET_SET='BUCKET_SET';

const bucketLoadingAC=function() {
  return {
    type: BUCKET_LOADING,
  };
}

const bucketErrorAC=function() {
  return {
    type: BUCKET_ERROR,
  };
}

const bucketSetAC=function(bucket) {
  return {
    type: BUCKET_SET,
    bucket:bucket,
  };
}

export {
    bucketLoadingAC,BUCKET_LOADING,
    bucketErrorAC,BUCKET_ERROR,
    bucketSetAC,BUCKET_SET,
}
