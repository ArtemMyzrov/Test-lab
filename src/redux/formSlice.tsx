import { createSlice } from '@reduxjs/toolkit';

interface FormState {
    name: string;
    phone: string;
    agreed: boolean;
}

const initialState: FormState = {
    name: '',
    phone: '',
    agreed: false,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setAgreed: (state, action) => {
            state.agreed = action.payload;
        },
    },
});

export const { setName, setPhone, setAgreed } = formSlice.actions;
export default formSlice.reducer;
