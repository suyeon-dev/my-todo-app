import React from 'react';
import { useSelector } from 'react-redux';
import { DoneListStyle } from '../../styles/MainPage.styles';
import { RootStateInterface, TodoInterface } from '../../types/todo.types';

export default function DoneList() {
  const list = useSelector(
    (state: RootStateInterface) => state.todo.todoList
  ).filter((todo: TodoInterface) => todo.done === true);
  return (
    <DoneListStyle>
      <h1>완료 목록</h1>
      <ul>
        {list.map((el: TodoInterface) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </DoneListStyle>
  );
}
