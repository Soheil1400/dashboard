import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo.reducer";
import contactReducer from "./reducers/contact.reducer";
import moneyReducer from "./reducers/money.reducer";

const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({
    todo: todoReducer,
    contact: contactReducer,
    money:moneyReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [],
});

export const persistor = persistStore(store);
export default store;