# GitHub Copilot Instructions for Doctor Portfolio Project

## Project Overview
This is a React application built with Vite to showcase a doctor's professional portfolio. The application allows doctors to present their professional experience, specializations, education, and patient testimonials.

## Technical Stack
- React 19
- Vite 6
- Node.js 20.11.0 (as specified in .nvmrc)
- Modern CSS (using CSS modules)

## Code Style Guidelines
1. Use functional components with React Hooks
2. Follow ESLint configuration rules
3. Use named exports for components
4. Implement responsive design principles
5. Implement proper error handling and loading states
6. Use semantic HTML elements

## Project Structure
- `/src/components/` - Reusable UI components
- `/src/pages/` - Page-level components
- `/src/hooks/` - Custom React hooks
- `/src/assets/` - Images, icons, and other static assets
- `/src/utils/` - Utility functions
- `/src/styles/` - Global styles and variables

## Feature Requirements
1. Home page with doctor's introduction
2. About page with professional background
3. Specializations section
4. Education and credentials section
5. Patient testimonials
6. Contact information
7. Appointment booking form
8. Responsive design for mobile and desktop

## Naming Conventions
- React Components: PascalCase (e.g., `ProfileCard.jsx`)
- Hooks: camelCase prefixed with 'use' (e.g., `useFormValidation.js`)
- CSS Module Files: Same name as the component with .module.css extension (e.g., `ProfileCard.module.css`)
- Utility Functions: camelCase (e.g., `formatDate.js`)
