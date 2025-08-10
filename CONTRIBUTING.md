# Contributing to FullstacksJS VSCode Theme

Thank you for your interest in contributing to the FullstacksJS VSCode Theme! This document provides guidelines and information for contributors.

## Table of Contents

- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Theme Development](#theme-development)
- [Submitting Changes](#submitting-changes)
- [Style Guides](#style-guides)

## How Can I Contribute?

### Reporting Bugs

- Create a GitHub issues
- Include detailed steps to reproduce the bug
- Provide screenshots if applicable
- Mention your VS Code version and OS

### Contributing Code

- Fork the repository
- Create a feature branch
- Make your changes
- Submit a pull request

## Development Setup

### Prerequisites

- Node.js +20
- VS Code +1.85.0
- Git

### Installation

1. Fork and clone the repository:
   ```sh
   git clone https://github.com/YOUR_USERNAME/vscode-theme.git
   cd vscode-theme
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Open in VS Code:
   ```sh
   code .
   ```

### Development Workflow

1. **Create a new branch**:
   ```sh
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** to the theme files

3. **Test your changes**:
   - Press `F5` to launch the extension development host
   - Open a new window and test your theme
   - Test with different file types and languages

4. **Build the extension**:
   ```sh
   npm run build
   ```

5. **Commit your changes**:
   ```sh
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push and create a PR**:
   ```sh
   git push origin feature/your-feature-name
   ```

## Theme Development

### Theme Structure

The theme consists of several key components:

- **`themes/dark-theme-modern.json`**: Main theme file
- **`package.json`**: Extension manifest
- **`README.md`**: Documentation

### Color System

The theme uses a consistent color palette:

```json
{
  "primary": "#23252e",      // Main background
  "secondary": "#272a34",    // Secondary backgrounds
  "accent": "#ffd86e",       // Primary accent
  "text": "#ffffff",         // Primary text
  "muted": "#ffffff44",      // Muted text
  "success": "#5bf29a",      // Success states
  "warning": "#ffd86e",      // Warning states
  "error": "#ff7062"         // Error states
}
```

### Adding New Language Support

1. **Identify the language scope**:
   ```json
   {
     "name": "Your Language",
     "scope": "source.your-language",
     "settings": {
       "foreground": "#your-color"
     }
   }
   ```

2. **Add to tokenColors array** in the theme file

3. **Test with sample files** in that language

### Semantic Token Colors

For better language support, add semantic token colors:

```json
{
  "semanticTokenColors": {
    "variable.readonly": {
      "foreground": "#14ffde"
    },
    "function.defaultLibrary": {
      "foreground": "#ffa478"
    }
  }
}
```

## Submitting Changes

### Pull Request Guidelines

1. **Title**: Use conventional commit format
   - `feat: add new language support`
   - `fix: correct color for JavaScript functions`
   - `docs: update README`

2. **Description**: Include:
   - What changes were made
   - Why the changes were made
   - How to test the changes
   - Screenshots if applicable

3. **Testing**: Ensure your changes work with:
   - Multiple file types
   - Different VS Code versions
   - Various color schemes

### Commit Message Format

Use conventional commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

## Style Guides

### JSON Formatting

- Use 2 spaces for indentation
- Sort properties alphabetically
- Use consistent color values (hex format)

### Color Guidelines

- Maintain accessibility standards
- Ensure sufficient contrast ratios
- Use consistent color naming
- Test with colorblind users in mind

### Documentation

- Update README.md for new features
- Add examples for customization
- Include screenshots for visual changes
- Update CHANGELOG.md for releases

Thank you for contributing to the FullstacksJS VSCode Theme! 🎨
