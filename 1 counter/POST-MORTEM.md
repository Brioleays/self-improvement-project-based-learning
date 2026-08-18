
---

### POST-MORTEM.md

```markdown
# Counter — Post-Mortem

## 📦 What I Learned

- **State management:** Using a `state` object as a single source of truth
- **DOM updates:** Updating the DOM directly from state changes
- **localStorage:** Saving and loading the high score
- **Conditional styling:** Adding/removing CSS classes based on state

## 🚧 What I Struggled With

- **localStorage:** Understanding when to save and how to load on page load
- **The render function:** Initially updated DOM directly without a state object
- **Terminology:** Didn't know terms like "minimum touch target" but implemented it anyway using the box model

## 💡 What I'd Do Differently

- Start with a `state` object from the beginning instead of refactoring later
- Use more descriptive variable names
- Add keyboard shortcuts for accessibility

## ⏱️ Time Spent

- Started: 9:00 PM
- Finished: 10:17 AM (next day)
- Total: ~4 hours (with sleep break)

## 📈 Confidence Before vs After

| Concept | Before | After |
|---------|--------|-------|
| State management | 3/10 | 7/10 |
| DOM manipulation | 5/10 | 7/10 |
| localStorage | 2/10 | 5/10 |

## 📝 Notes

My frontend was rusty because I hadn't written Tailwind/CSS in a while. This project helped me remember. I still need more practice with localStorage.