# Project Template

## ✨ Features

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
- TODO: need to add Vercel, firebase, plop, prisma

## 📒 Table of Contents

- [Project Template](#project-template)
  - [✨ Features](#-features)
  - [📒 Table of Contents](#-table-of-contents)
  - [🎯 Getting Started](#-getting-started)
  - [🚀 Deployment](#-deployment)
  - [📃 Scripts](./docs/scripts-overview.md)
  - [🧪 Testing](./docs/testing.md)
  - [✨ Other Features](./docs/features.md)
  - [📜 License](#-license)
  - [🤝 Contribution](#-contribution)
  - [💡 Acknowledgements and Inspirations](#-acknowledgements-and-inspirations)
  - [🫂 Contributors](#-contributors)

## 🎯 Getting Started

To get started with this boilerplate, follow these steps:

1. Fork & clone repository:

```bash
## Don't forget to ⭐ star and fork it first :)
git clone https://github.com/tomek-i/Nextjs-Vercel-Template.git
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

## Scripts

For an overview of the available scripts, have a look at the [scripts overview](./docs/scripts-overview.md) file.

## Other Features

For an overview of the available features, have a look at the [features overview](./docs/features.md) file.

## 📜 License

This project is licensed under the MIT License. For more information, see the [LICENSE](./LICENSE) file.

## 🤝 Contribution

We welcome all contributions! To get involved, please follow these steps:

1. Fork this repository.
2. Create a new branch with a clear, descriptive name.
3. Make your changes and commit them using the [Conventional Commits](https://www.conventionalcommits.org/) format.
4. Push your changes to your forked repository.
5. Submit a pull request, and we will review your contributions.

## 💡 Acknowledgements and Inspirations

This project template has been inspired and informed by a variety of sources. The following projects have provided valuable insights, configurations, and best practices that have been instrumental in shaping the structure and setup of this template. We extend our gratitude to the creators and contributors of these projects for their pioneering work and for sharing their knowledge with the community.

- **Next Enterprise Starter**: A comprehensive Next.js project template designed for large-scale enterprise applications. It includes a variety of best practices and advanced configurations. [View on GitHub](https://github.com/Blazity/next-enterprise)

- **VSCode Settings Boilerplate**: A meticulously crafted boilerplate for VSCode settings, providing an optimized development environment setup. This resource has been invaluable in configuring our development environment for efficiency and consistency. [View on GitHub](https://github.com/tomek-i/vscode-settings-boilerplate/settings)

We encourage you to explore these projects to gain further insights into their configurations and how they might benefit your own development workflows.

## 🫂 Contributors

This project is the result of the hard work and dedication of a group of talented individuals who have contributed their time, expertise, and resources to make it a success. Below is a list of contributors and collaborators who have played a significant role in the development, maintenance, and enhancement of this project. We are deeply grateful for their contributions and are proud to showcase their efforts.

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- readme: collaborators,contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/tomek-i">
            <img src="https://avatars.githubusercontent.com/u/3699937?v=4" width="100;" alt="tomek-i"/>
            <br />
            <sub><b>Thomas Iwainski</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors -end -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

We encourage and welcome contributions from the community. If you would like to contribute to this project, please see our [contributing guidelines](#-contribution) for more information.
