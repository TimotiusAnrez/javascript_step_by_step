# Algorithm and Pseudocode

## What is algorithm?

In simple term, algorithm is a set of instruction to solve a problem.

## What is Pseudocode?

If algorithm is a set of instruction to solve a problem, then we can say that Pseudocode is a human like language that looks like programming language that we write our algorithm in.

Pseudocode can be broken down into 5 elements:

    -   Variables
    -   Assignment
    -   Input/Output
    -   Selection
    -   Repetition

### Variables 

A variable has a name, a data type, and a value. Each variable that is created will be stored in specific memory address. Variable can be called anything, but it is best practice to give variables that is associated with the problem that we want to solve, or be as descriptive as possible.

example:
```
good:
let numOfPeople //number of people
let pizzaLeft //number of pizza left

bad:
let asdasdasdasda  //???
let hahahahahehehe //wtf?
let fc*kThisShit  // T.T
```

### Assignment

Assignment is the physical act of placing value into a variable

example:
```
let numOfPeople = 0 // numOfPeople has 0 value
let sliceOfPizzaLeft = 8 // sliceOfPizzaLeft has 8 value

numOfPeople = 5 //numOfPeople has 5 value right now

sliceOfPizzaLeft = sliceOfPizzaLeft - numOfPeople // sliceOfPizzaLeft = sliceOfPizzaLeft (prev) - numOfPeople
```

### Input/Output

nput / Output both deal with an outside source (can be a user or another program) receiving or giving information. An
example would be assuming a fast food restaurant is a program. A driver (user) would submit their order for a burger
and fries (input), they would then drive to the side window and pick up their ordered meal (output.)

    Output: write/display/print
    Input: Read/get/input

### Selection

Selection construct allows for a choice between performing an action and skipping it. It is our conditional statements.
Selection statements are written as such:

```
if (conditional statement)
    statement list
else 
    statement list
```

### Repetition

Repetition is a construct that allows instruction to be executed multiple times

    -   Count is initialized
    -   Tested
    -   Incremented

Example of repetition:

    -   While
    -   For

## Example algorithm and pseudocode

### Problem:
How do we count how many people in the room

### Algorithm:
Make a variable N to store total number of person in the room
Assign variable N to 0 as initial value
For each person in the room
    Set variable N to N + 1

### Pseudocode:
```
let N = 0
For each person in the room
    Set N = N + 1
```

### Code:
```js
let room = [0, 1,2,3,4,5,6,7,8, 9] // scenario we are already in the room
let n = 0
room.forEach(element => {
    n = n + 1
})
```

## How this help me in programming?

Well when we are facing a problem, taking a step back and think of the solution with our own language often times help us see or know something that we miss in our problem solving steps. Written it in Pseudocode will also help us to translate our solution to programming language that we choose.