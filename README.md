# React-shop-cloudfront

## Manual Deployment

### [CloudFront URL](https://d2i40hrpsu38az.cloudfront.net)

### [S3 Bucket URL returns 403](http://aws-course-manual-backet.s3-website-eu-west-1.amazonaws.com)

## CDK Deployment

### [CloudFront URL](https://d3fe2fx4mnlyj7.cloudfront.net)

### [S3 Bucket URL returns 403](http://nodejs-aws-shop-infrastructure-s3.s3-website-eu-west-1.amazonaws.com)

## Deployment Instructions

To deploy the application, follow these steps:

1. **Navigate to the Project Root**: Open your terminal and change the directory to the root of the project.

2. **Run the Deployment Command**: Execute the following command to build and deploy the project:

   ```bash
   npm run deploy
   ```

This command will compile the application for production and prepare it for deployment to the AWS. Ensure that your AWS credentials and configurations are set up correctly before running this command.

### Note:

Make sure to check the output for any errors during the build process. If the deployment is successful, you will receive a confirmation message along with the URLs to access your application.

## Overview

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.

### `deploy`

Builds the project for production deployment.
