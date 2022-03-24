import {createSlice} from "@reduxjs/toolkit";
import {moneys} from "../../data/moneys";

export const MoneySlice = createSlice({
    name: "money",
    initialState: {
        items: moneys
    },
    reducers: {
        addIncome : (state ,action) => {
            state.items = state.items.map(i => i.month === action.payload.month ? {
                ...i,
                income: [...i.income, {title: action.payload.title, count: Number(action.payload.count)}]
            } : i)
        },
        addExpense : (state ,action) => {
            state.items = state.items.map(i => i.month === action.payload.month ? {
                ...i,
                expense: [...i.expense, {title: action.payload.title, count: Number(action.payload.count)}]
            } : i)
        }
    },
});

export const {addIncome, addExpense} = MoneySlice.actions;
export default MoneySlice.reducer;