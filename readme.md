# Today's Mood

An exercise in using dynamic object keys to access data.

## Your Structure

This problem has the same basic one as the Pursuit curriculum usually does, with the small added wrinkle that we haven't written the start of the function.

## Your Tools

- Run `npm install` to install Jest. Then you can run `npm test` or (better yet) `npm run watch` in your terminal to get tests.
  - The JSDoc

## Your Task

Write the function described in `getTodaysFeeling.js`.

You _can_ solve this problem using `if/else` chains or a `switch` statement, but **it can be solved in one line**.

Let's look at the following example.

    let name = "colin";
    const greetings = {
      bill: "Good morning!",
      colin: "Good morning good morning good morning.",
      adrian: "Good morning, Vietnam!",
      truman: "Good morning. And in case I don't see you, good afternoon, evening, and good night.",
    };

You _could_ use an `if/else` chain like so:

    if (name === "colin") {
      console.log(greetings.colin);
    } else if (name === "angie") {
      console.log(greetings.angie);
    } else if (name === "adrian") {
      console.log(greetings.adrian);
    } else if (name === "truman") {
      console.log(greetings.truman);
    }

//> "Good morning good morning good morning."

But this doesn't scale very well. What if there are 10 greetings? 100? Don't write 200 lines of code! Write _one_.

How? Leverage the fact that the `name` variable holds the name of the key in `greetings` whose value we want.

Now, we can't access it via dot notation, because then we'd be looking for a property _literally called_ `name`.

    console.log(greetings.name)

//> undefined

Instead, what we want is to use bracket notation, which is JavaScript's syntax for, "Don't look up the key with this name, but with the name of whatever this JavaScript evaluates to."

    console.log(greetings[name])

    Good morning good morning good morning.


    name = 'adrian'
    console.log(greetings[name])

//> "Good morning, Vietnam!"

## A Slightly More Complex Example

What if the variable didn't hold _exactly_ the key name?

    let name = 'Colin Jaffe';
    const greetings = {
      bill: "Good morning!",
      colin: "Good morning good morning good morning.",
      adrian: "Good morning, Vietnam!",
      truman: "Good morning. And in case I don't see you, good afternoon, evening, and good night.",
    };

Now we're going to have to lop off the last name and lower case the first.

First, we could see if we can get the first name only. `String.prototype.split` can give us an array out of string, we just need to tell it when to decide to start a new array element. Passing a `' '` separator can do that for us.'

    console.log(name.split(" "));

//> [ 'Colin', 'Jaffe' ]

Okay, so we could grab the first index of that array to get us _almost_ the string we want, and then lowercase it.

    console.log(name.split(" ")[0].toLowerCase());

//> "colin"

Great! Now let's throw that into bracket notation to access the object's value at that property.

    console.log(greetings[name.split(" ")[0].toLowerCase()]);

//> "Good morning good morning good morning."

And just to show that this is happening dynamically:

    name = 'Truman Burbank'
    console.log(greetings[name.split(" ")[0].toLowerCase()])

//> "Good morning. And in case I don't see you, good afternoon, evening, and good night."

It's all just depending on what value is held in `name`! This will work with 100 names or 100,000 names, and it's a _lot_ less code.

## This Is One Way To Avoid Huge Amounts Of Code Devoted To Logic

Using data to look up what path you should take is a design pattern that can simplify your code greatly. Try it in the function tested and in related assignments, and explore it as an architecture moving forward.
