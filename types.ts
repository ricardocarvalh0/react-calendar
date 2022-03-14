export interface IUser {
    id: string | number;
    name: string;
    status: string;
}

export interface IReminder {
    id?: string | number;
    text: string;
    color?: string;
    date: number;
}

export interface ReminderFormState {
    date: string;
    time: string;
    text: string;
    color: string;
}

export default {};