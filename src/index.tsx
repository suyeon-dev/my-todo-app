import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// [todo3] store 설정 -> Redux 스토어 타입 설정
// - store/ index.ts에서 통합한 Root reducer를 value로 전달
const store = configureStore({ reducer: rootReducer });
console.log(store);

// ✅ store에서 RootState와 Dispatch 타입 추출
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// [todo4] app 컴포넌트의 자식 컴포넌트 모두에서 사용가능하도록
// store props로 store 전달
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
