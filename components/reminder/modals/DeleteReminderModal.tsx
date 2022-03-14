import {Form} from "react-bootstrap";
import {useCallback, useMemo} from "react";
import {useModalContext} from "../../../contexts/ModalContext";
import AppModal from "../../common/AppModal";
import useDeleteReminderMutation from "../../../hooks/mutations/useDeleteReminderMutation";

const DeleteReminderModal = () => {
    const {showDeleteModal, closeDeleteModal, selectedReminderId, closeEditModal} = useModalContext();

    const [
        deleteReminderMutation, {loading: deletingReminder, error: deleteReminderError, reset}
    ] = useDeleteReminderMutation();

    const deleteReminder = useCallback(async (id: string | number) => {
        if (!id) {
            return;
        }
        reset();
        await deleteReminderMutation({
            variables: {
                input: {
                    id,
                }
            }
        });
        closeDeleteModal();
        setTimeout(() => {
            closeEditModal();
        }, 500)
    }, []);

    const handleClose = useCallback(() => {
        reset();
        closeDeleteModal();
    }, [reset, closeDeleteModal])

    const actions = useMemo(() =>
            [
                {variant: 'secondary', label: 'Cancel', onClick: handleClose},
                {
                    variant: 'danger',
                    label: 'Delete reminder',
                    disabled: deletingReminder,
                    onClick: () => deleteReminder(selectedReminderId)
                },
            ]
        , [handleClose, deleteReminder, selectedReminderId])

    return (
        <AppModal
            title="Delete reminder"
            show={showDeleteModal}
            handleClose={handleClose}
            actions={actions}
        >
            <p>Are you sure?</p>
            {deleteReminderError?.message && (
                <Form.Text>
                    {deleteReminderError?.message}
                </Form.Text>
            )}
        </AppModal>
    )
}

export default DeleteReminderModal;