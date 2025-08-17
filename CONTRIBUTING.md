# Contributing to FullstacksJS VSCode Theme

Thank you for your interest in contributing to the FullstacksJS VSCode Theme! This document provides guidelines and information for contributors.

## How Can I Contribute?

### Reporting Bugs

- Create a GitHub issues
- Include detailed steps to reproduce the bug
- Provide screenshots if applicable
- Mention your VS Code version and OS

## Development Setup

### Prerequisites

- Node.js +22
- VS Code +1.55.0
- Git

### Theme Structure

The theme consists of several key components:

- `src/colors.ts`: Defines the color palette used throughout the theme.
- `src/sources/`: Contains the source files for the theme, each defining a specific color or style.
- `src/ui/`: Contains the UI-specific color definitions.
- `src/semanticColors.ts`: Defines the semantic token colors for the theme.

### Development Workflow

1. **Install dependencies** using npm.
2. **Create a new branch**
3. **Run development mode** using `npm run dev` and Press `F5` to launch the extension development host.
4. **Make your changes** to the `src` files.
5. **Test your changes**: using files in `tests` directory.
6. **Build the extension** using `npm run build`.
7. **Commit your changes**.
8. **Push and create a PR**.

### Adding New Language Support

1. Add a new source file in `src/sources/`.
2. Export the new source file in `src/index.ts`.
3. Don't forget to add `tests` file.

Thank you for contributing!
