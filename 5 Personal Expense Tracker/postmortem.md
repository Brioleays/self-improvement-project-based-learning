
---

### POST-MORTEM.md

```markdown
# Personal Expense Tracker — Post-Mortem

## Project Details

| | |
|---|---|
| **Project** | Personal Expense Tracker |
| **Status** | Complete (functional) |
| **Duration** | August 31 – September 17, 2026 |
| **Independence Rating** | 40% |
| **Understanding of Finished Code** | 50% |

---

## What Was Built

A personal expense tracker with:

- Add expenses (category, amount, recipient, date, transaction type)
- Credit/debit logic (credit adds, debit subtracts)
- Total per month, highest category, transaction count
- Filter by category, recipient, or amount
- NGN/USD conversion via live exchange rate API
- localStorage persistence
- Dynamic row rendering with green/red indicators

---

## What Was Learned

- `reduce` for summing with conditional logic
- Object counting to find the most frequent category
- `Object.keys()` + `forEach` for iterating over objects
- Async fetch with `await` for the exchange rate API
- Guard patterns for async data that hasn't loaded yet
- Multi-field filter logic (`filterField` + `filterValue`)
- Reading the browser console and testing before asking

---

## What Was Struggled With

- **Data transformation.** `reduce`, `Object.keys`, object counting — all new. Still shaky.
- **Scope awareness.** Repeated bug class across the project: variables in the wrong place, missing `state.` prefix.
- **Separation of concerns.** Attempted refactor mid-project, got messy, reverted.
- **Async ordering.** Initial `NaN` bug because `render()` ran before the fetch completed.

---

## Bugs Fixed Independently

- Case-sensitivity bug (Credit vs credit)
- HTML `<p>` missing `class=` attribute
- Variable naming (`filterValue` vs `state.filterValue`)
- The `viewFilter()` function clean-up

---

## Bugs Mentor Pointed Out

- Missing `var` declarations
- `state.cards` vs `state.expenses`
- Async ordering (`render()` outside `conversionRate()`)
- Inverted error check (`!conversionData.rates.NGN`)
- Duplicate `total` declarations
- Filter logic checking wrong variable
- And many more

---

## AI Use

Used once to look up `Object.keys` + `forEach` patterns for finding the highest category. Adapted the solution, didn't copy. Still counts as a breach of the project's rules.

---

## Ratings

| Area | Rating |
|---|---|
| Independence | 40% |
| Understanding of finished code | 50% |
| Data transformation (reduce, object iteration) | 30% |
| Async/await | 60% |
| Scope awareness | 40% |
| Separation of concerns | 30% |
| Debugging independently | 50% |

---

## What I'd Do Differently

1. Don't declare all DOM queries at the top. Query only when needed, in the function that uses them.
2. Don't attempt refactors until the working version is shipped and stable.
3. Write the function responsibilities first, then implement.

---

## What Project 6 Should Force

1. Write an entire app from a blank file — no copying from previous projects.
2. Use `reduce` and `map` at least 3 times each.
3. Debug without asking for code — hints only.
4. No AI for JavaScript. MDN only.
5. Write a 1-page explanation of every concept used. If I can't explain it, I don't own it.

---
## Concepts Introduced

- `reduce` for summing with conditional logic
- `Object.keys()` + `forEach` for object iteration
- Multi-field filtering (`filterField` + `filterValue`)
- Async guard patterns (checking data before rendering)
- `toFixed()` for formatting currency
- `insertAdjacentHTML()` for dynamic rendering
- Live API fetch with `await`

## Why the Refactor Failed

Attempted to split `render()` into `calculateSummary()`, `filterExpenses()`, and `buildRows()`. Broke the working version. Reverted to ship. Lesson: refactor after shipping, not during.
---

## Did I Finish It?

Yes — functionally complete. **Refactor for separation of concerns was attempted and reverted.** It's now a Project 6 goal, not an Expense Tracker goal.

---

## The One-Sentence Summary

**Shipped a working expense tracker with async, filtering, credit/debit logic, and currency conversion — but with heavy guidance on data transformation, and still pattern-matching instead of generating from scratch.**

That's the stage. Not the verdict. The stage.

---

*"Building in public. Learning out loud."*