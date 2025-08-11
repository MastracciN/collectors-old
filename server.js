const app = require('./app');
console.log(typeof app);          // should print 'function'
console.log(typeof app.listen);   // should print 'function'

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
