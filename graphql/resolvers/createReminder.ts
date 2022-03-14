import {IReminder} from "../../types";
import {Request} from "express";
import reminderStore from '../../src/backendStore';

interface CreateReminderInput {
    input: IReminder
}

export const createReminder = async (
    _parent: never,
    {input}: CreateReminderInput,
    req: Request,
): Promise<IReminder> => {
    reminderStore.add(input);
    return input;
}

export default createReminder;