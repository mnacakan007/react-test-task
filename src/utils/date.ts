import dayjs, {Dayjs} from "dayjs";

export const formatDate = (date: Date): string => {
    if (date) {
        const year = date.getFullYear();
        const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
        return `${year}.${month}.${day}`
    }
   return '';
}

export const formatDateJs = (date: Dayjs): Date => {
    return dayjs(date).toDate();
}
