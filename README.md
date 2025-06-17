# Hello Next.js App

A simple Next.js application that displays "Hello" on the page.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Built with Next.js 14 and React 18
- Styled with Tailwind CSS
- TypeScript support
- Responsive design

## Project Structure

- `app/page.tsx` - Main page component
- `app/layout.tsx` - Root layout component
- `app/globals.css` - Global styles with Tailwind CSS
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `next.config.js` - Next.js configuration

## Push to GitHub

This project includes convenient scripts to automatically push changes to GitHub:

### Option 1: Using the shell script (Mac/Linux)
```bash
./push-to-github.sh "Your commit message"
```

### Option 2: Using the batch file (Windows)
```cmd
push-to-github.bat "Your commit message"
```

### Option 3: Using npm script (All platforms)
```bash
npm run push "Your commit message"
```

If no commit message is provided, it will use "Update project files" as the default message.

The scripts will:
- Check for changes
- Add all modified files
- Show what will be committed
- Commit with your message
- Push to GitHub
- Provide colored output with status updates

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.