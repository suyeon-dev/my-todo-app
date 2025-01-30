import { TodoInterface, TodoStateInterface } from '../types/todo.types';

// 초기 state 설정
const initialState: TodoStateInterface = {
  todoList: [
    { id: 0, text: '리액트 공부하기', done: false },
    { id: 1, text: '척추의 요정이 말합니다! 척추 펴기!', done: false },
    { id: 2, text: '운동하기', done: false },
  ],
};

// action type 설정: 문자열 상수화
const CREATE = 'todo/CREATE' as const;
const DONE = 'todo/DONE' as const;

// todo ID 전역 관리
const count = initialState.todoList.length; //3
initialState['nextID'] = count;

// action 생성 함수: 컴포넌트 내부에서 사용 -> action 인터페이스 정의
interface CreateAction {
  type: typeof CREATE;
  payload: TodoInterface;
}

interface DoneAction {
  type: typeof DONE;
  id: number;
}

type TodoActionTypes = CreateAction | DoneAction;

// action 생성 함수
export const create = (payload: TodoInterface): CreateAction => ({
  type: CREATE,
  payload,
});

export const done = (id: number): DoneAction => ({
  type: DONE,
  id,
});

// reducer 함수 : action 타입에 따라 Store의 상태 업데이트 하는 함수
// - 전달받은 action의 Type을 기준으로 상태 변경 & 필요 시 Payload 사용
export const todoReducer = (
  state: TodoStateInterface = initialState,
  action: TodoActionTypes
): TodoStateInterface => {
  console.log('todo action:', action);

  switch (action.type) {
    case CREATE:
      return {
        ...state,
        todoList: state.todoList.concat({
          id: action.payload.id, //payload의 데이터를 상태에 추가
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          // 기존 state의 id === 클릭된 li의 id
          if (todo.id === action.id) {
            return {
              ...todo, // done을 제외한 text, id 값 유지하기 위한 연산
              done: true, //done 값 덮어쓰기
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

// store/ index.js에서 쓰기
