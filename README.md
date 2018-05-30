# Memory Matching Game: Wildlife Edition

This is a small JavaScript program that simulates the memory card game. Cards are "randomly" shuffled each time. The goal is to uncover all of the matches! The game also tracks number of moves (1 move per attempted match), a star rating (based on your number of moves), and elapsed time since first click.

## Logic Summary
1. Shuffle "images" (font awesome icons) & insert into hidden portion of HTML "cards"
2.  Upon clicking a card, there are three possibilities:
  * If a card is already flipped (does not have class .d-none), click is ignored.
  * If a match is already in progress (checkingState===true), click is ignored.
  * Else image is revealed (removeClass .d-none) and card is activated (addClass .active)
3. If two cards are active, then matchCheck function is executed. matchCheck compares the innerHTML of the two cards. Matches get a spinning animation and remain displayed. Mismatches get a wiggling animation and are re-hidden.
4. Star rating is adjusted following each comparison. Star rating is based on the number of moves.
5. Once all cards are matched, a modal is made visible. Modal displays user stats and provides option to play again.

## Other Features

### Move Counter
This increments by one with each move. A move is considered flipping two cards for comparison.

### Star Rating
The star rating is either 1, 2, or 3 and is based on the number of moves. 

### Stopwatch
The stopwatch uses setInterval, which increments the value of the variable seconds each 1000 ms (1 s). This is cleared once the number of matches reaches 16. 

### Reset Button
This runs the reset function, which restores original styles, clears icon, reshuffles deck, establishes baseline variable values.

## Items in Progress

* Styling (always making improvements)
* CSS animations

## Author

* **Lindsay Miller** - *Initial work* 

## License

This code may be used without attribution!

## Code Dependencies
* [Google Fonts: Chelsea Market](https://fonts.google.com/specimen/Chelsea+Market)
* [FontAwesome 5.0.13](https://fontawesome.com/get-started)
* [JQuery 3.3.1](https://code.jquery.com/) jquery-3.3.1.min.js
* [Bootstrap 4.1.0](https://getbootstrap.com/docs/4.1/getting-started/introduction/) bootstrap.min.css, popper.min.js, bootstrap.min.js

## Acknowledgments

* Modal styles adapted from W3Schools examples: https://www.w3schools.com/howto/howto_css_modals.asp*/
* Array randomization is the Fisher Yates method, as conveyed by Frank Mitchell: https://www.frankmitchell.org/2015/01/fisher-yates/
* Wiggle animation adapted from Sarah Drasner's shake animation: https://css-tricks.com/snippets/css/shake-css-keyframe-animation
