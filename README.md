# Submissions App

A React-based web application designed to manage and display submissions with status tracking. This project provides an intuitive user interface to visualize and handle tasks such as submissions that require specific actions, status updates, and tracking due dates.

## Demo

Live site: [Submissions App](https://soft-bombolone-9e0a2e.netlify.app/)

### Features
Data Rendering of Task Management: Track submissions with their status (e.g., Low Risk, Uncomplete, Unassigned).
Status Indicators: Color-coded statuses for quick understanding of task priority.
Scrollable List: Submissions are displayed in a scrollable list to ensure a smooth user experience with large datasets.
Pagination: Efficient navigation through multiple submission records using pagination.
React Date Picker: Integrated date selection for submissions with due dates.
Responsive Design: Optimized for viewing across different screen sizes.

### Tech Stack

### Frontend:
  React: JavaScript library for building user interfaces.
  React DatePicker: For handling date selection.
  PropTypes: For props validation in React components.
  CSS Flexbox: For responsive layout.
  
### Deployment:
  Netlify: For deploying the live application.

### Installation
Prerequisites
- Node.js and npm should be installed on your machine.

### Clone the Repository
`git clone https://github.com/AdibaAbid/submissions-app.git`
`cd submissions-app`

### Install Dependencies
`npm install`

### Start the Development Server
`npm start`
The app will be available at `http://localhost:3000.`

### Available Scripts
In the project directory, you can run:

### npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

### npm run lint
Runs the linter to check for code quality and syntax issues.
It helps ensure the code follows consistent styling and catches potential errors.

You can use this command to check and fix linting issues automatically. Make sure to run this before committing changes to ensure your code meets the project standards.


### Usage
After starting the app, you'll see a list of submissions.
- Each submission displays the From, To, Status, Customer Address, and Due Date.
- The list is scrollable within a fixed container to ensure smooth interaction with larger datasets.
- Statuses are color-coded for ease of recognition:
  Low Risk: Green
  Uncomplete: Red
  Unassigned: Yellow
-Navigate between Map & List using the Toggle controls.

