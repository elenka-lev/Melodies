# 🎧 Melodies Frontend (React + Vite)

A modern, high-performance music streaming interface. Built with React and Vite, this application provides a seamless experience for discovering music, managing favorites, and interacting with the Deezer library.

## ✨ Key Features

* **Dynamic Music Discovery**: Explore tracks by genres and top global charts.
* **Hybrid Search System**: Integrated search that identifies both tracks and the "Best Match" artist profile.
* **Global Auth State**: Centralized authentication management (Email/Password & Google OAuth).
* **Smart Favoriting**: Real-time "Like" system with instant UI updates via React Query.
* **Audio Integration**: Interactive audio player with track previews.
* **Persistent Session**: Automatic user re-authentication using JWT and LocalStorage.

## 🛠 Tech Stack

* **React 18** — Component-based UI library.
* **Vite** — Next-generation frontend tooling for fast development.
* **TanStack Query (React Query)** — Data fetching and state synchronization.
* **React Router 6** — Declarative routing for navigation.
* **Context API** — Global state management for auth and modals.
* **CSS Modules** — Scoped and maintainable styling.



## 🏗 Key Architecture

* **AuthProvider**: Manages the global security context, handling tokens and modal states.
* **Custom Hooks**: specialized hooks like `useSearchQuery` for clean data fetching.
* **Reusable UI**: Components like `AlbumsTrackList` and `GenresList` used across different pages.

## 🚀 Installation & Launch

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Launch the development server:**
    ```bash
    npm run dev
    ```
    *The app will be available at: `http://localhost:5173`*

3.  **Backend Connection:**
    Ensure your backend server is running (usually on port 3000/5000) for the API to work correctly.