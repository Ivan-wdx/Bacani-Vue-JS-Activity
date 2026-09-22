const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let users = [
  { id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000 },
  { id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary: 45000 },
  { id: 3, name: 'James', email: 'james@msn.com', age: 35, salary: 30000 },
  { id: 4, name: 'John', email: 'john@gmail.com', age: 40, salary: 25000 },
  { id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000 },
  { id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000 },
];

app.get('/', (req, res) => {
  res.send(`
        <h1>API Endpoints Activity</h1>
        <h3>Available Routes:</h3>
        <ul>
            <li>GET /api/users</li>
            <li>GET /api/users/:id</li>
            <li>GET /api/users/:id/params</li>
            <li>POST /api/users</li>
            <li>DELETE /api/delete/:id</li>
        </ul>
    `);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  res.json(user);
});

app.get('/api/users/:id/params', (req, res) => {
  res.json({
    message: 'Route parameter received',
    id: req.params.id,
  });
});

app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    age: parseInt(req.body.age),
    salary: parseInt(req.body.salary),
  };

  users.push(newUser);

  res.status(201).json({
    message: 'User added successfully',
    user: newUser,
  });
});

app.delete('/api/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.json({
    message: 'User deleted successfully',
    user: deletedUser[0],
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
