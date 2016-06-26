# SLDS Knockout Table Form

The purpose of this demo is to allow a user to explore how Salesforce's Lightning Design System can be combined with Knockout.js to create a dynamically rendered table. Users will enter the following attributes into a web form, each causing a change to the UI in a table beneath their form.

- Date
- Number of Months
- Amount

To display the table, the user must enter at least a **Date** and **Number of Months**. The first column of the table will display the English month name starting with the date they entered. The number of rows is determined based on the Number of Months entered.

If the user decides to enter an **Amount**, then we will display this in the second column for each row of the table.

Next to the form, we will have an output that displays the sum of **Amount** in the table. This will dynamically change with the table as the user modifies the form.

## Running TODO List

- Create function to handle creation of array
- Bind array with repeat of tr elements
- Create validations on input values accepted
- Update src for Knockout to minified version

## Notes from 6/26/2016

Need to work on the how to manipulate how **Start Date** will iterate across the months displayed in the table. This is a combination of using a helper function to define the **Month YYYY** label with the changes that occur to **Number of Months**.