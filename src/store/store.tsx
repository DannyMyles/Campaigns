import { configureStore} from "@reduxjs/toolkit";
import { campaignsApi } from "../services/campaignAPi";

export const store = configureStore({
    //Adding reducer
    reducer:{
        [campaignsApi.reducerPath]: campaignsApi.reducer
    },
    // Adding midleware for caching of the server data
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(campaignsApi.middleware)
})