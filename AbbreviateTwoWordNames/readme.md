Today's Kata calls for us to abbreviate a two word name into FirstInitial dot LastInitial.  

Phelan and I whiteboarded to talk through the solution.  Essentially we wanted to pull out the very first character using an indexOf() method, then find the first character after the ' '.  We initially considered a charAt() method but I found a workable solution combing indexOf() to find the first instance of a space with the charAt() method again to find the character that came just after the space.

For good measure I used template format instead of plain concatenation.


Link to problem: https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript
