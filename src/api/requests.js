import {URL} from './url'

export function getRequest(formBody) {
  return fetch(URL + "?" + formBody).then((res) => res.json());
}

export function postRequest(formBody) {

    return fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formBody
      }).then(response=> {if(response.status===200) alert("Запись прошла успешно")},
                error=>{console.log(error); alert("При записи произошла ошибка")})
  }