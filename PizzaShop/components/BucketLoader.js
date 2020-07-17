import fetch from 'isomorphic-fetch';

function BucketUpload(data){
  fetch("http://localhost:3000/Bucket",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then( (response) => { // response - HTTP-ответ
    if (!response.ok) {
        let Err=new Error("fetch error " + response.status);
        Err.userMessage="Ошибка загрузки";
        console.log(Err);
    }
  });
}


function BucketUpdate(data){
  fetch("http://localhost:3000/Bucket/" + data.id,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then( (response) => { // response - HTTP-ответ
      if (!response.ok) {
          let Err=new Error("fetch error " + response.status);
          Err.userMessage="Ошибка загрузки";
          console.log(Err);
      }
    });
}

function BucketErase(data){
    fetch("http://localhost:3000/Bucket/" + data,{
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then( (response) => { // response - HTTP-ответ
        if (!response.ok) {
            let Err=new Error("fetch error " + response.status);
            Err.userMessage="Ошибка загрузки";
            console.log(Err);
        }
        else return response.json();
      });
}


export {BucketUpload, BucketUpdate, BucketErase};