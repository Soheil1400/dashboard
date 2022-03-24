import { createSlice } from "@reduxjs/toolkit";

export const ContactSlice = createSlice({
    name: "contact",
    initialState: {
        items: [
            {
                id:1,
                fName:'Curtis',
                lName:'json',
                image:'https://avatars.dicebear.com/api/micah/:1.svg',
                email:'wiegand@hotmail.com',
                type:'Friend',
                age:'23',
                country:'Spain',
                favorite:false
            },
            {
                id:2,
                fName:'Xavier',
                lName:'',
                image:'https://avatars.dicebear.com/api/micah/:2.svg',
                email:'tyrell86@company.com',
                type:'Work',
                age:'18',
                country:'Turkey',
                favorite:true
            },
            {
                id:3,
                fName:'Lola',
                lName:'json',
                image:'https://avatars.dicebear.com/api/micah/:3.svg',
                email:'aufderhar56@yahoo.com',
                type:'Family',
                age:'40',
                country:'Iran',
                favorite:false
            },
        ],
    },
    reducers: {
        checkFavorite: (state, action) => {
            state.items = state.items.map(c => c.id === action.payload ? {...c , favorite:!c.favorite} : c)
        },
        editContact: (state, action) => {
            state.items = state.items.map(c => c.id === action.payload.id ? {...action.payload} : c)
        },
        addContact: (state, action) => {
            state.items.push({...action.payload, id: Math.floor(Math.random()*1000),image:`https://avatars.dicebear.com/api/micah/:${Math.floor(Math.random()*1000)}.svg`})
        },
        deleteContact:(state, action) => {
            const p = state.items.findIndex((item) => item.id === action.payload);
            state.items.splice(p, 1);
        }
    },
});

export const { checkFavorite, editContact, addContact, deleteContact } = ContactSlice.actions;
export default ContactSlice.reducer;