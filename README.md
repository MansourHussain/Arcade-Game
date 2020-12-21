# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## Steps that I did to run the the Application:
- First: 
I defined three variable from `Enemy` object and assigned `x` and `y` values.
- Second:
 I defined a variable from `Player` object and assigned `x` and `y` values.
- Third:
 I assigned the values of moving speed and the directions `keys` values as `28px` for `up` ,`down` and `100px` for `left` and `right`.
- Fourth:
 I create `checkCollisions()` code so the collision occurs happen when the value of `X`  minus `Y` be less than `40px`.
- Fifth:
 I create a `dialog-box` to be shown when the `player` reach the water zone.

 ## Instructions to load and show the application page in index.html:
 First of all You have to download application file from [github-repo] (), the follow these steps below:

- First: open the `app.js` file.
- Second: you have to defined `allEnemies[]` array.
- Third: defined a `Player` class, this class will include `update()` and `render()` functions.
- Fourth: defined a object from the `Player` class.

this instructions will make the application page be shown in the browser.

## How to use it:
- use `up` key on your keyboard to move the player up.
- use `down` key on your keyboard to move the player down.
- use `left` key on your keyboard to move the player left.
- use `right` key on your keyboard to move the player right.