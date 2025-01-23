import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// [todo3] store 설정
// module/ index.js에서 통합한 Root reducer를 value로 전달
const store = configureStore({ reducer: rootReducer });
console.log(store);

// [todo4] app 컴포넌트의 자식 컴포넌트 모두에서 사용가능하도록
// store props로 store 전달
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
