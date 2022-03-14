import {IReminder} from "../../types";
import {Request} from "express";
import isSameMonth from "date-fns/isSameMonth";
import reminderStore from '../../src/backendStore';

interface GetRemindersInput {
    input: {
        date: string;
    }
}

export const getReminders = async (
    _parent: never,
    {input: {date}}: GetRemindersInput,
    req: Request,
): Promise<IReminder[]> => {
    const referenceDate = new Date(date).getTime();
    return reminderStore.allReminders.filter(({date}) => isSameMonth(referenceDate, new Date(date)))
}

export default getReminders;