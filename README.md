# an-pham-scentronix

## How to install dependencies
- Go to your `root` folder (same level as frontend and backend) and run: ```bash npm i```
- Go to `frontend` folder and run: ```bash npm i```
- Go to `backend` folder and run: ```bash npm i```

## Build your Next.js application
- Go to `frontend` folder and run:
```bash
npm run build
```

## How to run project
- You can run both the frontend and backend simultaneously
- Go to `root` folder and run 
```bash
npm run dev
```
    - The Next.js frontend will run on http://localhost:3000 (you can configure the port in the .env file)
    - The NestJS backend will run on http://localhost:3001 (you can configure the port in the .env file)

## End points
- Access `http://localhost:3000` to test frontend
- Access `http://localhost:3001/find` to test backend `findServer` method

## Run Tests
- Go to `backend` folder and run:
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Trouble shooting
### EADDRINUSE: address already in use
The error `EADDRINUSE: address already in use :::3000` in NestJS indicates that port `3000` is already being used by another process, so NestJS is unable to bind to it. Here's how to fix it:

### Solution 1: Kill the Process Using Port 3000
You can manually stop the process that is currently using port `3000`. To do this:

#### On macOS or Linux:
1. Find the process ID (PID) using port `3000`:
   ```bash
   lsof -i :3000
   ```

2. This will return the PID of the process using the port. Kill the process using:
   ```bash
   kill -9 <PID>
   ```

#### On Windows:
1. Open Command Prompt as Administrator.
2. Kill the node process using:
   ```bash
   taskkill /F /IM node.exe
   ```

### Solution 2: Change the Port
If you don't want to terminate the existing process, you can change the port in your NestJS application.

You can set the port using an environment variable:

In `.env` file, update the port to new value, for ex, `3002`:
   ```bash
   PORT=3002
   ```

