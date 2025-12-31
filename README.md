# Intern Assessment

I have used Javascript in order to solve the problem provided.

To run the solution you can type and enter the following in the terminal:

node anagram.js

I have assumed that the strings will be in lowercase and there will be no spaces between them.

The logic/approach behind my code is:

- Firstly I have checked if the two strings are of the same length or not. This will make our code efficient as if the the strings aren't of same length then it won't be an anagram and no further checks would have to be done.

- Then if the strings are of same length then the actual anagram check will be done.

- For the actual anagram check I first initialized an array having 26 element and used .fill to fill those spaces with 0.

- Then, I used a for loop to iterate each character of string and the logic behind anagram checking is that I will find/generate the character code of each character then subtract it by 97 as the lowercase character starts from 97 code. So, a will have index 0, b will have index 1 and so on.

- So, the major logic is I will find the index of the character and if the character is found in str1, I would increment the element of charCount at that index whereas, if found on the str2, I would decrement the element of charCount at that index.

- Then at last a check will be done to see if every element of the array is 0 or not. If every element of the array is '0' then the boolean true will be returned and if even one of the element isn't equal to '0' then boolean value false will be returned.
