import React from 'react';
import Header from '../components/Header';
import ProfileContainer from '../components/ProfileContainer';
import ListContainer from '../components/ListContainer';
import { MainContainerStyle } from '../styles/MainPage.styles';
import TodoEditor from '../components/TodoEditor';

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
