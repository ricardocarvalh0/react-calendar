import format from 'date-fns/format'
import styles from '../calendar.module.css';
import {isToday} from "date-fns";

const DayHeader = ({ date, showDayOfWeek }: { date: Date, showDayOfWeek?: boolean }) => {

    return (
        <div className={styles.dayHeader}>
            {showDayOfWeek && (
                <div style={{color: 'grey'}}>{format(date, 'E')}.</div>
            )}
            <div className={`${styles.dayNumber} ${isToday(date) ? styles.today : null}`}>{date.getDate()}</div>
        </div>
    );
};

export default DayHeader;