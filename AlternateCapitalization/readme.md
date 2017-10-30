Today's Kata calls for us to use take in a string of lowercase letters and return an array containing a string matching the original input but with even indexes capitalized, followed by the input mutated to capitalize odd indexes.

In drawing out the solution, it looks like I need to break the string into an array, then run through the array once to capitalize the 0th, 2nd, 4th... characters, and again to capitalize the 1st, 3rd, 5th... characters.  Then use .join to merge them back together and return both mutated arrays.



Link to problem: https://www.codewars.com/kata/alternate-capitalization/train/javascript
