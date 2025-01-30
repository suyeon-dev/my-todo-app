import { combineReducers } from 'redux';
import { todoReducer } from '../modules/todoReducer';

// 전체 store 총괄
const rootReducer = combineReducers({
  todo: todoReducer,

  // 만약 전역 관리 state가 추가되면 이곳에도 추가
  // Key값: useSelector를 이용해 가져오는 값
});

// src/index.tsx가 쓸 수 있도록 내보내기
export default rootReducer;
