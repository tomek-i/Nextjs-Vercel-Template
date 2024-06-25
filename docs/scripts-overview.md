# 📃 Scripts Overview

The following scripts are available in the `package.json`:

In the project directory, you can run various scripts:

## Development and Production

- `yarn dev`: Runs the app in development mode with forced color support in the terminal.
- `yarn build`: Generates Prisma client and builds the Next.js application for production.
- `yarn start`: Starts the Next.js application in production mode.
- `yarn firebase:start`: Starts the Firebase emulator for local development.

## Linting and Formatting

- `yarn lint`: Runs the Next.js linter on the project files.
- `yarn lint:fix`: Runs the Next.js linter on the project files and fixes fixable issues.
- `yarn prettier`: Checks the formatting of code files against Prettier configuration.
- `yarn prettier:fix`: Formats code files according to the Prettier configuration.
- `yarn format`: Alias for `yarn run prettier:fix`, formats code files.

## Deployment

- `yarn vercel`: Deploys the project using Vercel.
- `yarn vercel:dev`: Runs the project in development mode on Vercel.
- `yarn vercel:prod`: Deploys the project in production mode on Vercel.

## Testing

- `yarn test`: Runs the Jest test runner in the interactive watch mode.
- `yarn e2e:headless`: Runs end-to-end tests using Playwright in headless mode.
- `yarn e2e:report`: Displays the Playwright test report.
- `yarn e2e:ui`: Runs end-to-end tests using Playwright with a UI.
- `yarn storybook`: Runs Storybook in development mode.
- `yarn storybook:test`: Runs tests in Storybook.
- `yarn storybook:build`: Builds the Storybook for production.

## Database Management

- `yarn prisma:push`: Pushes the Prisma schema state to the database and generates Prisma client.
- `yarn prisma:generate`: Generates the Prisma client.
- `yarn prisma:migrate`: Runs Prisma migrations in development mode.
- `yarn prisma:studio`: Opens Prisma Studio for database management.

## Utilities and Analysis

- `yarn analyze`: Analyzes the webpack bundle size during the build process.
- `yarn plop`: Runs the Plop generator for scaffolding new code files.
