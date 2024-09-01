

# Portfolio - Vinay Gupta

This is the repository for my personal portfolio website, showcasing my projects and skills. It is built with React and deployed using GitHub Pages.


## Setup

To get started with the project, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/vinaytheprogrammer/vinayGupta.git
cd vinayGupta
```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

## Development

To start the development server and see the website locally, run:

```bash
npm start
```

This will start the development server at `http://localhost:3000`.

## Build and Deployment

### 1. Build the Project

To create an optimized production build, run:

```bash
npm run build
```

### 2. Deploy to GitHub Pages

To deploy the project to GitHub Pages, run:

```bash
npm run deploy
```

Ensure that your `package.json` has the correct `homepage` field:

```json
"homepage": "https://vinaytheprogrammer.github.io/vinayGupta.io"
```

This field tells the build script where the application will be hosted.

## Common Issues

### 1. Environment Issues During Build

If you encounter errors during the build process, such as environment issues, try the following steps:

#### Clean the Cache

Clear the npm cache to prevent any corrupted files:

```bash
npm cache clean --force
```

> **Note:** Using `--force` will disable npm's recommended protections. This is safe in most cases, but proceed with caution.

#### Verify Cache is Cleared

To verify that the cache has been cleared, run:

```bash
npm cache verify
```

#### Reinstall Dependencies

After clearing the cache, reinstall the project's dependencies:

```bash
npm install
```

#### Retry Building

Once dependencies are reinstalled, try building the project again:

```bash
npm run build
```

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
