import State from 'state-manager';
import ep from '../../ip-addr'
import JSON

var defHeader = {
                Accept: "application/json",
                "Content-Type": "application/json"
            }

export default class Request {
    function logIn(user) {
        fetch(ep + 'user/login', {
            method: "POST",
            headers: ,
            body: JSON.stringify(user)
        }
    }
}
