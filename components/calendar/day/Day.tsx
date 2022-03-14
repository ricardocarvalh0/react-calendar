import styles from '../calendar.module.css';
import DayHeader from "./DayHeader";
import {useModalContext} from "../../../contexts/ModalContext";
import ReminderList from "../../reminder/ReminderList";

const Day = ({date, disabled, showDayOfWeek, maxReminders}: {
    date: Date, disabled: boolean, showDayOfWeek: boolean, maxReminders: number | null
}) => {
    const {openCreateModal, openEditModal} = useModalContext();

    return (
        <div
            className={`${styles.day} ${disabled ? styles.disabled : null}`}
            onClick={() => openCreateModal(date)}
        >
            <DayHeader date={date} showDayOfWeek={showDayOfWeek}/>
            <ReminderList
                date={date}
                maxReminders={maxReminders}
                onReminderClick={(reminder) => openEditModal(reminder)}
            />
        </div>
    );
};

export default Day;