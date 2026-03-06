# QUESTIONS AND ANSWERS

1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript.

Why JSX is used:
- Makes UI code easier to read and write
- Allows HTML structure and JavaScript logic in the same place
- React converts JSX into JavaScript using React.createElement()


2. What is the difference between State and Props?
- Definition	(State)	Data managed inside a component	(Props)Data passed from parent to child
- Mutability	(State)	Mutable (can change)		    (Props)Immutable (read-only)
- Controlled by	(State)	The component itself		    (Props)Parent component
- Purpose		(State)	Store dynamic data		        (Props)Pass data between components


3. What is the useState hook, and how does it work?
useState is a React Hook used to add state to functional components.

How it works:
- count → current state value
- setCount → function to update the state
- useState(0) → initial state value?


4. How can you share state between components in React?
State can be shared using three common methods:
a. Lifting State Up (Most Common)
- Move the state to the closest common parent and pass it via props.
b. Context API
- Used when many components need the same state.
c. State Management Libraries
- Examples:Redux, Zustand,Recoil


5. How is event handling done in React?
React handles events using camelCase syntax and functions.
Key points:
- Use camelCase (onClick, onChange)
- Pass a function as the event handler
- React uses Synthetic Events for better cross-browser compatibility