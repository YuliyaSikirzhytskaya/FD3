import fetch from 'isomorphic-fetch';

import { questionsLoadingAC, questionsErrorAC, questionsSetAC } from "./questionsAC";

function questionsThunkAC(dispatch) {
    return function() {
        dispatch( questionsLoadingAC() );
        fetch("http://localhost:3000/Info",{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
            .then( (response) => { // response - HTTP-ответ
                if (!response.ok) {
                    let Err=new Error("fetch error " + response.status);
                    Err.userMessage="Ошибка связи";
                    throw Err;
                }
                else
                    return response.json();
            })
            .then( (data) => {
                dispatch( questionsSetAC(data) );
            })
            .catch( (error) => {
                console.error(error);
                dispatch( questionsErrorAC() );
            })
        ;
    }

}

export {questionsThunkAC};
