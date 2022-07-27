# Binary Search

Binary search is an efficient algorithm for finding an item from a sorted list of items.

![binary search illustration](../../asset/ilustration/BinarySearch.png)

## Algorithm

1.  Make a variable to store min value with name of left and 0 as initial value
2. Make a variable to store max value with name of right and array length - 1 as initial value
3. Make a variable to store mid value
4. while rigth is larger equal than left
    5.  assign median of search area to mid as value
    6.  if arr index of mid is equal to n input
            return mid
    7.  if arr index of mid is larger than n
            right = mid - 1
    8.  else 
            left = mid + 1
9.  return false 

## Pseudocode

let left = 0
let right = arr.length - 1
let mid
while right >= left
    assign mid = left + (rigth - 1) / 2
    if arr[mid] = n
        return mid
    if arr[mid] >= n
        rigth = mid - 1
    else
        left = mid + 1
return false