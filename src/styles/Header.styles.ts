import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 2.5rem;
`;

export const TodayContainerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// 날짜
export const DateStyle = styled.div`
  font-weight: 700;
  font-size: 60px;
`;

// 월, 연도 박스
export const MonthBoxStyle = styled.div`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;

// 요일
export const DayStyle = styled.div`
  font-weight: 700;
  font-size: 52px;
`;

// 시간
export const TimeStyle = styled.div`
  font-weight: 700;
  font-size: 48px;
`;
