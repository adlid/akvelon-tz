import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILogin } from "../../models/ILogin"



const initialState = {
    email:'',
    token:'',
    
}

const loginSlice = createSlice({
    name:'userLogin',
    initialState,
    reducers:{
        setUser(state,action:PayloadAction<ILogin>){
            state.email! = action.payload.email!
            state.token! = action.payload.token!
        },
        removeUser(state){
            state.email = ''
            state.token = ''
        }
    }
})
export const {setUser, removeUser} = loginSlice.actions
export default loginSlice.reducer