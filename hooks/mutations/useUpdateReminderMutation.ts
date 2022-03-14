import {useMutation} from "@apollo/client";
import {UpdateReminderMutation} from "../../graphql/mutations";
import {RemindersQuery} from "../../graphql/queries";
import {useAppContext} from "../../contexts/AppContext";
import useMonthReminders from "../selectors/useMonthReminders";
import {IReminder} from "../../types";

const useUpdateReminderMutation = () => {
    const {selectedMonth} = useAppContext();
    const {data: remindersResult} = useMonthReminders();
    return useMutation(UpdateReminderMutation, {
        update: (cache, {data}) => {
            const {updateReminder: updatedReminder} = data
            cache.writeQuery({
                query: RemindersQuery,
                data: {
                    getReminders: remindersResult.getReminders.map((reminder: IReminder) => {
                        return reminder.id === updatedReminder.id ? updatedReminder : reminder
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

export default useUpdateReminderMutation;