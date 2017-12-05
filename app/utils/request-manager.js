import State from './state-manager';
import ep from '../../ip-addr'

const defHeader = {
                Accept: "application/json",
                "Content-Type": "application/json"
            }

export default class MyReq {

    constructor() {
    }

    /*
    static post(api, data, callback) {
        fetch(ep + 'user/login', {
            method: "POST",
            headers: defHeader,
            body: JSON.stringify(data)
        })

    }*/

    static logIn(user) {
        State.storeId(user.id);
        fetch(ep + 'user/login', {
            method: "POST",
            headers: defHeader,
            body: JSON.stringify({
                id: user.id,
                name: user.name,
                picture: user.picture.data.url
            })
        })
    }
}
