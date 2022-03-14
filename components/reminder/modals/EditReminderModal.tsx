import ReminderForm from "../ReminderForm";
import {useCallback} from "react";
import {IReminder} from "../../../types";
import {useModalContext} from "../../../contexts/ModalContext";
import DeleteReminderModal from "./DeleteReminderModal";
import AppModal from "../../common/AppModal";
import useUpdateReminderMutation from "../../../hooks/mutations/useUpdateReminderMutation";

const EditReminderModal = () => {
    const {showEditModal, closeEditModal, selectedReminder} = useModalContext();

    const [
        updateReminderMutation, {loading: updatingReminder, error: updateReminderError, reset}
    ] = useUpdateReminderMutation();

    const updateReminder = useCallback(async (payload: IReminder) => {
        if (!selectedReminder) {
            return;
        }
        reset();
        await updateReminderMutation({
            variables: {
                input: {
                    id: selectedReminder?.id,
                    ...payload
                }
            }
        });
        closeEditModal();
    }, [selectedReminder]);

    const handleClose = useCallback(() => {
        reset();
        closeEditModal();
    }, [reset, closeEditModal])

    if (!selectedReminder) {
        return null;
    }

    return (
        <AppModal
            title="Update Reminder"
            show={showEditModal}
            handleClose={handleClose}
        >
            <ReminderForm
                reminder={selectedReminder}
                isLoading={updatingReminder}
                errorMessage={updateReminderError?.message}
                onSubmit={updateReminder}
            />
            <DeleteReminderModal />
        </AppModal>
    )
}

export default EditReminderModal;