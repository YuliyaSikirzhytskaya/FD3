import fetch from 'isomorphic-fetch';

import { pizzaLoadingAC, pizzaErrorAC, pizzaSetAC } from "./pizzaAC";

function pizzaThunkAC(dispatch) {
    return function() {
        dispatch( pizzaLoadingAC() );
        fetch("http://localhost:3000/Pizza",{
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
                dispatch( pizzaSetAC(data) );
            })
            .catch( (error) => {
                console.error(error);
                dispatch( pizzaErrorAC() );
            })
        ;
    }

}

export {pizzaThunkAC};
