import { configureStore } from "@reduxjs/toolkit";

import productReducer, {
  productFetching,
} from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

store.dispatch(productFetching());
