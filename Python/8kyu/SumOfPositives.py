"""You get an array of numbers, return the sum of all of the positives ones.
Example:
    [1, -4, 7, 12] => 
    1
    +
    7
    +
    12
    =
    20
    1+7+12=20

Note:
    If there is nothing to sum, the sum is default to 0."""

#My Solution
def positive_sum(arr):
    sum = 0
    for x in arr:
        if x > 0: sum+= x
    return sum

#Best Practise
def positive_sum(arr):
    return sum(x for x in arr if x > 0)