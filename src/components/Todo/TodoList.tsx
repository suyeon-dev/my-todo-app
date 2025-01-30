import { useDispatch, useSelector } from 'react-redux';
import {
  CheckButtonStyle,
  EditButtonStyle,
  TodoListStyle,
} from '../../styles/MainPage.styles';
import { done } from '../../modules/todoReducer';
import { RootStateInterface, TodoInterface } from '../../types/todo.types';
import { AppDispatch } from '../..';

export default function TodoList() {
  // Redux 상태에서 Todolist 가져오기
  // [*] useSelector: store에 저장된 state 가져오기
  const list = useSelector(
    (state: RootStateInterface) => state.todo.todoList || []
  ).filter((todo: TodoInterface) => !todo.done);
  console.log('TodoList 컴포넌트 list', list);

  // (todo) 이모티콘 선택기

  // dispatch
  const dispatch = useDispatch<AppDispatch>();

  return (
    <TodoListStyle>
      <h1>할 일 목록</h1>

      <ul>
        {list.map((el: TodoInterface) => {
          return (
            <li key={el.id}>
              <CheckButtonStyle
                onClick={() => {
                  dispatch(done(el.id));
                }}
              ></CheckButtonStyle>
              <span>{el.text}</span>
              <EditButtonStyle>수정</EditButtonStyle>
              <EditButtonStyle>삭제</EditButtonStyle>
            </li>
          );
        })}
      </ul>
    </TodoListStyle>
  );
}
