import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const { getMetalsData } = httpRequests
const { caseState, errorMessage, initialStatus } = featuresLogic

const initialState = {
	metals: {},
    ...initialStatus
}

const API_URL = '/api/metals'

export const getMetals = createAsyncThunk(
    'metal/getMetals',
    async (selMetals, thunkAPI) => {
        try {
            return await getMetalsData(API_URL, selMetals)
        } catch (error) {
            const message = errorMessage(error)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const metalsSlice = createSlice({
    name: 'metal',
    initialState,
    reducers: {
		reset: caseState.reset('metals', {}),
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMetals.pending, caseState.pending)
            .addCase(getMetals.fulfilled, caseState.fulfilled('metals'))
            .addCase(getMetals.rejected, caseState.rejected)
    },
})

export const { reset: resetMetals } = metalsSlice.actions

export default metalsSlice.reducer
