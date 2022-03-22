import { createSlice } from "@reduxjs/toolkit";

export const MoneySlice = createSlice({
    name: "money",
    initialState: {
        items: [
            {
                time:1,
                income:[
                    {
                        title:'salary',
                        count:200
                    }
                ],
                expense:[
                    {
                        title:'gift',
                        count:25
                    }
                ]
            },
            {
                time:2,
                income:[
                    {
                        title:'salary',
                        count:120
                    }
                ],
                expense:[
                    {
                        title:'food',
                        count:50
                    },
                ]
            },
            {
                time:3,
                income:[
                    {
                        title:'gift',
                        count:100
                    },
                ],
                expense:[
                    {
                        title:'bank',
                        count:10
                    },
                    {
                        title:'food',
                        count:35
                    },
                ]
            },
            {
                time:4,
                income:[
                    {
                        title:'bit coin',
                        count:75
                    },
                ],
                expense:[
                    {
                        title:'holiday',
                        count:30
                    },
                    {
                        title:'food',
                        count:40
                    },
                ]
            },
            {
                time:5,
                income:[],
                expense:[
                    {
                        title:'gift',
                        count:150
                    },
                    {
                        title:'food',
                        count:40
                    },
                ]
            },
        ],
    },
    reducers: {

    },
});

// export const {  } = TodoSlice.actions;
export default MoneySlice.reducer;