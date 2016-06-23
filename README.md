# SLDS Knockout Table Form

The purpose of this demo is to allow a user to explore how Salesforce's Lightning Design System can be combined with Knockout.js to create a dynamically rendered table. Users will enter the following attributes into a web form, each causing a change to the UI in a table beneath their form.

- Date
- Number of Months
- Amount

To display the table, the user must enter at least a **Date** and **Number of Months**. The first column of the table will display the English month name starting with the date they entered. The number of rows is determined based on the Number of Months entered.

If the user decides to enter an **Amount**, then we will display this in the second column for each row of the table.

Next to the form, we will have an output that displays the sum of **Amount** in the table. This will dynamically change with the table as the user modifies the form.