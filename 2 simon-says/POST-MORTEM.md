# Simon Says — Post-Mortem

## 📦 What I Learned

- **State machines:** Using `gameStatus` (idle, displaying, input, gameover)
- **Event delegation:** Using `event.target.closest()` to handle button clicks
- **Async timing:** Using `async/await` with `setTimeout` for pattern display
- **localStorage:** Persisting high score
- **Array methods:** Using `.forEach()` for DOM updates

## 🚧 What I Struggled With

- **Async/await:** Understanding why `await` is needed for both `fetch()` and `.json()` — though this project didn't use fetch, the concept carried over
- **The render function:** Managing complex DOM updates across multiple states
- **Pattern display:** Getting the timing right for flashing panels
- **New concepts:** `event.target.closest()`, the flash index pattern, and async timing were all new to me

## 💡 What I'd Do Differently

- Write the state machine transitions more clearly from the start
- Use more helper functions to keep the render function cleaner
- Add comments explaining the flash index logic

## ⏱️ Time Spent

Spread over several days with interruptions. Started around 9:00 PM, continued the next morning, with breaks and other commitments in between.

## 📈 Confidence Before vs After

| Concept | Before | After |
|---------|--------|-------|
| State machines | 3/10 | 8/10 |
| Event delegation | 4/10 | 8/10 |
| Async/await | 2/10 | 5/10 |

## 📝 Notes

This was harder than Counter. The async timing for pattern display was tricky. I used a lot of `setTimeout` and had to think carefully about state transitions. I still don't fully understand async/await — that's something I need to work on.