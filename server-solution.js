const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Use async/await for better error handling
  (async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate a long-running task
      res.send('Hello World!');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  })();
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});