import * as types from "../actions/actionType"

const initialState ={
    data:["pravin","sawant"],
    users:[]
}


export const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case types.getData:
            return {
                ...state,
                users:action.payload    
            }
            break;
        default:
            return state;
    }
}