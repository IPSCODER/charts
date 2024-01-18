import * as types from "./actionType"
import axios from "axios";

const getUsers = (users) =>({
    type:types.getData,
    payload:users
})



export const loadUsers = () =>{
    return function(dispatch){
        axios.get("http://localhost:5000/posts").then((resp) =>{
            dispatch(getUsers(resp.data));
        }).catch(err =>console.log(err))
    }
}


