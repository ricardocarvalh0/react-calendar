import {IReminder} from "../types";

const REMINDERS_LIST: IReminder[] = [
    {id: 1, text: 'Reminder 1', color: '#CD5C5C', date: new Date(2022, 2, 6).getTime()},
    {id: 2, text: 'Reminder 2', color: '#CD5C5C', date: new Date(2022, 2, 6).getTime()},
    {id: 3, text: 'Reminder 3', color: '#CD5C5C', date: new Date(2022, 2, 7).getTime()},
    {id: 4, text: 'Reminder 4', color: '#CD5C5C', date: new Date(2022, 2, 7).getTime()},
    {id: 5, text: 'Reminder 5', color: '#CD5C5C', date: new Date(2022, 3, 6).getTime()},
];

class ReminderStore {
    reminders: IReminder[]

    constructor(reminderList: IReminder[]) {
        this.reminders = reminderList;
    }

    get allReminders() {
        return this.reminders;
    }

    add(reminder: IReminder): void {
        this.reminders.push(reminder);
    }

    remove(reminderId: string | number): void {
        this.reminders = this.reminders.filter(r => r.id?.toString() !== reminderId.toString());
    }

    update(reminder: IReminder): void {
        this.reminders = this.reminders.map(r =>
            r.id?.toString() === reminder.id?.toString() ? reminder : r
        );
    }
}

export default new ReminderStore(REMINDERS_LIST);