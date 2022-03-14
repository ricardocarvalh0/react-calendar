import getReminders from "../graphql/resolvers/getReminders";
import createReminder from "../graphql/resolvers/createReminder";
import updateReminder from "../graphql/resolvers/updateReminder";
import deleteReminder from "../graphql/resolvers/deleteReminder";

export const resolvers = {
  Query: {
    getReminders
  },
  Mutation: {
    createReminder,
    updateReminder,
    deleteReminder
  }
}
