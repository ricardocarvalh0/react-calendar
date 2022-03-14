import gql from "graphql-tag";

export const CreateReminderMutation = gql`
    mutation CreateReminderMutation($input: CreateRemindersInput) {
        createReminder(input: $input) {
            id
            text
            date
            color
        }
    }
`

export const UpdateReminderMutation = gql`
    mutation UpdateReminderMutation($input: UpdateRemindersInput) {
        updateReminder(input: $input) {
            id
            text
            date
            color
        }
    }
`

export const DeleteReminderMutation = gql`
    mutation DeleteReminderMutation($input: DeleteRemindersInput) {
        deleteReminder(input: $input)
    }
`

export default {};