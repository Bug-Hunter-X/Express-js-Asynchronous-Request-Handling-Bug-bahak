# Express.js Asynchronous Request Handling Bug

This repository demonstrates a common bug in Express.js applications related to asynchronous request handling.  The bug arises when an asynchronous operation (like a database query or external API call) is performed within a request handler, and the response is sent only after the operation completes.  If the request ends before the operation finishes, unexpected behavior or errors can occur.

## Bug Description
The provided `bug.js` file contains an Express.js app with a route handler that simulates an asynchronous operation using `setTimeout`. The response is sent inside the callback of this operation. Under heavy load, this can lead to race conditions where the response is sent too late and the connection might be closed before the response reaches the client, leading to errors.

## Solution
The `bugSolution.js` file demonstrates a solution using promises to handle the asynchronous operation gracefully. This ensures the response is always sent correctly even during high load.