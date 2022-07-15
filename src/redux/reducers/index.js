import { combineReducers } from "@reduxjs/toolkit";

import listSlice from "../slices/list";
import detailSlice from "../slices/details";

export default combineReducers({
    listSlice,
    detailSlice
});