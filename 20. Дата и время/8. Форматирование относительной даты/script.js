"use strict";

alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
  let difSecond = (new Date() - date) / 1000;

  let messeges = {
    'lessSecond': 'прямо сейчас',
    'lessMinute': `${difSecond} сек. назад`,
    'lessHour': `${difSecond / 60} мин. назад`,
    // 'default': messeges.formatter(date.getDate()),
    //'default': `${this.formatter(date.getDate())}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
    formatter (numeric) {
      return (numeric < 10) ? `0${numeric}` : `${numeric}`
    }
  };

  if(difSecond <= 1) {
    return messeges.lessSecond
  }
  else if(difSecond <= 60) {
    return messeges.lessMinute
  }
  else if(difSecond <= 3600) {
    return messeges.lessHour
  }
  else {
    return `${messeges.formatter(date.getDate())}.${messeges.formatter(date.getMonth() + 1)}.${messeges.formatter(date.getFullYear()).slice(-2)} ${date.getHours()}:${date.getMinutes()}`
  }
}
