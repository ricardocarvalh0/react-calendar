import gql from "graphql-tag";

export const RemindersQuery = gql`
    query RemindersQuery($input: GetRemindersInput) {
        getReminders(input: $input) {
            id
            text
            date
            color
        }
    }
`

export default {};