import CreateReminderModal from "../reminder/modals/CreateReminderModal";
import EditReminderModal from "../reminder/modals/EditReminderModal";
import CalendarControls from "./CalendarControls";
import ReminderSummaryModal from "../reminder/modals/DaySummaryModal";
import CalendarBody from "./CalendarBody";
import {useEffect, useState} from "react";

const Calendar = () => {
    const [showChild, setShowChild] = useState(false);

    // Wait until after client-side hydration to show
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    return (
        <>
            <CalendarControls/>
            <CalendarBody/>
            <CreateReminderModal/>
            <EditReminderModal/>
            <ReminderSummaryModal/>
        </>
    );
};

export default Calendar;