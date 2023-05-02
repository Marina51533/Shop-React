export const userActionTypes = {
    setCurrentUser:'setCurrentUser'
}

const initialState = {
    setCurrentUser: null
}

export const userReducer = (state = initialState,action)=>{
    const {type,payload} = action

    switch(type){
        case userActionTypes.setCurrentUser:
            return {...state, setCurrentUser:payload}

        default:
            return state
    }
}