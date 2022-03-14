import {useMutation} from "@apollo/client";
import {CreateReminderMutation} from "../../graphql/mutations";
import {RemindersQuery} from "../../graphql/queries";
import {useAppContext} from "../../contexts/AppContext";
import useMonthReminders from "../selectors/useMonthReminders";

const useCreateReminderMutation = () => {
    const {selectedMonth} = useAppContext();
    const {data: remindersResult} = useMonthReminders();
    return useMutation(CreateReminderMutation, {
        update: (cache, {data}) => {
            cache.writeQuery({
                query: RemindersQuery,
                data: {
                    getReminders: [...remindersResult.getReminders, data.createReminder]
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

export default useCreateReminderMutation;