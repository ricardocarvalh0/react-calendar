import {Request} from "express";
import reminderStore from '../../src/backendStore';

interface UpdateReminderInput {
    input: { id: string | number }
}

export const updateReminder = async (
    _parent: never,
    {input}: UpdateReminderInput,
    req: Request,
): Promise<string | number> => {
    reminderStore.remove(input.id);
    return input.id;
}

export default updateReminder;