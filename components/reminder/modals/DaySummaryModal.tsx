import {useModalContext} from "../../../contexts/ModalContext";
import DaySummary from "../../calendar/day/DaySummary";
import AppModal from "../../common/AppModal";

const DeleteReminderModal = () => {
    const {showSummaryModal, closeSummaryModal, selectedDay} = useModalContext();

    if (!selectedDay) {
        return null;
    }

    return (
        <AppModal show={showSummaryModal} handleClose={closeSummaryModal}>
            <DaySummary date={selectedDay}/>
        </AppModal>
    )
}

export default DeleteReminderModal;