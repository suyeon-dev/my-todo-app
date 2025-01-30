import React from 'react';
import {
  DateStyle,
  DayStyle,
  HeaderStyle,
  MonthBoxStyle,
  TimeStyle,
  TodayContainerStyle,
} from '../styles/Header.styles';

export default function Header() {
  return (
    // (todo) 하드코딩 추후 수정
    <HeaderStyle>
      <TodayContainerStyle>
        <DateStyle>23</DateStyle>
        <MonthBoxStyle>
          <div>Jan</div>
          <div>2025</div>
        </MonthBoxStyle>
        <DayStyle>Thu</DayStyle>
      </TodayContainerStyle>
      <TimeStyle>01:01 PM</TimeStyle>
    </HeaderStyle>
  );
}
