import {createSlice} from '@reduxjs/toolkit';

const initialUserState = {token: "", user: ""};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUserData(state, action){
            state.token = action.payload.token;
            state.user = action.payload.user;
        }
    }
})

export default userSlice.reducer;
export const userActions = userSlice.actions;