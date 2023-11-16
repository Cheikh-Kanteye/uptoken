import {
  Store,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import themeReducer from "./reducer";
import { ToggleThemeAction } from "./actions";

export type RootState = {
  theme: ReturnType<typeof themeReducer>;
};

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store: Store<RootState, ToggleThemeAction> =
  createStore(rootReducer);
