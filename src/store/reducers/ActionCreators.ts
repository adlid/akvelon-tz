import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ResponceResult } from "../../models/IResponseResult";
import { IUnknown } from "../../models/IUnknown";
import { IUsers } from "../../models/IUsers";

const URL = 'https://reqres.in'

export const fetchStatusList = createAsyncThunk(
    'statusList/fetchStatusList',
    async (_, thunkAPI ) => {
        try{
            const response = await axios.get< ResponceResult<IUsers>>(`${URL}/users/`)
            return response.data;
        }
        catch (e){
            return thunkAPI.rejectWithValue("Something get with wrong")
        }
    }
)


export const fetchDealList = createAsyncThunk(
    'dealList/fetchStatusList',
    async (_, thunkAPI ) => {
        try{
            const response = await axios.get< ResponceResult<IUnknown>>('https://aso-test-1.bitrix24.ru/rest/1/83go2kp1c28weuej/crm.deal.list')
            return response.data;
        }
        catch (e){
            return thunkAPI.rejectWithValue("Something get with wrong")
        }
    }
)