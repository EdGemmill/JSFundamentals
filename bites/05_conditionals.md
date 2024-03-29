# Conditionals

_**This is a Makers Bite.** Bites are designed to train specific skills or tools. They
contain an intro, a demonstration video, some exercises with an example solution video,
and a challenge without a solution video for you to test your learning. [Read more about
how to use Makers
Bites.](https://github.com/makersacademy/course/blob/main/labels/bites.md)_

Learn to use conditional statements (`if`/`else`)

## Introduction

Conditionals work the same way as other languages, but we need:
  * Brackets `()` to enclose the condition.
  * Curly braces `{}` to enclose the code "body" executed following this condition.

See the following example:
```js
const a = getSomeValue();

if (a === 10) {
  // do these things
} else if (a === 20) {
  // something else?
} else {
  // whatever
}
```
## Exercise

To complete the following, you will have to:
 * use `if`, `else if` and `else` to write conditionals.
 * use the strict equality operator `===` to compare values.

1. Define a function `getNumberSign` that takes a number and returns either 'zero',
   'positive' or 'negative' depending on its sign:

```javascript
> getNumberSign(3);
'positive'

> getNumberSign(0);
'zero'

> getNumberSign(-5);
'negative'
```

[Example solution](https://www.youtube.com/watch?v=pT9kAUK_kmY)

*Note*: in all the following examples, we'll use the strict equality operator `===`
(instead of `==`), as it can prevent some bugs, and is viewed as one of the best practices
in the JavaScript community. In your code, you should ideally use `===` as well when doing
comparisons (unless you have a good reason not to!).


## Exercise

A colleague just asked you some help to debug their code.

```javascript
const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length == validLength) {
    true;
  } else {
    false;
  }
}
```

When calling this function, something doesn't work as expected. What fix can you suggest
to solve the problem? 

You'll know the function works if you manage to have the expected output when running in
`node`. (Remember: if you want to require the above function from a file, then you have to [export it first](./04_functions.md#Exporting-a-function))

```javascript
> isValidLength('00');
false

> isValidLength('00112233445');
true
```

<details>
<summary>Reveal suggested solution</summary>

The original function simply wasn't returning anything. 

Take a look at the updated code, and see if you can answer the questions below.

```javascript
const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
}

// tests, for running in the terminal with node filename.js
console.log("Check if 00 is valid", isValidLength('00'));
console.log("Check if 00112233445 is valid", isValidLength('00112233445'));
```

<details>
<summary>Why do I need two return statements?</summary>

Remember: We use `if..else` to control the flow of our program. Every possible path needs to return a value.
</details> 

<details>
<summary>What did I change to get strict equality?</summary>

I changed `==` to `===`

This change wasn't necessary to make the program work. But it's a good habit to get into.
</details>

</details>


## Challenge

> This is a process feedback challenge: please do a screen recording of yourself working on it and submit the file using [this link](https://airtable.com/shrvo9ePjlwnaiLv5?prefill_Item=jsfun_1)

Write a `fizzBuzz` function in JavaScript. As a reminder, this function should take a
number as argument, and then either:
  * Return "Fizz" if this number is divisible by 3.
  * Return "Buzz" if this number is divisible by 5.
  * Return "FizzBuzz" if this number is divisible by *both* 5 and 3.
  * Otherwise, Return the number itself.

Here's an acceptance criteria of how the function should behave:
```js
> fizzBuzz(3); 
'Fizz'

> fizzBuzz(5);
'Buzz'

> fizzBuzz(8);
8

> fizzBuzz(15);
'FizzBuzz'

> fizzBuzz(18);
'Fizz'

> fizzBuzz(20);
'Buzz'
```

[Next Challenge](06_loops.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-fundamentals&prefill_File=bites%2F05_conditionals.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-fundamentals&prefill_File=bites%2F05_conditionals.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-fundamentals&prefill_File=bites%2F05_conditionals.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-fundamentals&prefill_File=bites%2F05_conditionals.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-fundamentals&prefill_File=bites%2F05_conditionals.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
