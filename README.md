# 03 JavaScript: Password Generator

## DESCRIPTION

Modified a starter code in Javascript so that users are able to generate a random password based on the options they selected. The purpose is to generate a secure password that users can use. 

## USAGE

When users click Generate Password button a window will pop up asking different criterias to generate a random password. It will first ask, "How many characters would you like?", giving the user a textbox to input their response. Their response will need to be between 8 and 128 characters and provided as a number. If not, a window will pop up letting them know that the criteria has not been met. Users must have at least one character to continue generating a random password. Once all criteria has been met a generated password would appear onto the page.

## CHALLENGES

Some challenges I faced was verifying the passwords that were on the output. I had difficulty trying to figure out not to include a certain criteria if it wasn't selected by a user.
 
I was stuck on this part for while but all I needed to do was delete the var userOptions for each conditional statement.
[alt text](assets/images/Screenshot%202023-02-24%20004931.png)

## RESOURCES

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

https://www.w3schools.com/jsref/met_win_confirm.asp

## DEPLOYED


https://slurpsz.github.io/password-generator/


https://github.com/slurpsz/password-generator

