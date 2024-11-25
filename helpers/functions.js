
export const setDateTimeFormat = (locales, option, date) => new Intl.DateTimeFormat(locales, option).format(date)

export const getDateTime = (date, locales, option) => {
    const dayOfWeek = setDateTimeFormat("en-US", {weekday: "long"}, date);
    const month = setDateTimeFormat("en-US", {month: "short"}, date);
    const numberDay = date.getDate();

    return {dayOfWeek, month, numberDay};
}

export const formatVisibility = (visibility) => {
    return (visibility / 1000).toFixed(1).replace('.0', '') + 'км';
}