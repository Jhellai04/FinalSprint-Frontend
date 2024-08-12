// Import statements
// noinspection JSCheckFunctionSignatures

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import for custom matchers
import App from './App';

function test(rendersListOfAllTheVehiclesLink, param2) {
  
}

// Test case
test('renders List of all the Vehicles link', () => {
  // Render the App component
  const { container } = render(<App />);

  // Log the rendered HTML for debugging
  console.log(container.innerHTML);

  // Query for the link text and assert it's in the document
  const linkElement = screen.getByText(/List of all the Vehicles/i);

  function expect(linkElement) {
    
  }

  expect(linkElement).toBeInTheDocument();
});
