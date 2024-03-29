'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    value: number
}

export const initialState : CounterState = {
    value : 0
}

export const CounterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers :{
        increment : ( state : any ) => {state.value += 1},
        decrement : ( state : any) => {state.value -= 1},
        incrementByAmount : ((state : any, action : any)=>{
            state.value += action.payload
        })

    }
})

export const {increment, decrement, incrementByAmount} = CounterSlice.actions;
export default CounterSlice.reducer;
