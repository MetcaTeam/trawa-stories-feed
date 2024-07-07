export const getCurrentMonthAndYear = (): string => {
    const date = new Date();
    const monthNames = [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month}, ${year}`;
  };
  