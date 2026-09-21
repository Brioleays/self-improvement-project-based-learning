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