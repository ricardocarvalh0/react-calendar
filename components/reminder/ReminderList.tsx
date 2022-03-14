import React, {useMemo} from "react";
import {IReminder} from "../../types";
import sortBy from "lodash/sortBy";
import Reminder from "./Reminder";
import {Fade, Stack} from "react-bootstrap";
import {useModalContext} from "../../contexts/ModalContext";
import useDayReminders from "../../hooks/selectors/useDayReminders";

const RemainingReminders = ({show, date, remainingAmmount}: { show: true, date: Date, remainingAmmount: number }) => {
    const {openSummaryModal} = useModalContext();

    if (!show) {
        return null;
    }

    return (
        <Reminder
            hideTime
            reminder={{
                id: 'summary',
                date: date.getTime(),
                text: `${remainingAmmount} more`,
                color: '#000000'
            }}
            onClick={() => openSummaryModal(date)}
        />
    )
}

const ReminderList = ({date, maxReminders, hideTime, onReminderClick}: {
    date: Date,
    maxReminders?: number | null,
    hideTime?: boolean,
    onReminderClick: (reminder: IReminder) => void
}) => {
    const reminders = useDayReminders(date);
    const remindersToShow = useMemo(() =>
            maxReminders ? reminders.slice(0, maxReminders) : reminders
        , [reminders, maxReminders]);

    const handleOverflow = useMemo(() =>
            maxReminders && reminders.length && (maxReminders < reminders.length)
        , [reminders, maxReminders]);

    return (
        <Fade in={!!reminders.length} timeout={10000}>
            <Stack gap={1}>
                {sortBy(remindersToShow, 'date').map((reminder: IReminder) =>
                    <Reminder
                        key={reminder.id?.toString()}
                        hideTime={hideTime}
                        reminder={reminder}
                        onClick={() => onReminderClick(reminder)}
                    />
                )}
                <RemainingReminders
                    date={date}
                    show={handleOverflow}
                    remainingAmmount={reminders.length - (maxReminders || 0)}
                />
            </Stack>
        </Fade>
    );
};

export default ReminderList;