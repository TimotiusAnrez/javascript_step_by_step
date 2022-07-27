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

## Example algorithm and pseudocode

### Problem:
How do we count how many people in the room

### Algorithm:
Make a variable to store number of people in the room with initial value of 0

### Pseudocode:
```
let N = 0
for each person in a room (for each loop)
    set N = N + 1
```

## How this help me in programming?

Well when we are facing a problem, taking a step back and think of the solution with our own language often times help us see or know something that we miss in our problem solving steps. Written it in Pseudocode will also help us to translate our solution to programming language that we choose.