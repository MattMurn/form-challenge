# Halo Code Challenge

Your objective, if you so choose to accept, is to build a form as per the design, here:

https://www.figma.com/file/21Pa6ogTuT1dxQkZjwDtfq/Interview-Challenge?node-id=0%3A1

> NOTE: You will need to match the design. Please keep in mind spacing, typography, etc.

This form will be used for the fictional company Blerg & FooBar as a way to submit feedback to a department. It will be used across multiple pages so some fields will need to be customizable.

Tech Requirements:

1. Code needs to be written in TypeScript + React 16 using functional components.
2. Accessability is very important to the company. Please make sure that the form is accessable.

> NOTE: You do not have to setup TypeScript. It has already been added, and should just work with the code you write.

> NOTE: material-ui/core and react-hook-form have been added as dependencies to this coding challenge. Feel free to use them if you want, but you do not have to.

The following AC should be met:

1. Firstname, lastname, email, and message should all be made required. Department is optional.

- Fields should be highlighted red when invalid and should have a message under them stating they are required.
- Required fields should only enter the invalid state if they are dirty and the user removes the value.
- You should have some indication which fields are required.

2. Submit button is disabled until all required fields are filled in.
3. The title in the header needs to be easily changeable.
4. The description in the header needs to be easily changeable.
5. Clicking the submit button on the first step should bring you to the next step.
6. Clicking the back button on the second step should bring you back to the first.

- The user's form changes should be persisted.
- The back button should only be visible on the second step.

7. Clicking done on the second step should bring you to the following location https://media.giphy.com/media/2nwTda1ewYssE/giphy.gif