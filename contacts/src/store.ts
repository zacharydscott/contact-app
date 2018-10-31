import { Store, createStore, applyMiddleware } from "redux";

import { state } from "./reducer/comb";
import { IState } from "./reducer/comb";

export const store: Store<IState> = createStore(state, applyMiddleware());
