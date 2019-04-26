import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers";

const persistconfig = {
  key: "root",
  storage,
  timeout: 20000
};

const persistedReducer = persistReducer(persistconfig, reducers);

const middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);
export const persistor = persistStore(store);
