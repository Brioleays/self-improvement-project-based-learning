## Kata: Find the smallest integer
- Level: 8kyu
- Patterns used: reduce
- What I learned: reduce can find min/max by comparing accumulator to current value
## Kata: Fake Binary
- Level: 8kyu
- Patterns used: map, join
- What I learned: map transforms each item; join("") combines array into string
- Mistake: used toString().replaceAll() before learning join("")
## Kata: Sum of positives
- Level: 8kyu
- Patterns used: filter, reduce
- What I learned: reduce with an initial value of 0
## Kata: List Filtering
- Level: 7kyu
- Patterns used: filter, typeof
- What I learned: 
  - typeof (not typeOf)
  - filter uses truthy/falsy, not just true/false
  - falsy values: false, 0, "", null, undefined, NaN
## Kata: Filter out the geese
- Level: 8kyu
- Patterns used: filter, includes, !
- What I learned: 
  - filter + includes can compare two arrays
  - ! flips a boolean
  - !array.includes(item) means "keep items NOT in the array"
## Kata: Array.diff
- Level: 6kyu (or 7kyu depending on the version)
- Patterns used: filter, includes, !
- What I learned: same pattern as "Filter out the geese" — recognized it instantly
## Kata: Removing Elements
- Level: 8kyu
- Patterns used: filter, modulo
- What I learned: filter's callback receives (item, index) — index is the second parameter; index % 2 === 0 keeps even-indexed items
## Kata: Convert a string to an array
- Level: 8kyu
- Patterns used: split
- What I learned: .split(" ") breaks a string into an array by spaces
## Kata: Square(n) Sum
- Level: 8kyu
- Patterns used: map, reduce
- What I learned: 
  - `map` + `reduce` chain: transform each item, then collapse to one value
  - `**` is the exponent operator (number ** 2 squares the number)
  - Can chain map and reduce on separate lines or in one expression
## Kata: Double Every Other
- Level: 7kyu
- Patterns used: map, modulo, index parameter
- What I learned:
  - map's callback can take (item, index)
  - Index-based conditionals inside map
  - `!(index % 2 === 0)` is the same as `index % 2 !== 0`
## Kata: Find numbers which are divisible by given number
- Level: 7kyu
- Patterns used: filter, modulo
- What I learned: filter + modulo is a common pairing; return the condition directly instead of wrapping it in if/else
## Kata: Sum of Minimums
- Level: 7kyu
- Patterns used: map, reduce, Math.min, spread operator
- What I learned:
  - Math.min takes individual numbers, not arrays
  - The spread operator `...` unpacks arrays into individual arguments
  - map + reduce is a powerful combination
## Session Note
Sum of Minimums was the first kata that felt satisfying instead of confusing. Pattern: nested array → map to flatten → reduce to collapse.
## Kata: Sort Numbers
- Level: 7kyu
- Patterns used: sort with comparator, guard clauses
- What I learned:
  - Guard clauses at the top of functions prevent crashes
  - Short-circuit evaluation: order the checks so the dangerous one comes last
  - `nums.length` throws if `nums` is null/undefined
  - `.sort()` mutates the original array
  - Convention is `(a, b)` for the comparator, not custom names
## Kata: Sort array by string length
- Level: 7kyu
- Patterns used: sort with comparator
- What I learned: sort by a property (like .length) needs a comparator using that property
## Kata: Sort by Last Char
- Level: 7kyu
- Patterns used: split, sort, localeCompare
- What I learned:
  - `a[a.length - 1]` gets the last character of a string
  - `localeCompare` returns -1, 0, or 1 for string comparison
  - Sort comparators must return a number
  - Modern JS sort is stable — ties keep original order
  - No dot between variable and bracket: `a[...]`, not `a.[...]`
## Kata: Sum Arrays
- Level: 7kyu
- Patterns used: reduce, concat
- What I learned: reduce can collapse any array into a single value; concat joins two arrays
## Kata: Sum of Two Lowest
- Level: 7kyu
- Patterns used: sort with comparator, array index access
- What I learned:
  - sort numeric + take first two = find smallest values
  - `.sort()` mutates the original array (copy with `[...arr]` if you need to preserve it)
## Kata: Object to Array and Array to Object
- Level: 6kyu
- Patterns used: forEach, Object.keys, isNaN, Number, nested loops
- What I learned:
  - Object.keys() returns an array of keys
  - Object keys are ALWAYS strings
  - isNaN(Number(key)) checks if key is a non-numeric string
  - Two loops: outer over keys, inner to repeat
  - Arrays and objects convert in both directions with the right loop structure
  - Stretched me — took longer than the previous katas
  ## Kata: Remove duplicates from list
- Level: 8kyu
- Patterns used: Set, spread operator
- What I learned:
  - Set holds unique values only
  - `new Set(arr)` removes duplicates
  - `[...set]` converts back to array
  - Sets use `.size` not `.length`
  - Sets compare by reference for objects — only works well for primitives
  ## Kata: Simple Remove Duplicates
- Level: 7kyu
- Patterns used: Set, backward loop, reverse
- What I learned:
  - Looping backward finds the LAST occurrence of each value
  - Set tracks what's already been seen
  - Reverse restores original order after the backward loop
  - `if if` typo cost me one iteration
  - Loop conditions: `i >= 0` for backward loops, not `i < length`
## Kata: Sum of Digits / Digital Root
- Level: 6kyu
- Patterns used: recursion, for...of, reduce, split, map
- What I learned:
  - Recursion needs: (1) base case, (2) recursive case
  - Numbers aren't iterable — convert to string first
  - `for...in` returns indices, `for...of` returns values
  - Inner function should use its parameter, not the outer variable
  - Loop variables need to reset between recursive calls
  - Must `return` the recursive call, not just call it
- Mistakes I made:
  - Tried to loop a raw number
  - Used `for...in` expecting values
  - Result array never reset
  - Inner function looked back at outer `n`
  - Missing return
- Self-caught all bugs before sending
## Day 5 Progress
- Attempted duplicateCount three times
- Failed with Set+includes pattern (wrong)
- Failed with filter+includes pattern (wrong)
- Solved with Set+filter (correct but didn't learn tallying)
- Lesson: read problem first, plan in English, then code