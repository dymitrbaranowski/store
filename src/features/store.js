import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice"; // Import the categories slice reducer

export const store = configureStore({
  reducer: {
    // Add your reducers here
    categories: categoriesSlice, // Import and use the categories slice reducer
    // categories: (state = [], action) => state, // Example placeholder reducer
    // products: (state = [], action) => state, // Example placeholder reducer
    // cart: (state = [], action) => state, // Example placeholder reducer
    // user: (state = null, action) => state, // Example placeholder reducer
    // orders: (state = [], action) => state, // Example placeholder reducer

    // Add other reducers as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check if needed
    }),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});
export default store;
