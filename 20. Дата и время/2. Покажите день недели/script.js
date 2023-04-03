"use strict";

let date = new Date(2012, 0, 3); // 3 января 2012 года
alert(getWeekDay(date)); // нужно вывести "ВТ"

function getWeekDay(date) {
  let weekDayNumber = date.getDay();
  let weekDayName = {
    '0': 'ВС',
    '1': 'ПН',
    '2': 'ВТ',
    '3': 'СР',
    '4': 'ЧТ',
    '5': 'ПТ',
    '6': 'СБ',
  }

  return weekDayName[weekDayNumber]
}
