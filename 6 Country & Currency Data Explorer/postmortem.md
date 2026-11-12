# Project 6: Country & Currency Data Explorer — Post-Mortem

## Project Details
- **Status:** Complete
- **Independence Rating:** 65%
- **Duration:** [Number of days/weeks]

## What Went Well
- Successfully switched from a failing API to a local JSON file.
- Built a clean data transformation pipeline using `map()` and `Object.values()`.
- Used `.reduce()` to calculate total area and find the highest area.
- Implemented filtering, sorting, and searching without mutating the master state.
- Successfully debugged and implemented Event Delegation for the modal.

## What Was Hard
- **Nested JSON Traversal:** Figuring out `country.name.common` and `country.currencies[0]` was confusing at first.
- **Architecture:** I initially tried to generate 250 modals inside `render()`, which was a massive performance anti-pattern. I learned to build one modal and use `data-attributes` to populate it.
- **The Modal Bug:** I spent time debugging why the modal wouldn't open, only to realize I was adding a `hidden` class to the `<dialog>` element inside `render()`.

## What I Learned
- **State Mutation:** Never mutate `state.countries`. Create a copy (`displayCountries`) and filter/sort that.
- **Event Delegation:** One listener on the parent is better than 250 listeners on the children.
- **Async/Await:** How to fetch local files and handle the loading/error states cleanly.
- **Data Structures:** How to navigate arrays vs. objects vs. array-of-objects.

## What I'd Do Differently
- I would read the JSON shape *before* writing the `.map()` function.
- I would architect the modal logic *before* writing the `render()` loop.

## Next Steps
- Learn Debouncing for the search input (Project 7).
- Start thinking about Big O Notation and optimization.