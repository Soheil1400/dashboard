import {createSlice} from "@reduxjs/toolkit";

export const MoneySlice = createSlice({
    name: "money",
    initialState: {
        items: [
            {
                time: 1,
                income: [
                    {
                        title: 'salary',
                        count: 200
                    }
                ],
                expense: [
                    {
                        title: 'gift',
                        count: 25
                    }
                ]
            },
            {
                time: 2,
                income: [
                    {
                        title: 'salary',
                        count: 120
                    }
                ],
                expense: [
                    {
                        title: 'food',
                        count: 50
                    },
                ]
            },
            {
                time: 3,
                income: [
                    {
                        title: 'gift',
                        count: 100
                    },
                ],
                expense: [
                    {
                        title: 'bank',
                        count: 10
                    },
                    {
                        title: 'food',
                        count: 35
                    },
                ]
            },
            {
                time: 4,
                income: [
                    {
                        title: 'bit coin',
                        count: 75
                    },
                ],
                expense: [
                    {
                        title: 'holiday',
                        count: 30
                    },
                    {
                        title: 'food',
                        count: 40
                    },
                ]
            },
            {
                time: 5,
                income: [],
                expense: [
                    {
                        title: 'gift',
                        count: 150
                    },
                    {
                        title: 'food',
                        count: 40
                    },
                ]
            },
        ],
    },
    reducers: {
        addMoney: (state, action) => {
            const p = state.items.findIndex((item) => item.time === Number(action.payload.time));
            if (p >= 0) {
                if (action.payload.type === 'income') {
                    state.items = state.items.map(i => i.time === Number(action.payload.time) ? {
                        ...i,
                        income: [...i.income, {title: action.payload.title, count: Number(action.payload.count)}]
                    } : i)
                } else {
                    state.items = state.items.map(i => i.time === Number(action.payload.time) ? {
                        ...i,
                        expense: [...i.expense, {title: action.payload.title, count: Number(action.payload.count)}]
                    } : i)
                }
            } else {
                if (action.payload.type === 'income') {
                    state.items.push({
                        time: Number(action.payload.time),
                        income: [{title: action.payload.title, count: Number(action.payload.count)}],
                        expense: []
                    })
                } else {
                    state.items.push({
                        time: Number(action.payload.time),
                        expense: [{title: action.payload.title, count: Number(action.payload.count)}],
                        income: []
                    })
                }
            }
        }
    },
});

export const {addMoney} = MoneySlice.actions;
export default MoneySlice.reducer;