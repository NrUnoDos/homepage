# What is this?

My "personal" homepage currently used for working with PDF documents.

## Frontend

A [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Backend

A FastAPI project, that can host the exported static frontend files - to be hosted
on [pythonanywhere.com](https://www.pythonanywhere.com/)..

### Local Development

First, run the frontend development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Running the frontend together with backend services

Run a container build from the Dockerfile. The application will be available at [http://localhost:8000](http://localhost:8000).
