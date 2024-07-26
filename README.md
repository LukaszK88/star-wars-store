### Prerequisites

1. Install Node 20.x
2. Run `npm install` in the root of the project.
3. Run `npm run dev` to start the project locally.
4. Open [http://localhost:3000](http://localhost:3000).

### Code Quality

- **Lint:** `npm run lint`
- **Unit Test:** `npm run test`
- **E2E Test:** `npm run e2e:run`

### About the Project

[View Production Version](https://star-wars-store-nine.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Styling

The project uses the [Carbon Design System](https://carbondesignsystem.com/) in combination with [TailwindCSS](https://tailwindcss.com/). `Sass` is the preprocessor for the project, as the Carbon Design System relies on Sass.

#### State Management

Given the lightweight nature of the project, [SWR](https://swr.vercel.app/docs/with-nextjs) is used for managing network state, which is lightweight and recommended by the Next.js team. Any global state is managed using the React Context API.

#### Tests

The project includes comprehensive unit test coverage using [Jest](https://jestjs.io/) in combination with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

In addition to unit tests, the project also includes E2E test coverage using [Cypress](https://www.cypress.io/) with stubbed API requests. These stubbed requests ensure the focus is on testing integration flows and the UI rather than the API.
