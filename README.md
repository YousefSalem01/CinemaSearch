# MovieDB Application

This project is a movie database application built with React, TypeScript, and Vite. It allows users to search for movies, view popular searches, and see detailed information about selected movies.

## Features

-   **Search Movies**: Users can search for movies using the search bar. The application fetches data from the OMDb API.
-   **Popular Searches**: Displays a list of popular movie searches for quick access.
-   **Movie Details**: View detailed information about a selected movie, including its plot, genre, director, and ratings.
-   **Responsive Design**: The application is designed to be responsive and works well on various screen sizes.

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
-   **Vite**: A fast build tool and development server for modern web projects.
-   **Material-UI**: A popular React UI framework for building responsive and accessible web applications.
-   **Framer Motion**: A library for creating animations in React applications.

## Setup and Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/CinemaSearch.git
    cd moviedb-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **Build for production**:

    ```bash
    npm run build
    ```

5. **Preview the production build**:
    ```bash
    npm run preview
    ```

## Environment Variables

To run this project, you will need to add the following environment variable to your `.env` file:

-   `VITE_OMDB_API_KEY`: Your API key for the OMDb API.

## ESLint Configuration

This project uses ESLint for code linting. The configuration can be expanded for production applications as follows:

-   Configure the top-level `parserOptions` property:

    ```js
    export default tseslint.config({
    	languageOptions: {
    		parserOptions: {
    			project: ["./tsconfig.node.json", "./tsconfig.app.json"],
    			tsconfigRootDir: import.meta.dirname,
    		},
    	},
    });
    ```

-   Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
-   Optionally add `...tseslint.configs.stylisticTypeChecked`.
-   Install `eslint-plugin-react` and update the config:

    ```js
    // eslint.config.js
    import react from "eslint-plugin-react";

    export default tseslint.config({
    	settings: { react: { version: "18.3" } },
    	plugins: {
    		react,
    	},
    	rules: {
    		...react.configs.recommended.rules,
    		...react.configs["jsx-runtime"].rules,
    	},
    });
    ```

## License

This project is licensed under the MIT License.

## Acknowledgements

-   [OMDb API](https://www.omdbapi.com/) for providing movie data.
-   [Material-UI](https://mui.com/) for the UI components.
-   [Framer Motion](https://www.framer.com/motion/) for animations.
