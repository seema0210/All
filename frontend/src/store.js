
import { createStoreHook } from "react-redux";
import changeNumber from "./components/frontend_practic/ReducerFun";

// const store = StoreCreator(changeNumber)
const store = createStoreHook(changeNumber)

export default store;
