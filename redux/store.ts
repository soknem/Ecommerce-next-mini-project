import {configureStore} from "@reduxjs/toolkit";
import authSlice from "@/redux/feature/auth/authSlice";
import {ecommerceApi} from "@/redux/api";
import userProfileSlice from "./feature/userProfile/userProfileSlice";

export const makeStore = () => {
    return configureStore({
        reducer:{
            userProfile: userProfileSlice,
            [ecommerceApi.reducerPath]: ecommerceApi.reducer,
            auth: authSlice,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(ecommerceApi.middleware),
    });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']