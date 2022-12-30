import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featuresLogic, httpRequests } from '..'

const { createField, getPublicItem, deleteField, updateValue } = httpRequests
const { caseState, errorMessage, initialStatus } = featuresLogic

const initialState = {
	settings: {},
	...initialStatus
}

const API_URL = '/api/app-settings/'

export const createSettingField = createAsyncThunk(
    'setting/create',
    async (reqData, thunkAPI) => {
        try {
            return await createField(API_URL, reqData)
        } catch (error) {
            return thunkAPI.rejectWithValue(errorMessage(error))
        }
    }
)

export const getSettings = createAsyncThunk(
    'setting/getAll',
    async (_, thunkAPI) => {
        try {
            return await getPublicItem(API_URL)
        } catch (error) {
            return thunkAPI.rejectWithValue(errorMessage(error))
        }
    }
)

export const deleteSettingData = createAsyncThunk(
    'setting/delete',
    async (fieldKey, thunkAPI) => {
        try {
            return await deleteField(API_URL, fieldKey)
        } catch (error) {
            return thunkAPI.rejectWithValue(errorMessage(error))
        }
    }
)

export const updateSettings = createAsyncThunk(
    'setting/update',
    async (reqData, thunkAPI) => {
        try {
            return await updateValue(API_URL, reqData)
        } catch (error) {
            return thunkAPI.rejectWithValue(errorMessage(error))
        }
    }
)

export const settingsSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        reset: caseState.reset('settings', {}),
    },
    extraReducers: (builder) => {
        builder
            .addCase(createSettingField.pending, caseState.pending)
            .addCase(createSettingField.fulfilled, caseState.fulfilled('settings'))
            .addCase(createSettingField.rejected, caseState.rejected)
            .addCase(getSettings.pending, caseState.pending)
            .addCase(getSettings.fulfilled, caseState.fulfilled('settings'))
            .addCase(getSettings.rejected, caseState.rejected)
            .addCase(deleteSettingData.pending, caseState.pending)
            .addCase(deleteSettingData.fulfilled, caseState.fulfilled('settings'))
            .addCase(deleteSettingData.rejected, caseState.rejected)
            .addCase(updateSettings.pending, caseState.pending)
            .addCase(updateSettings.fulfilled, caseState.fulfilled('settings'))
            .addCase(updateSettings.rejected, caseState.rejected)
    },
})

export const { reset: resetSettings } = settingsSlice.actions
export default settingsSlice.reducer
