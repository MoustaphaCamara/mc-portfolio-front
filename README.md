This is my personal developer portfolio.
It is built with **React**, **TypeScript** and **Sanity**. The project is containerized using Docker.

You can view the live site at [moustaphacamara.fr](https://moustaphacamara.fr).

To run the project locally, refer to the [Run the project](#run-the-project) section.

---

# Project Structure

The project is organized as follows:

```graphql
mc-portfolio-front/
├── .github/
│   └── workflows/          # GitHub Actions
├── public/                 # Static assets served directly
│   └── ...                 # e.g., favicon, images
├── src/                    # source code
│   ├── assets/             # static assets like images and fonts
│   ├── components/         # reusable React components
│   ├── pages/              # Page-level components (e.g., Home, About)
│   ├── sanity/             # Sanity CMS integration (schemas, queries)
│   ├── styles/             # Global and component-specific styles
│   ├── App.tsx             # Root component
│   └── main.tsx            # App's entry point
├── .env.example            # Example environment variables
├── .eslintignore           # files and directories ignored by ESLint
├── .gitignore              # files and directories ignored by Git
├── .prettierignore         # files and directories ignored by Prettier
├── .prettierrc.cjs         # prettier configuration
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template used by Vite
├── package.json            # project metadata and dependencies
├── tsconfig.json           # TypeScript compiler options
├── tsconfig.node.json      # TypeScript options for Node.js
├── vite.config.ts          # Vite configuration
└── README.md               # Project doc
```

## Technologies Used

- React
- TypeScript
- Sass
- Vite
- Sanity
- ESLint
- Prettier

## Dev: run the project locally

Clone the project:

```bash
git clone https://github.com/MoustaphaCamara/mc-portfolio-front.git
```

Get inside the cloned repository and copy the .env.example into a new .env file

```bash
# go inside cloned repository
cd mc-portfolio-front
# copy the .env.example to a new .env
cp .env.example .env
```

Edit the new .env file to fill in these values:

```env
VITE_PROJECT_ID=kwqfts6s # This example works with a public read-only dev dataset
VITE_DATASET=development
VITE_API_VERSION=YYYY-MM-DD
VITE_PORT=5198 # or whichever port you want to expose to
```

### Using vite

```bash
# install dependencies
npm install
# start server (at port 5173)
npm run dev
```

### With Docker

Build and run the project using docker compose.

```bash
docker compose up -d --build
```

See the project in dev mode at port 5198:

`http://localhost:5198/`
