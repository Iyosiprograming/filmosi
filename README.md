
# Filomsi - Movie App with AI Recommendations

Filomsi is a movie discovery app built with React.js for the frontend and Firebase for the backend. It also integrates an AI-powered movie recommendation system using OpenAI to provide personalized movie suggestions based on user preferences.

## Features

- **Movie Search:** Search for movies by name, genre, or year.
- **AI Movie Recommendations:** Get personalized movie recommendations based on your preferences.
- **User Authentication:** Sign in with Firebase Authentication to save your favorite movies.
- **Responsive Design:** The app is fully responsive and works seamlessly on mobile and desktop.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Firebase (Authentication, Firestore Database, Hosting)
- **AI Recommendation:** OpenAI API

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/filomsi.git
   ```

2. Install dependencies:

   ```bash
   cd filomsi
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firebase Authentication (email/password, Google, or other methods).
   - Set up Firestore for saving user data.
   - Copy your Firebase configuration and replace the placeholders in your project (usually in a file like `firebase-config.js`).

4. Set up OpenAI:
   - Sign up for an API key at [OpenAI](https://beta.openai.com/signup/).
   - Add the API key to your environment variables (e.g., `.env` file).

5. Run the development server:

   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:3000`.

## Usage

- Sign in with your preferred method (email, Google, etc.).
- Search for movies and get AI recommendations.
- Save your favorite movies to your account for later viewing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


