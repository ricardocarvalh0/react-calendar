import {useMutation} from "@apollo/client";
import {DeleteReminderMutation} from "../../graphql/mutations";
import {RemindersQuery} from "../../graphql/queries";
import {useAppContext} from "../../contexts/AppContext";
import useMonthReminders from "../selectors/useMonthReminders";
import {IReminder} from "../../types";

const useDeleteReminderMutation = () => {
    const {selectedMonth} = useAppContext();
    const {data: remindersResult} = useMonthReminders();
    return useMutation(DeleteReminderMutation, {
        update: (cache, {data}) => {
            const {deleteReminder: deletedReminder} = data
            cache.writeQuery({
                query: RemindersQuery,
                data: {
                    getReminders: remindersResult.getReminders.filter((reminder: IReminder) => {
                        return reminder.id !== deletedReminder;
                    })
                },
                variables: {
                    input: {
                        date: selectedMonth?.getTime()
                    }
                }
            })
        }
    })
}

export default useDeleteReminderMutation;