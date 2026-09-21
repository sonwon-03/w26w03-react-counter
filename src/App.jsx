import React, { useState } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 해당 월의 첫 번째 날 요일과 마지막 날짜 구하기
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // 이전 달로 이동
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // 다음 달로 이동
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // 달력 그리드 생성용 배열
  const days = [];
  // 빈 칸 채우기 (첫 요일 전까지)
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }
  // 날짜 채우기
  for (let day = 1; day <= lastDate; day++) {
    const isToday =
      new Date().toDateString() === new Date(year, month, day).toDateString();
    days.push(
      <div key={day} className={`calendar-day ${isToday ? 'today' : ''}`}>
        {day}
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{year}년 {month + 1}월</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-weekdays">
        <div>일</div><div>월</div><div>화</div><div>수</div><div>목</div><div>금</div><div>토</div>
      </div>
      <div className="calendar-grid">
        {days}
      </div>
    </div>
  );
}

export default App;