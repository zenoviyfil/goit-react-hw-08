import { contactsReducer } from "./contactsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { authReducer } from "./auth/slice";

const authConfig = {
    key: "auth",
    storage,
    whitelist: ["token"]
}

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: persistReducer(authConfig, authReducer)
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})


export const persistor = persistStore(store)