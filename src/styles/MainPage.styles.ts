import styled from 'styled-components';

export const MainContainerStyle = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  height: 800px;
  width: 900px;
  background-color: white;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  position: relative;
`;

/* ----------- 프로필 영역 ----------- */
export const ProfileContainerStyle = styled.div`
  background-color: white;
  height: 60px;
  display: flex;
  justify-content: center;
`;

/* ----------- 투두리스트 영역 ----------- */
// (할 일 목록 + 완료된 목록) 전체 영역
export const TodoContainerStyle = styled.main`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 3rem;
  gap: 5rem;
`;

// 할 일 목록
export const TodoListStyle = styled.section`
  flex: 1;
`;

// 완료 목록
export const DoneListStyle = styled.section`
  flex: 1;
`;

/* ----------- 투두 아이템 -----------  */

// 완료 버튼
export const CheckButtonStyle = styled.button`
  background-color: white;
  width: 28px;
  height: 28px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-right: 10px;

  // 임시 스타일링
  &:hover {
    background-color: lightgray;
  }
`;

// 수정 및 삭제 버튼
export const EditButtonStyle = styled.button`
  background-color: #f5f5f7;
  border-radius: 10px;

  &:hover {
    background-color: lightgray;
  }
`;

/* ----------- 할 일 추가 영역 (Todo Editor 컴포넌트) ----------- */
export const TodoEditorStyle = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;

  position: absolute;
  bottom: 1rem;
  width: 900px;
`;

export const AddInputStyle = styled.input`
  width: 90%;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

// 할 일 추가 버튼
export const AddButtonStyle = styled.button`
  background-color: #02c75a;
  color: white;
  border-radius: 10px;
  width: 42px;
  height: 42px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
