```markdown
# Redux Persist with Loading State Management Example

This example project demonstrates how to integrate Redux Persist for state persistence and manage loading states in a Redux application using the @reduxjs/toolkit.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Features

- Integration of Redux Persist for state persistence across page reloads.
- Managing loading states for asynchronous actions using Redux and Redux Toolkit.
- Example user slice demonstrating the setup.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/redux-persist-loading-example.git
   ```

2. Navigate to the project directory:

   ```bash
   cd redux-persist-loading-example
   ```

3. Install dependencies using Yarn or npm:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn start
   ```

## Usage

This example demonstrates how to use Redux Persist to persist your Redux state between page reloads and manage loading states for asynchronous actions. It includes a user slice that showcases the loading state management.

1. Dispatch the `setName` action to set the user name from the input feild.

## Folder Structure

The project's folder structure is organized as follows:

```
src/
├── app/
│   ├── store.js
│   └── ...
├── features/
│   ├── userSlice.js
│   └── ...
├── index.js
└── ...
```

- `app/`: Contains the Redux store configuration using `@reduxjs/toolkit` and Redux Persist setup.
- `features/`: Houses individual Redux slices, like the `userSlice` for this example.

## Contributing

Contributions to this project are welcome! Feel free to submit issues and pull requests.

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin my-feature-branch`
5. Create a pull request.
