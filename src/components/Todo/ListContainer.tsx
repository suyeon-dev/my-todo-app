import React from 'react';

import TodoList from './TodoList';
import DoneList from './DoneList';
import { TodoContainerStyle } from '../../styles/MainPage.styles';

export default function ListContainer() {
  return (
    <>
      <TodoContainerStyle>
        <TodoList />
        <DoneList />
      </TodoContainerStyle>
    </>
  );
}
