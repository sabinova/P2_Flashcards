# Web Development Project 3 - *World Wonders Flashcards*

Submitted by: **Sabina Ruzieva**

This web app: **An interactive flashcard quiz that helps users test their knowledge of 15 world-famous landmarks. Each card shows an image and description on the front, and the location details (country, city, established date) on the back. Users can type in their guess before flipping the card, track their streaks, shuffle the deck, and mark cards as mastered.**

Time spent: **15-20 hours**

---

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  - Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons have visual indication when disabled (grayed out at the beginning or end of the list), preventing wrap-around navigation

---

## Optional Features

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Case-insensitive
  - Ignores punctuation
  - Accepts either the country name or the city name as correct
- [x] A counter displays the user’s current and longest streak of correct responses
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards

---

## Additional Features

- [x] Responsive design for both desktop and mobile devices  
- [x] Color-coded flashcards based on continent for visual variety  
- [x] Smooth flip-card animation for engaging interaction  

---

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./public/images/P2_Flashcards_part2.gif' title='GIF Walkthrough' width='' alt='GIF Walkthrough' />

GIF created with LiceCap

---

## Notes

### Challenges Encountered
- **Fuzzy Matching Logic**: Ensuring that answers were accepted even if the user only typed the country or only the city required careful string normalization (ignoring case, punctuation, and partial matches).  
- **Navigation Edge Cases**: Preventing the “Previous” button from being active when starting fresh was tricky — I had to explicitly disable it at index 0.  
- **Responsive Styling**: Getting the flashcards, input box, and buttons to look good on small phone screens was a major challenge. The input box initially clashed with the flashcard, and text sometimes overflowed. I solved this by adjusting margins, reducing font sizes, and scaling images with `object-fit` so the entire landmark is visible without stretching.  


## License

    Copyright 2025 Sabina Ruzieva

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

