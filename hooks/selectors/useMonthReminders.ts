import {useQuery} from "@apollo/client";
import {RemindersQuery} from "../../graphql/queries";
import {useAppContext} from "../../contexts/AppContext";
import {useMemo} from "react";

const useMonthReminders = (month?: Date) => {
    const {selectedMonth} = useAppContext();

    const _selectedMonth = useMemo(() =>
            month || selectedMonth
        , [month, selectedMonth]);

    return useQuery(RemindersQuery, {
        skip: !_selectedMonth,
        variables: {
            input: {
                date: _selectedMonth?.getTime()
            }
        },
    });
};

export default useMonthReminders;