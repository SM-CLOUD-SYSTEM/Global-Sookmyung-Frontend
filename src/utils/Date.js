class DateFormatter {
  static formatMonthDayKR(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}월 ${day}일`;
  }
}

export default DateFormatter;
