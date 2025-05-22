"""
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
"""

#My Solution
def get_count(sentence):
    vowels='aeiou'
    return sum(1 for char in sentence.lower() if char in vowels)

#Beat Practise
def getCount(inputStr):
    return sum(1 for let in inputStr if let in "aeiouAEIOU")