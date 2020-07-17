import fetch from 'isomorphic-fetch';
import { bucketLoadingAC, bucketErrorAC, bucketSetAC } from "./bucketAC";

function bucketThunkAC(dispatch, data = null){
    return function() {
      var url = "http://localhost:3000/Bucket";

      if(data != null){
        var params = '?';
        data.forEach(el => {
          params+="id=" + el + "&";
        });
        url+=params;
      }

      dispatch( bucketLoadingAC() );
      fetch(url,{
          method: 'GET',
          headers: {
              'Content-Type':'application/json'
          }
      }).then( (response) => { // response - HTTP-ответ
            if (!response.ok) {
                let Err=new Error("fetch error " + response.status);
                Err.userMessage="Ошибка связи";
                throw Err;
            }
            else
                return response.json();
        })
        .then( (data) => {
            dispatch( bucketSetAC(data) );
        })
        .catch( (error) => {
            console.error(error);
            dispatch( bucketErrorAC() );
        })
      ;
    }
}


export {bucketThunkAC};