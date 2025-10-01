# Web Development Project 2 - World Wonders Flashcards

Submitted by: Sabina Ruzieva

This web app: is an interactive flashcard application that helps users learn about 15 of the world’s most renowned places (wonders). Each flashcard shows an image and description on the front, and flips to reveal the location details (country, city, year established) on the back. Cards are color‑coded by continent to give users a visual hint. Users can flip cards by clicking or pressing Enter/Space, and move to the next random card with a single button.

Time spent: 15-20 hours

---

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (array of objects with front/back info)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

---

## Optional Features

The following **optional** features are implemented:

- [x] Cards contain images in addition to text
- [x] Cards have different visual styles (border/background colors) based on continent category
- [x] Keyboard accessibility (flip with Enter/Space)

---

## Additional Features

- [x] Responsive design for both laptop and phone screens 
- [x] Flip animation with smooth transitions
- [x] Hint text inside cards (“Tap to reveal details” / “Tap to flip back”)
- [x] Background world map image for thematic styling

---

## Video Walkthrough

Here’s a walkthrough of implemented required features:

<img src='./public/images/P2_Flashcards.gif' width='' alt='Video Walkthrough' />

GIF created with LiceCap.

---

## Notes

### Challenges I encountered:
- Styling & Responsive Design: 
  Getting the flashcards to look good on both laptops and phones was tricky. Text often overflowed on small screens, and the “Tap to reveal details” hint overlapped with the Next button. I solved this with media queries, `vh` units for card height, and careful margin/padding adjustments.

- Understanding `nextRandom` logic 
- Dynamic className and keyboard events in Cards.jsx
    At first this was confusing, but I realized:
    - The template literal adds the flipped class only  when the state is true.
    - tabIndex={0} makes the card focusable.
    - onKeyDown lets users flip the card with Enter/Space for accessibility.