SOURCE: <https://github.com/Blazity/next-enterprise>
SOURCE: <https://github.com/tomek-i/vscode-settings-boilerplate/settings>

# Project Template

Welcome to _Project Template_, an open-source app. 🌍

## Features

How was this app build you ask?

TODO: need to add a few more features: Vercel, firebase, plop, prisma

- 🏎️ **[Next.js](https://nextjs.org/)** - Fast by default, with config optimized for performance (with **App Directory**)
- 💅 **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development
- ✨ **[ESlint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** - For clean, consistent, and error-free code
- 🛠️ **[Extremely strict TypeScript](https://www.typescriptlang.org/)** - With [`ts-reset`](https://github.com/total-typescript/ts-reset) library for ultimate type safety
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured actions for smooth workflows, including Bundle Size and performance stats
- 💯 **Perfect Lighthouse score** - Because performance matters
- 📦 **[Bundle analyzer plugin](https://www.npmjs.com/package/@next/bundle-analyzer)** - Keep an eye on your bundle size
- 🧪 **[Jest](https://jestjs.io/)** and **[React Testing Library](https://testing-library.com/react)** - For rock-solid unit and integration tests
- 🎭 **[Playwright](https://playwright.dev/)** - Write end-to-end tests like a pro
- 📚 **[Storybook](https://storybook.js.org/)** - Create, test, and showcase your components
- 🚬 **Smoke Testing** and **Acceptance Tests** - For confidence in your deployments
- 📝 **[Conventional commits git hook](https://www.conventionalcommits.org/)** - Keep your commit history neat and tidy
- 🔍 **[Observability](https://opentelemetry.io/)** - Open Telemetry integration for seamless monitoring
- 📂 **[Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)** - No more spaghetti imports
- ⚕️ **[Health checks](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)** - Kubernetes-compatible for robust deployments
- 🎨 **[CVA](http://cva.style/)** - Create a consistent, reusable, and atomic design system
- 🤖 **[Renovate BOT](https://www.whitesourcesoftware.com/free-developer-tools/renovate)** - Auto-updating dependencies, so you can focus on coding
- 🩹 **[Patch-package](https://www.npmjs.com/package/patch-package)** - Fix external dependencies without losing your mind
- 🤖 **[Automated ChatGPT Code Reviews](https://openai.com/chatgpt)** - **Stay on the cutting edge with AI-powered code reviews!**
- 📖 **[Semantic Release](https://github.com/semantic-release/semantic-release)** - for automatic changelog
- 🌍 **[T3 Env](https://env.t3.gg/)** - Manage your environment variables with ease

## Table of Contents

- [Project Template](#project-template)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [🎯 Getting Started](#-getting-started)
  - [🚀 Deployment](#-deployment)
  - [📃 Scripts Overview](#-scripts-overview)
    - [Development and Production](#development-and-production)
    - [Linting and Formatting](#linting-and-formatting)
    - [Deployment](#deployment)
    - [Testing](#testing)
    - [Database Management](#database-management)
    - [Utilities and Analysis](#utilities-and-analysis)
  - [🧪 Testing](#-testing)
    - [Running Tests](#running-tests)
    - [Acceptance Tests](#acceptance-tests)
    - [Smoke Testing](#smoke-testing)
    - [CVA - A New Approach to Variants](#cva---a-new-approach-to-variants)
  - [🤖 ChatGPT Code Review](#-chatgpt-code-review)
  - [💻 Environment Variables handling](#-environment-variables-handling)
  - [🤝 Contribution](#-contribution)
  - [Support](#support)
  - [📜 License](#-license)
  - [Contributors](#contributors)

## 🎯 Getting Started

To get started with this boilerplate, follow these steps:

1. Fork & clone repository:

```bash
## Don't forget to ⭐ star and fork it first :)
git clone https://github.com/tomek-i/poket-cash.git
```

2. Install the dependencies:

```bash
yarn install --frozen-lockfile
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. This project uses a git hook to enforce [conventional commits](https://github.com/qoomon/git-conventional-commits). To install the git hook, run the following command in the root directory of the project:

```sh
brew install pre-commit
pre-commit install -t commit-msg
```

## 🚀 Deployment

Easily deploy your Next.js app with [Vercel](https://vercel.com) by clicking the button below:

[![Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/tomek-i/nextjs-vercel-template)

## 📃 Scripts Overview

The following scripts are available in the `package.json`:

In the project directory, you can run various scripts:

### Development and Production

- `yarn dev`: Runs the app in development mode with forced color support in the terminal.
- `yarn build`: Generates Prisma client and builds the Next.js application for production.
- `yarn start`: Starts the Next.js application in production mode.
- `yarn firebase:start`: Starts the Firebase emulator for local development.

### Linting and Formatting

- `yarn lint`: Runs the Next.js linter on the project files.
- `yarn lint:fix`: Runs the Next.js linter on the project files and fixes fixable issues.
- `yarn prettier`: Checks the formatting of code files against Prettier configuration.
- `yarn prettier:fix`: Formats code files according to the Prettier configuration.
- `yarn format`: Alias for `yarn run prettier:fix`, formats code files.

### Deployment

- `yarn vercel`: Deploys the project using Vercel.
- `yarn vercel:dev`: Runs the project in development mode on Vercel.
- `yarn vercel:prod`: Deploys the project in production mode on Vercel.

### Testing

- `yarn test`: Runs the Jest test runner in the interactive watch mode.
- `yarn e2e:headless`: Runs end-to-end tests using Playwright in headless mode.
- `yarn e2e:report`: Displays the Playwright test report.
- `yarn e2e:ui`: Runs end-to-end tests using Playwright with a UI.
- `yarn storybook`: Runs Storybook in development mode.
- `yarn storybook:test`: Runs tests in Storybook.
- `yarn storybook:build`: Builds the Storybook for production.

### Database Management

- `yarn prisma:push`: Pushes the Prisma schema state to the database and generates Prisma client.
- `yarn prisma:generate`: Generates the Prisma client.
- `yarn prisma:migrate`: Runs Prisma migrations in development mode.
- `yarn prisma:studio`: Opens Prisma Studio for database management.

### Utilities and Analysis

- `yarn analyze`: Analyzes the webpack bundle size during the build process.
- `yarn plop`: Runs the Plop generator for scaffolding new code files.

## 🧪 Testing

This boilerplate comes with various testing setups to ensure your application's reliability and robustness.

### Running Tests

- **Unit and integration tests**: Run Jest tests using `yarn test`
- **End-to-end tests (headless mode)**: Run Playwright tests in headless mode with `yarn e2e:headless`
- **End-to-end tests (UI mode)**: Run Playwright tests with UI using `yarn e2e:ui`

<!-- <img width="1392" alt="image" src="https://user-images.githubusercontent.com/28964599/233666655-93b7d08b-2fd8-406a-b43c-44d4d96cf387.png"> -->

### Acceptance Tests

To write acceptance tests, we leverage Storybook's [`play` function](https://storybook.js.org/docs/react/writing-stories/play-function#writing-stories-with-the-play-function). This allows you to interact with your components and test various user flows within Storybook.

```ts
/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText("email", {
      selector: "input",
    })

    await userEvent.type(emailInput, "example-email@email.com", {
      delay: 100,
    })

    const passwordInput = canvas.getByLabelText("password", {
      selector: "input",
    })

    await userEvent.type(passwordInput, "ExamplePassword", {
      delay: 100,
    })
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole("button")

    await userEvent.click(submitButton)
  },
}
```

### Smoke Testing

In this boilerplate, we use Storybook's out-of-the-box support for smoke testing to verify that components render correctly without any errors. Just run `yarn test-storybook` to perform smoke testing. Remember to write stories in JSX or TSX format only. Smoke testing and a lot of other functionalities dont work well with MDX stories.

### CVA - A New Approach to Variants

While CSS-in-TS libraries such as [Stitches](https://stitches.dev/) and [Vanilla Extract](https://vanilla-extract.style/) are great for building type-safe UI components, they might not be the perfect fit for everyone. You may prefer more control over your stylesheets, need to use a framework like Tailwind CSS, or simply enjoy writing your own CSS.

Creating variants using traditional CSS can be a tedious task, requiring you to manually match classes to props and add types. CVA is here to take that pain away, allowing you to focus on the enjoyable aspects of UI development. By providing an easy and type-safe way to create variants, CVA simplifies the process and helps you create powerful design systems without compromising on the flexibility and control of CSS.

## 🤖 ChatGPT Code Review

We've integrated the innovative [ChatGPT Code Review](https://github.com/anc95/ChatGPT-CodeReview) for AI-powered, automated code reviews. This feature provides real-time feedback on your code, helping improve code quality and catch potential issues.

To use ChatGPT Code Review, add an `OPENAI_API_KEY` environment variable with an appropriate key from the OpenAI platform. For setup details, refer to the [Using GitHub Actions](https://github.com/anc95/ChatGPT-CodeReview#using-github-actions) section in the documentation.

<!-- ![image](https://user-images.githubusercontent.com/28964599/233685071-e1371edf-6359-41c3-a989-335d6ee09cb7.png) -->

## 💻 Environment Variables handling

[T3 Env](https://env.t3.gg/) is a library that provides environmental variables checking at build time, type validation and transforming. It ensures that your application is using the correct environment variables and their values are of the expected type. You’ll never again struggle with runtime errors caused by incorrect environment variable usage.

Config file is located at `env.mjs`. Simply set your client and server variables and import `env` from any file in your project.

```ts
export const env = createEnv({
  server: {
    // Server variables
    SECRET_KEY: z.string(),
  },
  client: {
    // Client variables
    API_URL: z.string().url(),
  },
  runtimeEnv: {
    // Assign runtime variables
    SECRET_KEY: process.env.SECRET_KEY,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})
```

If the required environment variables are not set, you'll get an error message:

```sh
  ❌ Invalid environment variables: { SECRET_KEY: [ 'Required' ] }
```

## 🤝 Contribution

Contributions are always welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes, and commit them using the [Conventional Commits](https://www.conventionalcommits.org/) format.
4. Push your changes to the forked repository.
5. Create a pull request, and we'll review your changes.

## Support

<!-- If you're looking for help or simply want to share your thoughts about the project, we encourage you to join our Discord community. Here's the link: [https://blazity.com/discord](https://blazity.com/discord). It's a space where we exchange ideas and help one another. Everyone's input is appreciated, and we look forward to welcoming you.

<br />
<a href="https://discord.gg/fyWtyNKmfX" style="width: 100%; display: flex; justify-content: center;">
  <img src="https://discordapp.com/api/guilds/1111676875782234175/widget.png?style=banner2" alt="Blazity Discord Banner"/>
</a>
<br /> -->

## 📜 License

This project is licensed under the MIT License. For more information, see the [LICENSE](./LICENSE) file.

## Contributors

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- readme: collaborators,contributors -start -->
<!-- readme: collaborators,contributors -end -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
