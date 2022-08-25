import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import LayoutReducer from './reducers/LayoutSlice'
import { MenuListApi } from "../services/MenuListService"
const rootReducer = combineReducers({
    LayoutReducer,
     [MenuListApi.reducerPath] : MenuListApi.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(MenuListApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']