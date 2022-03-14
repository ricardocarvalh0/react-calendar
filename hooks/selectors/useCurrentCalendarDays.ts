import {useEffect, useMemo, useState} from "react";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import getDay from "date-fns/getDay";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import subDays from "date-fns/subDays";
import {useAppContext} from "../../contexts/AppContext";

export interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
}

const withCurrentMonthFlag = (dates: Date[], isCurrentMonth: boolean): CalendarDay[] =>
    dates.map((date: Date) => ({date, isCurrentMonth} as CalendarDay))


const useCurrentCalendarDays = () => {
    const {selectedMonth} = useAppContext();
    const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);

    useEffect(() => {
        if (selectedMonth) {
            const monthStart = startOfMonth(selectedMonth);
            const monthEnd = endOfMonth(selectedMonth);
            const dayOfWeek = getDay(monthStart);
            const allMonthDays = eachDayOfInterval({
                start: monthStart,
                end: monthEnd
            });

            const previousMonthDays = dayOfWeek > 0 ? eachDayOfInterval({
                start: subDays(monthStart, dayOfWeek),
                end: subDays(monthStart, 1)
            }) : []

            const decoratedMonthDays = withCurrentMonthFlag(allMonthDays, true);
            const decoratedPreviousDays = withCurrentMonthFlag(previousMonthDays, false);

            decoratedMonthDays.unshift(...decoratedPreviousDays)
            setCalendarDays(decoratedMonthDays);
        }
    }, [selectedMonth])


    return useMemo(() => ({
        calendarDays
    }), [calendarDays]);
};

export default useCurrentCalendarDays;