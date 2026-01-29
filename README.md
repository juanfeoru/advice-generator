# Frontend Mentor – Advice Generator App Solution

This is a solution to the [Advice Generator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## 📋 Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

---

## 📖 Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Generate a new piece of advice by clicking the dice button
- Fetch random advice from an external API

---

### Screenshot

![Screenshot of the Advice Generator App](./preview.jpg)

---

### Links

- Live Site URL: (https://juanfeoru.github.io/advice-generator-app/)

---

## 🛠️ My process

### Built with

- Semantic HTML5
- Tailwind CSS
- **React**
- React Hooks (`useState`, `useEffect`)
- Mobile-first workflow
- Fetch API
- Advice Slip API

---

### What I learned

In this project, I reinforced several important frontend concepts:

- Managing component state using React Hooks
- Handling asynchronous operations when fetching data from an external API
- Passing props between components to handle events and UI state
- Managing loading states and disabling UI elements during API requests
- Improving user experience with visual feedback
- Building responsive layouts using Tailwind CSS utility classes
- Structuring a small React application with reusable components

Example of the API handling logic:

```js
import { useEffect, useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('');
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchAdvice = async () => {
      const response = await fetch('https://api.adviceslip.com/advice', {
        cache: 'no-store',
      });

      const data = await response.json();
      setAdvice(data.slip.advice);
      setId(data.slip.id);
    };

    fetchAdvice();
  }, []);
}
```
