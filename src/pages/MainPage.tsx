import React from 'react';
import Header from '../components/Header';
import ProfileContainer from '../components/Todo/ProfileContainer';
import ListContainer from '../components/Todo/ListContainer';
import { MainContainerStyle } from '../styles/MainPage.styles';
import TodoEditor from '../components/Todo/TodoEditor';

export default function MainPage() {
  return (
    <MainContainerStyle>
      <Header />
      <ProfileContainer />
      <ListContainer />
      <TodoEditor />
    </MainContainerStyle>
  );
}
