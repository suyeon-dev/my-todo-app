import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import {
  AddButtonStyle,
  AddInputStyle,
  TodoEditorStyle,
} from '../styles/MainPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../modules/todoReducer';

export default function TodoEditor() {
  // useSelector(): store의 state 가져오기
  let list = useSelector((state) => state.todo.list);

  // dispatch 함수 생성
  const dispatch = useDispatch();
  const inputRef = useRef();

  // const createTodo = () => {
  //   dispatch((create({id: list.length + 1})))
  // }

  useEffect(() => {
    inputRef.current.focus();
  });

  const enterTodo = (e) => {
    // console.log('e.key', e.key);
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter') {
      dispatch(create({ id: list.length + 1, text: inputRef.current.value }));
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <TodoEditorStyle>
        <AddInputStyle
          type='text'
          alt='할 일을 입력해주세요'
          ref={inputRef}
          onKeyDown={enterTodo}
        />
        {/* 할 일 추가 버튼 */}
        <AddButtonStyle
          onClick={() => {
            // dispatch 함수로 action을 store에 전달
            dispatch(
              create({ id: list.length + 1, text: inputRef.current.value })
            );
            inputRef.current.value = '';
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </AddButtonStyle>
      </TodoEditorStyle>
    </>
  );
}
