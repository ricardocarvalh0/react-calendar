import DayHeader from "./DayHeader";
import {useModalContext} from "../../../contexts/ModalContext";
import ReminderList from "../../reminder/ReminderList";

const DaySummary = ({date}: {
    date: Date
}) => {
    const {openEditModal} = useModalContext();

    return (
        <div className="m-2">
            <DayHeader date={date} showDayOfWeek/>
            <ReminderList
                date={date}
                onReminderClick={(reminder) => openEditModal(reminder)}
            />
        </div>
    );
};

export default DaySummary;