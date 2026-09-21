Here's the map. Everything you need to know to reach 6kyu/5kyu with a solid JS foundation.

---

# The Full JavaScript Foundation Map

## Tier 1: Fundamentals (8kyu → 7kyu)

**Variables and types**
- `var`, `let`, `const` — and when each applies
- Numbers, strings, booleans, null, undefined
- Type coercion (why `"1" + 1 === "11"` but `"1" - 1 === 0`)

**Operators**
- Arithmetic, comparison (`==` vs `===`), logical (`&&`, `||`, `!`)
- Ternary operator

**Control flow**
- `if` / `else if` / `else`
- `switch`
- `for`, `while`, `do...while`

**Strings**
- `.length`, `.split()`, `.join()`, `.slice()`, `.substring()`, `.substr()`
- `.toUpperCase()`, `.toLowerCase()`
- `.includes()`, `.startsWith()`, `.endsWith()`
- `.replace()`, `.replaceAll()`
- `.trim()`, `.charAt()`, `.indexOf()`
- Template literals (backticks)

**Arrays — basics**
- `.length`, `.push()`, `.pop()`, `.shift()`, `.unshift()`
- `.indexOf()`, `.includes()`
- `.slice()`, `.splice()`
- `.concat()`

**Numbers**
- `parseInt()`, `parseFloat()`, `Number()`
- `Math.floor()`, `Math.ceil()`, `Math.round()`
- `Math.min()`, `Math.max()`, `Math.abs()`
- `Math.random()`
- `.toFixed()`, `.toLocaleString()`

---

## Tier 2: Core Patterns (7kyu)

**Array methods — the big five**
- `.forEach()` — do something for each item
- `.map()` — transform each item
- `.filter()` — keep matching items
- `.reduce()` — combine into one value
- `.find()` / `.findIndex()` — locate an item

**Sorting**
- `.sort()` with a comparator function
- Numeric sort: `(a, b) => a - b`
- String sort: `(a, b) => a.localeCompare(b)`
- Sorting objects by property

**Objects**
- Creating and accessing properties
- `Object.keys()`, `Object.values()`, `Object.entries()`
- `Object.assign()`, spread `{...obj}`
- Destructuring: `var { name, age } = person`
- Computed properties

**Arrays — advanced**
- Destructuring arrays: `var [a, b] = [1, 2]`
- Spread `[...arr]`
- Rest parameters `...args`
- `.flat()`, `.flatMap()`
- `.some()`, `.every()`
- `.fill()`
- Array of objects — common patterns

**Functions**
- Function declarations vs expressions
- Arrow functions
- Parameters, arguments, default parameters
- Return values
- Callbacks

**Closures**
- Function inside a function
- Access to outer scope
- Common use: counters, factories, private state

**Scope**
- Global, function, block scope
- `var` vs `let` vs `const` scope
- Hoisting
- The `this` keyword in different contexts

---

## Tier 3: Intermediate Patterns (6kyu)

**Higher-order functions**
- Functions that take functions
- Functions that return functions
- Composing functions

**Recursion**
- Base case and recursive case
- Tree traversal
- Factorial, Fibonacci, flattening nested arrays

**Promises & Async**
- Creating Promises
- `.then()`, `.catch()`, `.finally()`
- `async` / `await`
- `Promise.all()`, `Promise.allSettled()`
- Error handling in async

**Error handling**
- `try` / `catch` / `finally`
- `throw` custom errors
- Error types

**Data structure manipulation**
- Grouping arrays into objects
- Flattening nested structures
- Merging objects
- Finding unique values
- Counting occurrences

**String algorithms**
- Palindrome check
- Anagram detection
- Character frequency
- Caesar cipher
- Reversing words

**Number algorithms**
- Prime check
- Factorial
- Fibonacci
- GCD / LCM
- Digit sum
- Base conversion

**Class basics**
- `class` syntax
- `constructor`
- Methods
- `extends`, `super`
- `static` methods

**Regular expressions**
- Basic patterns
- `.test()`, `.match()`, `.replace()`
- Character classes, quantifiers
- Capture groups

**JSON**
- `JSON.parse()`
- `JSON.stringify()`

---

## Tier 4: 5kyu Territory

**Algorithm design**
- Two-pointer technique
- Sliding window
- Frequency counters
- Memoization
- Dynamic programming basics

**Data structures**
- Stack (LIFO)
- Queue (FIFO)
- Linked list basics
- Hash maps (JS objects/Maps)
- Sets

**Advanced array/object patterns**
- Matrix traversal
- Rotating arrays
- Cartesian products
- Deep merge, deep clone
- Debounce and throttle

**Advanced functions**
- Currying
- Partial application
- Function composition
- Memoization with closures

**Performance awareness**
- Big O basics
- Time vs space tradeoffs
- When to use `for` vs array methods

**Async patterns**
- Sequential async
- Parallel async
- Retry logic
- Debounced async

---

## What This Means For Your Path

**To reach 6kyu comfortably:**
- Master Tiers 1-3.
- Do 50-80 katas across these topics.
- Focus especially on: `map`, `filter`, `reduce`, `sort`, objects, closures, recursion basics, Promises.

**To reach 5kyu:**
- Add Tier 4.
- Do another 30-50 katas at 6kyu/5kyu level.
- Focus on: algorithm patterns, data structures, dynamic programming basics.

**How long:**
- 6kyu: 6-8 weeks of consistent practice.
- 5kyu: 3-4 months.

---

## The Priority for You Right Now

For Project 6 and beyond, focus first on:

1. `map`, `filter`, `reduce` — automatic
2. `sort` with comparators — automatic
3. `Object.keys`, `.values`, `.entries` — automatic
4. Unique values, grouping, counting — patterns
5. Closures — understand them
6. Async/await — comfortable
7. Error handling — comfortable

That's enough for Project 6 and Node.js.

The rest — recursion, classes, regex, algorithms — come with time. Don't try to learn them all at once.


