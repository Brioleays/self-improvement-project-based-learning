For Project 6, here are the core patterns. Master these in katas first, then apply them in the project.

---

# The 8 Patterns You Need for Project 6

## Pattern 1: `map` — Transform Each Item

**What it does:** Takes an array, applies a function to each item, returns a NEW array of the same length.

**Where you'll use it in Project 6:**
- Building table rows from `state.countries`
- Extracting region names from country objects for the dropdown
- Extracting currency symbols from currency objects

**Katas to search:**
- "Fake Binary" ✅ (done)
- "Convert a string to an array"
- "Array.diff" (mixed with filter)
- "Square(n) Sum"
- "Double Every Other"

---

## Pattern 2: `filter` — Keep Matching Items (first line)

**What it does:** Returns a new array with only the items that pass a test.

**Where you'll use it in Project 6:**
- Filtering by region
- Filtering by search query
- Combining filter + search

**Katas to search:**
- "List Filtering" ✅ (done)
- "Filter out the geese" ✅ (done)
- "Array.diff"✅ (done)
- "Find numbers which are divisible by given number" (next in queue)
- "Removing Elements"

---

## Pattern 3: `reduce` — Combine Into One Value

**What it does:** Reduces an array to a single value (number, object, string, array).

**Where you'll use it in Project 6:**
- Total population
- Highest population
- Count countries per region

**Katas to search:**
- "Sum of positive" ✅
- "Find the smallest integer" ✅
- "Sum Arrays"
- "Average of numbers"
- "Calculate average"
- "Sum of Minimums"
- "Maximum Multiple"

---

## Pattern 4: `sort` — Reorder

**What it does:** Reorders an array. Requires a comparator for numeric sort.

**Where you'll use it in Project 6:**
- Sort by population (high to low / low to high)

**Katas to search:**
- "Sort Numbers"
- "Sort array by string length"
- "Sort by Last Char"
- "Sort the Gift Code"
- "Sort arrays - 1"

**The critical lesson:** `[1, 10, 2].sort()` returns `[1, 10, 2]` (wrong). You need `[1, 10, 2].sort((a, b) => a - b)` to get `[1, 2, 10]`.

---

## Pattern 5: `Object.keys/values/entries` — Iterate Over Objects

**What it does:** Turns an object's keys, values, or key-value pairs into arrays you can loop over.

**Where you'll use it in Project 6:**
- Extracting unique regions from `state.countries`
- Reading currency from `country.currencies`
- Counting by region

**Katas to search:**
- "Object to Array"
- "Get key/value pairs as arrays"
- "Object values"
- "Convert Hash to an Array"

---

## Pattern 6: Unique Values

**What it does:** Extract only the distinct items from an array.

**Where you'll use it in Project 6:**
- Populating the region dropdown with unique regions

**The pattern:** `[...new Set(arr)]` or `arr.filter((v, i) => arr.indexOf(v) === i)`

**Katas to search:**
- "Remove duplicates from list"
- "Simple remove duplicates"
- "Unique in Order"
- "Find the unique number"

---

## Pattern 7: Partial String Match

**What it does:** Check if a string contains another string, case-insensitively.

**Where you'll use it in Project 6:**
- Search by name

**The pattern:** `country.name.toLowerCase().includes(query.toLowerCase())`

**Katas to search:**
- "Vowel Count"
- "String ends with?"
- "Do you speak English?"
- "Filter the number"
- "Regex count lowercase letters"

---

## Pattern 8: Chaining

**What it does:** Combining `.filter().map()` or `.filter().sort()` in one expression.

**Where you'll use it in Project 6:**
- Filter by region → sort by population → map to rows

**Katas to search:**
- "Two Oldest Ages"
- "Highest and Lowest"
- "Sum of Two Lowest"
- "Sorted? yes? no? how?"

---

# The Priority Order

Focus your katas in this order. Master each before moving on:

1. **`filter`** — most used in the project
2. **`map`** — row building, dropdown population
3. **`reduce`** — summary metrics
4. **`sort`** with comparator — critical, easy to get wrong
5. **Object.keys** — dynamic dropdown
6. **Unique values** — dynamic dropdown
7. **Partial string match** — search
8. **Chaining** — combining everything in render

---

# The Plan

- **Day 1 (today):** `filter` katas. 5 katas.
- **Day 2:** `map` katas. 5 katas.
- **Day 3:** `reduce` + `sort` katas. 5 each.
- **Day 4:** Object iteration + unique values. 5 katas.
- **Day 5:** String match + chaining. 5 katas.
- **Day 6:** Mixed 7kyu practice. 5 katas.

35 katas in 6 days. Then Project 6.

