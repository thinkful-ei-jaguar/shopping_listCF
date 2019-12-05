'use strict';

/*
Back-End:
1. Need to link jQuery and JS file to the HTML doc in <body> tag, use CDN version of jQuery
2. Use this concept paired with event delegation 
3. Dont need to alter other HTMl or CSS content, focus on a strong jQuery/JS code and HOW it can manipulate 
the existing groundwork.

User Exp: 
1. Enter items they need to purchase by entering text and hitting "Return" or "Add Item" button
2. Check/uncheck items using the "Check" button
3. Permanently remove items from the list 
*/

function handleEntries() {
    //this function will let users enter items they need to purchase either with the keyboard OR add item button
}

function checkUncheck() {
    //this function will let users check-off/uncheck items (stirkethrough effect)
}

function deleteEntries() {
    //this function will let users delete entries PERMANENTLY.
}

function shoppingList() {
    //this function calls all of our inputs to make the shopping list work! 
    handleEntries();
    checkUncheck();
    deleteEntries();
}