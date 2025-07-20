import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    categories: "cat",
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
