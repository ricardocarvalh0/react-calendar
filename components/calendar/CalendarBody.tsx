import {useMemo} from "react";
import Day from "./day/Day";
import withContainerSizeWatcher, {ContainerSize} from "../../hoc/withContainerSizeWatcher";
import useCurrentCalendarDays from "../../hooks/selectors/useCurrentCalendarDays";

const HEADER_HEIGHT = 200;
const REMINDER_HEIGHT = 140;

const CalendarBody = ({containerSize}: { containerSize: ContainerSize }) => {
    const {calendarDays} = useCurrentCalendarDays();

    const maxReminders = useMemo(() => {
        if (!containerSize?.height) {
            return null;
        }
        return Math.max(
            Math.round((containerSize.height - HEADER_HEIGHT) / REMINDER_HEIGHT) - 1,
            0
        );
    }, [containerSize?.height]);

    return (
        <>
            {calendarDays.map(({date, isCurrentMonth}, idx) => (
                <Day
                    key={date.toISOString()}
                    date={date}
                    disabled={!isCurrentMonth}
                    showDayOfWeek={idx <= 6} // first 7 days of the calendar
                    maxReminders={maxReminders}
                />
            ))}
        </>
    );
};

export default withContainerSizeWatcher(CalendarBody);