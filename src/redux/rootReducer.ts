import exampleSlice from "./slice/exampleSlice";
import { AnyAction, Reducer, combineReducers } from "@reduxjs/toolkit";
import { RootState } from "./store";

const combinedReducer = combineReducers({
	exampleData: exampleSlice,
});

export const RootReducer:Reducer = (state:RootState, action:AnyAction) => {
	if (action.type === 'user/LogoutReducer') {
		state = {} as RootState;
	}
	return combinedReducer(state, action);
};