# MedExpress Genovia - Allergy Consultation

This project is a React-based web application for MedExpress Genovia, allowing customers to complete a consultation for Genovian Pear allergy treatment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 14.0.0 or later recommended)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/medexpress-genovia.git
   ```

2. Navigate to the project directory:

   ```
   cd medexpress-genovia
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server:
`npm start`

The page will be available at `http://localhost:3000/consultation`.

## Running Tests

To run the test suite:
`npm test`

## Project Structure

- `src/components`: Contains reusable React components (Header, Footer)
- `src/pages`: Contains page-level components (Consultation)
- `src/context`: Contains the ConsultationContext for state management
- `src/utils`: Utility functions, including API simulation
- `public`: Public assets and HTML template

## Design Decisions and Trade-offs

1. **State Management**: The application uses React's Context API (ConsultationContext) for managing the consultation state. This provides a good balance between simplicity and the ability to share state across components without prop drilling.

2. **Styling**: SCSS is used for styling, allowing for more powerful CSS features like nesting and variables. The styles are organized in a single App.scss file for this small project, but could be split into component-specific files as the project grows.

3. **TypeScript**: The project uses TypeScript for type safety and improved developer experience. This adds a bit of initial overhead but pays off in maintainability and reduced runtime errors.

4. **API Simulation**: The `submitConsultation` function in `utils/api.ts` currently just logs to the console. In a real-world scenario, this would be replaced with actual API calls.

5. **Responsive Design**: The application is designed to be responsive, with styles adapting to different screen sizes.

## Testing Strategy

The project uses Jest and React Testing Library for testing. Key test files include:

- `Consultation.test.tsx`: Tests the consultation flow and user interactions.
- `api.test.tsx`: Tests the simulated API calls.

## Future Improvements

- Add form validation for more robust data collection
- Implement error handling for API calls
- Add more tests
- Enhance accessibility features
- Implement a more sophisticated UI design

## Notes

- This project was bootstrapped with Create React App.
- The consultation questions are hardcoded for this MVP. In a production environment, these would likely be fetched from an API.
- The project uses a simulated API call for data submission. In a real-world scenario, proper error handling and loading states would be implemented.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
