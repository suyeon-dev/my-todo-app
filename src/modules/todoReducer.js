// 초기 state 설정
const initialState = {
  list: [
    { id: 0, text: '리액트 공부하기', done: false },
    { id: 1, text: '척추의 요정이 말합니다! 척추 펴기!', done: false },
    { id: 2, text: '운동하기', done: false },
  ],
};

// action type 설정: 문자열 상수화
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

// todo ID 전역 관리
const count = initialState.list.length; //3
initialState['nextID'] = count;

// action 생성 함수: 컴포넌트 내부에서 사용
export const create = (payload) => {
  return {
    type: CREATE,
    payload, // action과 함께 store로 전달되는 추가 데이터
  };
};

export const done = (id) => {
  return {
    type: DONE,
    id,
  };
};

// reducer 함수 : action 타입에 따라 Store의 상태 업데이트 하는 함수
// - 전달받은 action의 Type을 기준으로 상태 변경 & 필요 시 Payload 사용
export const todoReducer = (state = initialState, action) => {
  console.log('todo action:', action);

  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id, //payload의 데이터를 상태에 추가
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((todo) => {
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
