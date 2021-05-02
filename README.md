## Instructions

The goal of this exercise is to create a demo calendar application using React & Redux. We strongly recommend create-react-app to make the bootstrapping of your application really easy.

Please don't use a `calendar` library, we would like to see your own calendar logic.


### The Task

You should start by rendering a single month view of a calendar for the current month – along with the lines of the `calendar` image in this project.


### Features & Requirements:

* Ability to add a new “reminder” (max 30 chars) for a user entered day and time.
* Display reminders on the calendar view in the correct time order.
* Allow the user to select a color when creating a reminder and display it appropriately.
* Properly handle overflow when multiple reminders appear on the same date.
* Ability to edit reminders – including changing text, day and time & color.
* Ability to delete reminders.
* Expand the calendar to support more than the current month.

### Notes:

* The data should be retained across different page views, but it’s not necessary to persist it beyond a browser refresh.
* Here at Codelitt we make products for humans, this means that we will evaluate the UX of the exercise.

## Evaluation

| Functionality    |                                                            | Possible Points |
|------------------|------------------------------------------------------------|-----------------|
|                  | Matching the proposed requirements                         | 25              |
|                  | Not displaying console errors                              | 10              |
|                  | Design                                                     | 5               |
| **Code Quality** |                                                            | --              |
|                  | Code formatting, readability, maintainability, etc         | 10              |
|                  | Folders and packages structure                             | 5               |
|                  | Separation of responsibilities (components and containers) | 10              |
|                  | Componentization                                           | 15              |
| **Testing**      |                                                            | --              |
|                  | Unit tests - Components                                    | 10              |
|                  | Unit tests - Redux                                         | 10              |         |



## F.A.Q.

### Is it necessary to connect to a backend?
No, this is a simply frontend exercise.

### How do you evaluate the exercise?
For every exercise we have two senior frontend engineers from our team reviewing the code and the functionality and giving a score for each line item as shown in the previous table.

### How can I deliver the exercise?
To deliver the exercise, you should clone this repository and work on a new branch. When you'll consider it completed, just push the branch and open a Merge Request.

### Will I have access to the evaluation?
By default we only send the result, however you can feel free to request the full evaluation and we will share it with you as well as the final score.