# isSmooth

We define the _middle_ of the array `arr` as follows:

-   if `arr` contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
-   if `arr` contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.

An array is called _smooth_ if its first and its last elements are equal to one another and to the _middle_. Given an array `arr`, determine if it is _smooth_ or not.

## Example

-   For `arr = [7, 2, 2, 5, 10, 7]`, the output should be
    `solution(arr) = true`.

The first and the last elements of `arr` are equal to `7`, and its _middle_ also equals `2 + 5 = 7`. Thus, the array is _smooth_ and the output is `true`.

-   For `arr = [-5, -5, 10]`, the output should be
    `solution(arr) = false`.

The first and _middle_ elements are equal to `-5`, but the last element equals `10`. Thus, `arr` is not _smooth_ and the output is `false`.

## Input/Output

-   [execution-time-limit] 4 seconds (js)

-   [input] array.integer arr

The given array.

Guaranteed constraints:
`2 ≤ arr.length ≤ 10^5`,
`-10^9 ≤ arr[i] ≤ 10^9`.

-   [output] boolean

`true` if `arr` is _smooth_, `false` otherwise.
