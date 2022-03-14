import ReminderForm from "../ReminderForm";
import {useCallback} from "react";
import {IReminder} from "../../../types";
import {useModalContext} from "../../../contexts/ModalContext";
import AppModal from "../../common/AppModal";
import useCreateReminderMutation from "../../../hooks/mutations/useCreateReminderMutation";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import {v4} from "uuid";

const withCurrentHourAndMinutes = (d: Date): Date => {
    const now = new Date();
    return setMinutes(setHours(d, now.getHours()), now.getMinutes());
}

const CreateReminderModal = () => {
    const {showCreateModal, closeCreateModal, selectedDay} = useModalContext();

    const [
        createReminderMutation, {loading: creatingReminder, error: createReminderError, reset}
    ] = useCreateReminderMutation();

    const createReminder = useCallback(async (payload: IReminder) => {
        reset();
        await createReminderMutation({
            variables: {
                input: {
                    id: v4(),
                    ...payload
                }
            }
        });
        closeCreateModal();
    },[]);

    const handleClose = useCallback(() => {
        reset();
        closeCreateModal();
    }, [reset, closeCreateModal])

    if (!selectedDay) {
        return null;
    }

    return (
        <AppModal
            title="Create Reminder"
            show={showCreateModal}
            handleClose={handleClose}
        >
            <ReminderForm
                reminder={{
                    date: withCurrentHourAndMinutes(selectedDay).getTime(),
                    text: '',
                }}
                isLoading={creatingReminder}
                errorMessage={createReminderError?.message}
                onSubmit={createReminder}
            />
        </AppModal>
    )
}

export default CreateReminderModal;