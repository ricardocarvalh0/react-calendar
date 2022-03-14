import {useMemo} from "react";
import {IReminder} from "../../types";
import {isSameDay} from "date-fns";
import useMonthReminders from "./useMonthReminders";

const useDayReminders = (day: Date) => {
    const {data} = useMonthReminders();
    return useMemo(() =>
            data?.getReminders.filter((reminder: IReminder) =>
                isSameDay(day, new Date(reminder.date))
            ) || []
        , [data]);
};

export default useDayReminders;