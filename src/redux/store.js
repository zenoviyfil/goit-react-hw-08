import { contactsReducer } from "./contactsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
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
        serializableCheck: {
            ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})


export const persistor = persistStore(store)