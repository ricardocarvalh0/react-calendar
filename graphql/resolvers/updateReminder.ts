import {Request} from "express";
import {IReminder} from "../../types";
import reminderStore from '../../src/backendStore';

interface UpdateReminderInput {
    input: IReminder
}

export const updateReminder = async (
    _parent: never,
    {input}: UpdateReminderInput,
    req: Request,
): Promise<IReminder> => {
    reminderStore.update(input);
    return input;
}

export default updateReminder;