# Tailwind CSS underline class warning
This repository demonstrates a common warning that occurs when using the `underline` class in Tailwind CSS. The warning arises when the parent element of the text doesn't have a `text-` class applied to it.

## Bug Description
The `underline` utility class in Tailwind CSS works by creating a text decoration. However, if the parent element doesn't have a text-related class (like `text-gray-800`, `text-xl`, etc.) the browser might throw a warning to the console because the text properties might be undefined.

## Solution
Ensure that the parent element of the element with the `underline` class also has a text-related utility class applied to it. This provides the necessary text properties which the `underline` class will work against.  This ensures that the text is properly styled and the warning is avoided.

## How to reproduce
1. Clone this repository.
2. Run `npm install`
3. Run `npm start`
4. Open the browser's developer console and observe the warning.
5. Examine the bugSolution.js file to see the fix.
