# Building an Express Application with Routing

This guide will show you how to build a simple Express application with various routing techniques, including handling parameters and errors.

## Step 1: Initialize Your Project

First, initialize your project to create a `package.json` file.

```bash
npm init
```

Follow the prompts to enter information about your project.

## Step 2: Install Express

Install the Express framework:

```bash
npm install express
```

## Step 3: Create Your Express Application

Create a file named `index.js` and add the following code:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About description here');
});
```

### Explanation:

- **Route `/`**: This route sends "Hello World" when accessed.
- **Route `/about`**: This route sends "About description here" when accessed.

## Step 4: Single Routing

Add a route to handle a single user ID parameter:

```js
app.get('/user/id/:id', (req, res) => {
  res.send(req.params.id);
});
```

### Explanation:

- **Route `/user/id/:id`**: This route captures the user ID from the URL and sends it back in the response.

## Step 5: Multiple Routing

Define a list of courses and create routes to access them by ID or name:

```js
const courses = [
  { id: 1, name: 'JS' },
  { id: 2, name: 'Node' },
  { id: 3, name: 'React' }
];

// Get a course by ID
app.get('/courses/id/:id', (req, res) => {
  let course = courses.find(course => course.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send('The course with the given id was not found');
  }
  res.send(course);
});

// Get a course by Name
app.get('/courses/name/:name', (req, res) => {
  let course = courses.find(course => course.name === req.params.name);
  if (!course) {
    return res.status(404).send('The course with the given name was not found');
  }
  res.send(course);
});
```

### Explanation:

- **Route `/courses/id/:id`**: This route finds a course by its ID. If the course is not found, it sends a 404 status with an error message.
- **Route `/courses/name/:name`**: This route finds a course by its name. If the course is not found, it sends a 404 status with an error message.

## Step 6: Start the Server

Finally, start the server on port 3000 (or a port specified in the environment variables):

```js
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
```

## Summary

1. **Initialize your project:**
    ```bash
    npm init
    ```

2. **Install Express:**
    ```bash
    npm install express
    ```

3. **Create your initial Express application (`index.js`):**
    ```js
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
      res.send('Hello World');
    });

    app.get('/about', (req, res) => {
      res.send('About description here');
    });
    ```

4. **Add single routing for user ID:**
    ```js
    app.get('/user/:id', (req, res) => {
      res.send(req.params.id);
    });
    ```

5. **Add multiple routing for courses:**
    ```js
    const courses = [
      { id: 1, name: 'JS' },
      { id: 2, name: 'Node' },
      { id: 3, name: 'React' }
    ];

    app.get('/courses/id/:id', (req, res) => {
      let course = courses.find(course => course.id === parseInt(req.params.id));
      if (!course) {
        return res.status(404).send('The course with the given id was not found');
      }
      res.send(course);
    });

    app.get('/courses/name/:name', (req, res) => {
      let course = courses.find(course => course.name === req.params.name);
      if (!course) {
        return res.status(404).send('The course with the given name was not found');
      }
      res.send(course);
    });
    ```

6. **Start the server:**
    ```js
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
    ```

By following these steps, you can create a robust Express application with various routes and error handling capabilities.
