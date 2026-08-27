
---

### POST-MORTEM.md


# Kanban Board — Post-Mortem

## Project Details

| | |
|---|---|
| **Project** | Kanban Task Board |
| **Status** | Complete (functional) |
| **Timeline** | Longest project so far, with breaks |
| **Independence Level** | ~60-65% (up from 10% on Counter) |

---

## What I Built

A task management board with:

- Three columns (To Do, In Progress, Done)
- Add task via main form (first task) and popup form (subsequent tasks)
- Move tasks left and right with buttons
- Delete tasks
- WIP limit (max 3 in In Progress) with warning
- Priority levels with color-coded dots
- localStorage persistence
- Event delegation for all card actions

---

## What Went Well

1. **Architecture was mostly mine.** I designed the state object, the render logic, and the column rebuild. The mentor corrected bugs but didn't dictate the structure.

2. **Array methods clicked.** `.filter()` for delete, `.find()` for locating cards, `.forEach()` for rendering. I understood WHY they worked, not just copied.

3. **The popup bug was my diagnosis.** I found that I was attaching an event listener to a string instead of a DOM element. That was a real debugging win.

4. **Event delegation worked.** One listener handling three actions. Mostly set up independently.

5. **I didn't quit.** I took breaks when frustrated, dealt with my feelings, and came back. That's not a skill. It's a trait. And it matters more.

---

## What I Struggled With

1. **State placement.** I still put logic in the wrong place — like the priority-status mapping inside `render()` when it belonged in the form handler. I need to trace through code mentally before writing it.

2. **Scope awareness.** I used variables before they were defined (`inProgressCards` before the filter step). I used `state.cards.priority` on an array. I need to think: "What exists at this point? Is this an array or an object?"

3. **Testing before asking.** When something broke, my instinct was to ask the mentor instead of opening the console and reading the error. This is my biggest independence blocker.

4. **Form handler responsibilities.** `formHandler()` does too much — sets up main form, popup form, wires both submits. This should be split into smaller functions. I didn't know "separation of concerns" was the term for what I was trying to do.

5. **Added features without fully understanding implementation.** I knew WHAT I wanted from the wireframe, but didn't think through the code path to make it work. I drew the architecture but didn't trace the implementation before building.

---

## What I Learned

1. **Filter vs find vs forEach.** Filter returns a new array. Find returns one item. ForEach does something for each item. I used all three correctly.

2. **String vs DOM element.** HTML strings don't have `.addEventListener`. Only DOM elements do. This cost me hours but I'll never forget it.

3. **Separation of concerns.** Not the same as decomposition. One function should do ONE thing. `formHandler()` did five things. Next project, I'll split setup functions.

4. **Functional programming vs OOP.** Filter, map, reduce, find, some — these are functional array methods. OOP is objects, classes, inheritance. I touched OOP with the drum kit prototype but this project was functional style.

5. **State placement matters.** Logic that modifies state belongs in event handlers, not in render. Render reads state. It doesn't change it.

---

## What I'd Do Differently

1. **Test after every small change.** Not after writing the whole feature. Add one button, test it, then move to the next.

2. **Split the form handler into smaller functions.** `setupMainForm()`, `setupPopupForm()`, `addCard()`. One job each.

3. **Trace the code before writing it.** Write comments first. Then fill in code under each comment. Then mentally trace what happens when the user clicks.

4. **Read the console before asking for help.** 30 minutes of debugging myself before reaching out.

5. **Document frustrations as they happen.** Not just in the post-mortem. When I get stuck, write down what I was stuck on and how I got unstuck.

---

## Frustrations I Dealt With

- The popup form not submitting — took hours to find it was a string vs DOM element issue.
- Scope bugs — using variables before they existed.
- Not knowing where state logic belonged.
- Taking breaks when frustrated and feeling guilty about it.

The breaks weren't failure. They were managing my emotional state so I could come back clear-headed.

---

## Ratings

| Area | Rating |
|---|---|
| Architecture design | 6/10 |
| Debugging | 5/10 |
| Array methods | 7/10 |
| State management | 5/10 |
| Event delegation | 7/10 |
| Scope awareness | 3/10 |
| Independence | 6/10 |

---

## The Biggest Lesson

**Test before asking.** Not after. Not when I'm stuck for hours. The first instinct when something breaks should be: open the console, read the error, trace the code.

That single habit will move me from 60% to 85% independence faster than any other improvement.

---

## Next Project Focus

- Async/await from scratch (no API in this project, need to practice).
- Scope awareness — think about where data lives and when it's available.
- Separation of concerns — split functions properly.
- Test-driven workflow — test after every small change.

---

*"Building in public. Learning out loud."*