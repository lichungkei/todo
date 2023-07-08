const express = require('express');
const todoRoutes = require('./route');

const app = express();

app.use(express.json());
app.use('/api/todo', todoRoutes);

app.get('/', (req, res) => {
res.send('Todo API root')
})

app.listen(3000, () => console.log('Server started!'))