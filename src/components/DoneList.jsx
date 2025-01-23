import React from 'react';
import { useSelector } from 'react-redux';
import { DoneListStyle } from '../styles/MainPage.styles';

export default function DoneList() {
  const list = useSelector((state) => state.todo.list).filter(
    (todo) => todo.done === true
  );
  return (
    <DoneListStyle>
      <h1>완료 목록</h1>
      <ul>
        {list.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </DoneListStyle>
  );
}
