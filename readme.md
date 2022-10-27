
# Today&rsquo;s Mood

An exercise in using dynamic object keys to access data.


## Your Structure

This problem has the same basic one as the Pursuit curriculum usually does, with the small added wrinkle that we haven&rsquo;t written the start of the function.


## Your Tools

-   Run `npm install` to install Jest. Then you can run `npm test` or (better yet) `npm run watch` in your terminal to get tests.
    -   The JSDoc


## Your Task

Write the function described in `getTodaysFeeling.js`.

You *can* solve this problem using `if/else` chains or a `switch` statement, but **it can be solved in one line**.

Let&rsquo;s look at the following example.

    const name = "colin";
    const greetings = {
      angie: "Good morning!",
      colin: "Good morning good morning good morning.",
    };

You *could* use an `if/else` chain like so:

    
    if (name === "colin") {
      console.log(greetings.colin);
    } else if (name === "angie") {
      console.log(greetings.angie);
    }

    Good morning good morning good morning.

But this doesn&rsquo;t scale very well. What if there are 10 greetings? 100? Don&rsquo;t write 200 lines of code! Write *one*.

How? Leverage the fact that the `name` variable holds the name of the key in `greetings` whose value we want.

Now, we can&rsquo;t access it via dot notation, because then we&rsquo;d be looking for a property *literally called* `name`.

    
    console.log(greetings.name)

    undefined

Instead, what we want is to use bracket notation, which is JavaScript&rsquo;s syntax for, &ldquo;Don&rsquo;t look up the key with this name, but with the name of whatever this JavaScript evaluates to.&rdquo;

    
    console.log(greetings[name])

    Good morning good morning good morning.


## A Slightly More Complex Example

What if the variable didn&rsquo;t hold *exactly* the key name?

    const name = 'Colin Jaffe';
    const greetings = {
      angie: "Good morning!",
      colin: "Good morning good morning good morning.",
    }

Now we&rsquo;re going to have to lop off the last name and lower case the first.

First, we could see if we can get the first name only. `String.prototype.split` can give us an array out of string, we just need to tell it when to decide to start a new array element. Passing a `' '` separator can do that for us.&rsquo;

    
    console.log(name.split(" "));

    [ 'Colin', 'Jaffe' ]

