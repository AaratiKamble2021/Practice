import TodoReducers from './TodoReducers'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    TodoReducers
})
export default rootReducer;
// export type RootState = ReturnType<typeof rootReducer>