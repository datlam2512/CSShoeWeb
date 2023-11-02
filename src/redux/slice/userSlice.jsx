import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserRedux: (state, action) => {
            state.currentUser = action.payload
            localStorage.setItem("currentUser", JSON.stringify(action.payload))
        },
        clearUser: (state) => {
            state.currentUser = {}
            localStorage.removeItem("currentUser")
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUserRedux, clearUser } = userSlice.actions

export default userSlice.reducer