const reviews = {
  mon: {
    displayName: "Monday",
    dayNumber: 1,
    rating: 1,
    review: "Not controversial. Would give it 0 if allowed.",
  },

  tue: {
    displayName: "Tuesday",
    dayNumber: 2,
    rating: 1,
    review: "Monday could be a one-off, isolated event. Tuesday is a PATTERN.",
  },

  wed: {
    displayName: "Wednesday",
    dayNumber: 3,
    rating: 3,
    review: "Hump day. You can feel the weekend coming on!",
  },

  thu: {
    displayName: "Thursday",
    dayNumber: 4,
    rating: 3,
    review:
      "The weekend somehow doesn't feel any closer than it did yesterday. Is time an illusion?",
  },

  fri: {
    displayName: "Friday",
    dayNumber: 5,
    rating: 5,
    review: "TGIF. You might have to work today, but... do you really, though?",
  },

  sat: {
    displayName: "Saturday",
    dayNumber: 6,
    rating: 5,
    review: "The GOAT of days.",
  },

  sun: {
    displayName: "Sunday",
    dayNumber: 7,
    rating: 4,
    review:
      "Relaxing but also... not. Monday is coming, my sweet weekend child.",
  },
};

const day1 = {
  name: 'wed',
  mood: 2,
}

const day2 = {
  name: 'thu',
  mood: -1
}

// Write a function that follows this specification.

/**
 * getTodaysFeeling()
 * ------------------
 * Gives you back an adjusted rating for the day based on your mood.
 *
 * @param {Object} day - an object representing your feeling on that day. It contains the following two properties:
 * @param {string} day.name - The name of the day. Each of these is a key in the `reviews` object at the top of this file.
 * @param {number} day.mood - The current mood for that day.
 * @returns {number} The adjusted rating for that day. This is calculated by adding the mood adjustment to the general rating for the day.
 */

// Write your function above! (Preferably on the /very/ next line after the JSDoc comment ends.)

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/
if (typeof getTodaysFeeling === 'undefined') {
  getTodaysFeeling = undefined;
}

module.exports = getTodaysFeeling;
