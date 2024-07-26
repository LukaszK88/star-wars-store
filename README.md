### Prerequisites

1. Install Node 20.*
2. Run `npm install` in root of the project
3. Run `npm run dev` to start project locally
4. Open [http://localhost:3000](http://localhost:3000)

### Code quality

* Lint - `npm run lint`
* Unit test - `npm run test`
* E2E test - `npm run e2e:run`

### About the Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Styling
The project is using [Carbon Design System](https://carbondesignsystem.com/) in combination with [TailwindCSS](https://tailwindcss.com/).

`Sass` is the preprocessor for the project, given Carbon Design System realies on Sass.

#### State Managment

Given lightweight nature of the project I have decided to use [SWR](https://swr.vercel.app/docs/with-nextjs) for manging network state, which is lightweight and recommended by Next.js crew.

Any global state is managed by React Context API.

#### Tests

The project has comprehensive unit tests coverage using [Jest](https://jestjs.io/) in combination with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

Beyond unit tests the project included E2E coverage using [Cypress](https://www.cypress.io/) with stubbed API requests.
Stubbed requests ensure we are focusing on testing integration flows and UI instead of API.