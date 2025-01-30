// ------------Todo 관련 타입 정의------------
export interface TodoInterface {
  id: number;
  text: string;
  done?: boolean;
}

// ------------ Redux 관련 상태 타입 지정 ------------
// Redux State의 타입 정의
export interface TodoStateInterface {
  todoList: TodoInterface[];
  nextID?: number;
}

// RootState 타입 정의 (Redux에서 useSelector 사용 시 필요)
// - useSelector: store에 저장된 state 가져오기
export interface RootStateInterface {
  todo: TodoStateInterface;
}
