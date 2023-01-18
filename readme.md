# Seek Coding Exercise

## Running Locally
To run locally use the command `yarn dev`

## Running Tests
To run tests use the command `yarn test`

## This Project
* Implement a linter and code formatter to improve code readability and maintainability.
* Built rudimentary UI to solve problem
* Encapsulated business logic into a custom hook (however I would recommend moving this logic serverside).
* Use Vitest for unit testing to ensure the reliability of the application.
* Implement TypeScript to improve the developer experience and catch errors early in the development process.

## Further Improvements required

### Front-end
User Interface Improvements
1. Implement visual enhancements to improve the overall aesthetics of the user interface.
2. Update the display of retail prices to reflect any applicable discounts.
3. Incorporate a visual element to clearly indicate discounts applied to the cart.
4. Create a consistent design theme using Vanilla Extract.
5. Consolidate and streamline CSS files to improve maintainability.
6. Utilize CSS variables to facilitate scalable and efficient layout updates.
7. Improve responsive design to ensure optimal viewing experience across different screen sizes.

Error Handling and Accessibility
1. Implement a React Error Boundary for improved error handling.
2. Continuously evaluate and improve accessibility compliance.

Testing
1. Utilize Playwright for End-to-End testing and increase test coverage.
2. Add further unit tests

Performance Optimization
1. Consider implementing server-side rendering for improved SEO.



### Back-end

Code Quality and Maintainability
1. Implement the builder pattern within classes for improved organization and maintainability.
2. Utilize a value object to handle currency operations in a consistent manner. The current implementation has rounding issues
3. Consider refactoring the logic within the domain directory to improve maintainability and align with best practices and business requirements.

Testing
1. Increase test coverage to ensure the reliability and robustness of the system
