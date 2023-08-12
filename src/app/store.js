import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
});

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const PersistedReducer = persistReducer(persistedConfig, rootReducer);

export const store = configureStore({
  reducer: PersistedReducer,
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
