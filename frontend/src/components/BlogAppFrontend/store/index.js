import { configureStore, createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        loguot(state) {
            // when the user logout then need to remove the id of current user from localStorage()
            localStorage.removeItem('userId')
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer
})