# Silent Port Binding Failure in Node.js HTTP Server

This repository demonstrates a common, yet subtle, issue in Node.js HTTP servers: the lack of informative error handling when attempting to bind to an already-occupied port.

## Problem

The provided `server.js` file creates a simple HTTP server.  If port 3000 is already in use (e.g., by another instance of the server or a different application), the server will fail to start *silently*.  No error message is printed to the console, leaving developers to guess the cause of the problem.

## Solution

The `serverSolution.js` file demonstrates a robust solution.  It uses the `'error'` event listener to catch port binding errors and provide informative error messages to the console.  This significantly aids in debugging and improves the overall user experience.

## How to reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Run `node server.js` again in another terminal.  Observe that the second server starts without any indication of failure. This should be changed to give an error to the user.
4. Run `node serverSolution.js`.  Observe that the second server will output an error message to the console, clearly indicating the port conflict.
