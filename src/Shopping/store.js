import { configureStore } from "@reduxjs/toolkit";
import rootreducer from './reducer';
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootreducer);
let store = configureStore({
    reducer: persistedReducer,
});
let persistor = persistStore(store);

export { store, persistor };

// const store = configureStore({
//     reducer:rootreducer
// });


// export default store;