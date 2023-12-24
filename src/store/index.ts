import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authApi, { mainApi } from './services/mainApi';
import authSlice from './slices/authSlice';

// const preloadedState = {
// 	auth: {
// 		token:
// 			typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(TOKEN_NAME) as string) : null,
// 		loggedIn: typeof window !== 'undefined' ? !!localStorage.getItem(TOKEN_NAME) : false,
// 	},
// };

export const store = configureStore({
	reducer: {
		auth: authSlice,
		[mainApi.reducerPath]: mainApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(mainApi.middleware).concat(),
	devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {});

setupListeners(store.dispatch);
