# Contributing to Agent Coding

Thank you for your interest in contributing to Agent Coding! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Content Guidelines](#content-guidelines)
- [Translation Guidelines](#translation-guidelines)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

By participating in this project, you agree to maintain a respectful, collaborative, and professional environment. We welcome contributions from everyone.

## How to Contribute

There are many ways to contribute:

- 🐛 **Report bugs** - Found an issue? Let us know
- ✨ **Suggest features** - Have ideas for improvement?
- 📝 **Improve documentation** - Help make our docs clearer
- 🌐 **Translate content** - Help us reach more people
- 💻 **Submit code** - Fix bugs or implement features
- 🎨 **Design improvements** - Enhance the UI/UX

## Development Workflow

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/agentcoding-org.git
cd agentcoding-org
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Create a Branch

```bash
# Create a descriptive branch name
git checkout -b feature/amazing-feature
# or
git checkout -b fix/bug-description
```

### 4. Make Your Changes

- Write clear, concise code
- Follow existing code patterns
- Add comments for complex logic
- Test your changes locally

### 5. Test Locally

```bash
# Run the development server
pnpm dev

# Build to verify everything works
pnpm build

# Run type checking
pnpm astro check
```

### 6. Commit Your Changes

Use conventional commit messages:

```bash
# Feature
git commit -m "feat: add new carousel component"

# Bug fix
git commit -m "fix: resolve mobile navigation issue"

# Documentation
git commit -m "docs: update contributing guidelines"

# Translation
git commit -m "i18n: add Italian translations for hero section"
```

### 7. Push and Create PR

```bash
git push origin feature/amazing-feature
```

Then open a Pull Request on GitHub.

## Pull Request Process

1. **Fill out the PR template** - Provide all requested information
2. **Ensure CI passes** - All checks must pass before merge
3. **Request review** - Tag `@alessandroraffa` for review
4. **Address feedback** - Make requested changes promptly
5. **Wait for approval** - PRs require approval before merging

### PR Requirements

- ✅ Descriptive title and description
- ✅ All CI checks passing
- ✅ No merge conflicts
- ✅ Code reviewed and approved
- ✅ Documentation updated if needed
- ✅ Tests pass (when applicable)

## Code Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for type safety
- Follow existing code patterns
- Use meaningful variable names
- Add JSDoc comments for public APIs
- Keep functions small and focused

### Astro Components

```astro
---
// Props interface at the top
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!-- Clear, semantic HTML -->
<section class="component-name">
  <h2>{title}</h2>
  <p>{description}</p>
</section>

<style>
  /* Scoped styles */
  .component-name {
    /* Use Tailwind classes when possible */
  }
</style>
```

### CSS/Styling

- Use Tailwind CSS utility classes first
- Use scoped styles in components
- Follow mobile-first responsive design
- Ensure accessibility (color contrast, focus states)

## Content Guidelines

### Writing Style

- Use clear, professional language
- Be concise and direct
- Avoid jargon unless necessary
- Cite sources when making claims
- Proofread for typos and grammar

### Tone

- Professional but approachable
- Educational and informative
- Inclusive and welcoming
- Technical accuracy is critical

## Translation Guidelines

### For Italian Translations

- Maintain meaning and intent, not word-for-word translation
- Use appropriate Italian technical terms
- Keep the same tone and style
- Ensure cultural appropriateness
- Match the structure of the English version

### Translation Files

Translations are in `src/i18n/translations.ts`:

```typescript
export const translations = {
  en: {
    hero: { title: "English Title" }
  },
  it: {
    hero: { title: "Titolo Italiano" }
  }
};
```

## Reporting Issues

### Before Creating an Issue

1. Search existing issues to avoid duplicates
2. Check if it's already fixed in `main` branch
3. Gather relevant information (browser, OS, steps to reproduce)

### Creating a Good Issue

- Use the appropriate issue template
- Provide clear reproduction steps
- Include screenshots if applicable
- Specify your environment details
- Be respectful and constructive

## Questions?

- 💬 Open a [Discussion](https://github.com/agentcoding-collective/agentcoding-org/discussions)
- 🐛 Report bugs via [Issues](https://github.com/agentcoding-collective/agentcoding-org/issues)
- 📧 Email: [contact info if available]

## Recognition

Contributors will be recognized in:

- Repository contributors list
- Release notes (for significant contributions)
- Project documentation

Thank you for contributing to Agent Coding! 🚀
