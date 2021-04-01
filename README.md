# Sequelize Validations

### Overview
- What is a validation?
- What's the difference between a validation and a constraint?
- We'll only be focusing on validations in this course

### Set up a Sequelize project and add a Users table 
See https://github.com/SEI-SEA-1-25/intro-to-sequelize for steps on how to set up a Sequelize project

### Plan what the data in our columns should look like
- What columns should go into a Users table? 
- What validations should we apply to these data?

### Pick which validations you need
There is a complete list of Sequelize validations at https://sequelize.org/master/manual/validations-and-constraints.html#per-attribute-validations. Look through the list and determine which validations apply to the following data that we'll be inputting into our table.

- first name 
  - not null
  - allowNull must be top level
  - "Joel" should work, null should not work
- last name 
  - not null
  - allowNull must be top level
  - "Hughes" should work, null should not work
- user name 
  - min length, max length
  - must be unique - top level!
- email 
  - not null and is email
- phone number 
  - custom OR use built in, i.e. must be all numbers and length=10
- age 
  - is numeric
  - has a minimum
  - has a maximum
- shirt size 
  - must be "S" or "M" or "L"

Follow this workflow:

- Determine what a valid input should be (i.e. age should be 25 but not "twenty-five")
- Run dbTest.js (node dbTest.js) and to see that without adding a validation, an invalid record is added
- Figure out what code to add to model (user.js) to catch that invalid data before it is entered into database
- Modify the model to include correct validation code
- Try again to enter invalid data to ensure that the error is properly caught (node dbTest.js)
- Intentionally break a data item in your model and run dbTest.js (i.e. take the @ sign out of joel.hughes@gmail.com). Make sure dbTest.js throws an error.
- Put @ sign back in valid state, run dbTest.js and make sure the error goes away.
- Move to next data item (i.e. shirt size) and repeat these steps

Fuller explanations on Sequelize validations and constraints is at https://sequelize.org/master/manual/validations-and-constraints.html


