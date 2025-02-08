const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation (e.g., database query)
  someAsyncOperation(() => {
    res.send('Hello!');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation(callback) {
  // Simulate asynchronous operation
  setTimeout(callback, 1000);
}