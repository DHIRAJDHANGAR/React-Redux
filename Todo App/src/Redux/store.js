import { configureStore } from "@reduxjs/toolkit";
import reducer from "./RootReducer";
export default configureStore({ reducer });
