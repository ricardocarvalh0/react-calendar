import React, {useCallback} from "react";
import {IReminder} from "../../types";
import styles from '../calendar/calendar.module.css';
import format from "date-fns/format";

const Reminder = ({reminder, hideTime, onClick}: { reminder: IReminder, hideTime?: boolean, onClick: () => void }) => {
    const {text, color, date} = reminder;

    const handleClick = useCallback((e) => {
        e.stopPropagation();
        onClick();
    }, [onClick]);

    const timeDescription = hideTime ? '': `${format(date, 'HH:mm')} `;
    return (
        <div
            className={styles.reminder}
            style={{backgroundColor: color}}
            onClick={handleClick}
        >
            {timeDescription}{text}
        </div>
    );
};

export default Reminder;