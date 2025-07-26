# Password Generator

A customizable password generator built using React + Vite. Users can control password length and choose to include numbers and special characters. The app uses key React hooks for enhanced performance and clean code structure.

## Features

- Adjustable password length
- Toggle:
  - Include numbers
  - Include special characters
- Automatically copy generated password to clipboard
- Button color change on copy success
- Responsive, clean UI

## Tech Stack

- React
- Vite
- `useRef` – for clipboard copy
- `useEffect` – for updating password when options change
- `useCallback` – to memoize password generator logic

## Learning Highlights

- Efficient state management with `useState`
- DOM interaction with `useRef`
- Side effect handling with `useEffect`
- Function memoization with `useCallback`

## How to Run

```bash
cd PwdGenerator
npm install
npm run dev
```
