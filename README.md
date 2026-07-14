# Student Grade Tracker (Class Components)

A React app built entirely with class-based components, demonstrating lifecycle methods, `this.state`, and controlled forms.

## Features

- Add new students via a form (name + grade)
- Grade validation (must be between 0-100)
- Edit a student's grade inline
- Remove students from the list
- Filter by All / Passed / Failed
- Sort students by grade (ascending/descending)
- Passed students highlighted green, failed highlighted red

## Tech Stack

- React (Vite)
- Class components (no hooks)
- Plain CSS

## Project Structure

```
src/
  components/
    AddStudentForm.jsx  -> Controlled form for adding students
    StudentList.jsx       -> Renders list of StudentItem
    StudentItem.jsx         -> Single student row (edit/remove)
  App.jsx                    -> Main class component - holds all state
  App.css
```

## How Lifecycle Methods Are Used

- **componentDidMount** — Runs once after the component first renders. Used here to load sample student data (simulating an initial data load, e.g. from an API).
- **componentDidUpdate** — Runs after every state/props update. Compares `prevState` to current state and logs to console when the student count changes.
- **componentWillUnmount** — Runs right before the component is removed from the page. Used here as a placeholder for cleanup (e.g. clearing timers or listeners if any were added).

## How State Works

- `this.state` holds `students`, `filter`, and `sortOrder`.
- `this.setState()` is used everywhere state changes — always via the function form (`(prevState) => ({...})`) when the new state depends on the old one, to avoid stale state bugs.
- Forms (`AddStudentForm`) and inline edits (`StudentItem`) are controlled — every input's value comes from `this.state`, and `onChange` updates it.

## How to Run Locally

```bash
npm install
npm run dev
```

## Live Link
[deploy karne ke baad yahan link daalna]