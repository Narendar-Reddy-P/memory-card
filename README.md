# Clash Royale Memory Card Game

A simple and fun memory card game built with **React**, **Vite**, and **Tailwind CSS**. 
The objective of the game is to click on a card to earn a point, but the catch is—you must not click on the same card more than once. The cards shuffle after every selection, testing your memory and concentration!

## Features

- **Dynamic Card Shuffling**: Cards rearrange their positions randomly after every click.
- **Score Tracking**: Keeps track of your current score during gameplay.
- **High Score Persistence**: The highest score achieved is saved in your browser's local storage, meaning you won't lose your best record even if you refresh the page.
- **Clash Royale Theme**: Features characters from the popular game Clash Royale. Images used for the cards were sourced directly from the Clash Royale dev tools website.
- **Custom Typography**: Incorporates the official Clash Royale font (`Clash Regular` and `Clash Bold`) for an authentic aesthetic.
- **Modern Stack**: Fast build time and efficient UI styling using Vite and Tailwind CSS.

## Technologies Used

- [React](https://reactjs.org/) (Functional Components, `useState`, `useEffect`)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Getting Started

Follow these steps to run the game locally on your machine:

### Installation

1. Navigate to the project directory:
   ```bash
   cd memory-card
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the Vite development server, run:
```bash
npm run dev
```

Open your browser and visit `http://localhost:5173` (or the URL provided in your terminal) to explore and play the game.

## How to Play

1. When the game loads, you'll see a set of Clash Royale character cards.
2. Click on any card to earn a point.
3. Once a card is clicked, the entire deck will shuffle.
4. Continue clicking on unique cards you **haven't** clicked on yet.
5. If you click a card you have already selected, the game is over and your current score resets to 0.
6. Try to reach the maximum score!
